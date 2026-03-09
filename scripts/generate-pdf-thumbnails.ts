/**
 * PDF Thumbnail Generator
 *
 * Note: This script requires `pdftoppm` (from poppler-utils) to be installed.
 * On macOS: brew install poppler
 * On Ubuntu: sudo apt-get install poppler-utils
 *
 * It converts the first page of each PDF to an image, then optimizes with sharp.
 */
import { execSync } from "child_process";
import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync, unlinkSync } from "fs";
import { join, parse } from "path";

const ROOT = process.cwd();
const PORTFOLIO = join(ROOT, "Portfolio_Sadia Karim");
const OUTPUT = join(ROOT, "public/images/projects");

const pdfDirs = [
  join(PORTFOLIO, "Editing and coordinaiton"),
  join(PORTFOLIO, "Design and or editing"),
];

// Map PDF filenames to project slugs
const pdfToSlug: Record<string, string> = {
  "Annual Report 2024_Bangladesh": "annual-report-2024-educo",
  "Annual Report 2023_Educo Bangladesh": "annual-report-2023-educo",
  "Educo Bangladesh_Case Story Booklet_2025": "case-story-booklet-2025",
  "Education book Final": "education-book",
  "Migration Book Final": "migration-book",
  "KOICA PDF": "koica-publication",
  "ODHIKAR": "odhikar-publication",
  "Booklet-Ecotex": "ecotex-booklet",
  "Brochure_ECHOTEX": "echotex-brochure",
  "Gender brochure final": "gender-brochure",
  "migration brochure_new": "migration-brochure",
  "EAS- Brochure": "eas-brochure",
  "Educo Infograph": "educo-infograph",
  "Key note paper_12 Dec 19": "keynote-paper",
  "Module-1 Govt officials": "module-1-govt-officials",
  "Educo Desk Calendar 2025": "educo-desk-calendar-2025",
  "Educo Planner_2025": "educo-planner-2025",
  "EDUCO Notebook 2025": "educo-notebook-2025",
  "Desk calendar_06.11.2023": "desk-calendar-2023",
  "EDUCO Slip Pad": "educo-slip-pad",
  "Monthly Planner_06.11.2023": "monthly-planner-2023",
  "Notebook_06.11.2023": "notebook-2023",
  "Slip pad_06.11.2023": "slip-pad-2023",
  "16 Days Leaflet 2018_Eng": "16-days-leaflet-2018",
  "16 Days Leaflet_ 2018_Bng": "16-days-leaflet-2018-bng",
  "Leaflet _IWD 2018_Eng": "iwd-2018-leaflet",
  "Leaflet _OBR_ 2018": "obr-leaflet-2018",
  "Leaflet_Bangla 16 Days 2019": "16-days-leaflet-2019",
  "Leaflet_English 16 Days 2019": "16-days-leaflet-2019-eng",
  "leaflet_Bng_IWD 2019": "iwd-2019-leaflet",
  "Leaflet_IWD 2018 _ Bng": "iwd-2018-leaflet-bng",
  "Leaflet_Bangla_IWD2020": "iwd-2020-leaflet",
  "Gender Lens_April 18": "gender-lens-series",
  "Gender Lens_December 18": "gender-lens-dec-18",
  "Gender Lens_March 19": "gender-lens-mar-19",
  "Gender Lens- Aug 18": "gender-lens-aug-18",
  "YouthTalk 2021_e-version": "youth-talk-2021",
  "Youth Talk 2022": "youth-talk-2022",
  "DevTalk 2022-Dec": "dev-talk-2022",
  "GCD 2018": "gcd-2018",
  "Strategy paper": "strategy-paper",
  "Educo-one pager": "educo-one-pager",
  "Child Labour Elimination-one pager": "child-labour-one-pager",
  "Climate Change-one pager": "climate-change-one-pager",
  "AYE-one pager": "aye-one-pager",
  "GBV prevention project brief": "gbv-prevention-brief",
  "ODHIKAR_ project brief": "odhikar-project-brief",
  "migrants voice 3rd issue 2014": "migrants-voice",
  "pamphlet5": "pamphlet",
};

async function generateThumbnail(pdfPath: string, slug: string) {
  const tempPng = join(OUTPUT, `_temp_${slug}`);

  try {
    // Use pdftoppm to render first page
    execSync(
      `pdftoppm -png -f 1 -l 1 -r 200 -singlefile "${pdfPath}" "${tempPng}"`,
      { stdio: "pipe" }
    );

    const pngPath = `${tempPng}.png`;

    // Convert to WebP with sharp
    await sharp(pngPath)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(join(OUTPUT, `${slug}.webp`));

    // Clean up temp file
    if (existsSync(pngPath)) unlinkSync(pngPath);

    console.log(`  ✓ ${slug}`);
  } catch (err) {
    console.error(`  ✗ Error: ${slug} -`, (err as Error).message?.slice(0, 100));
  }
}

async function main() {
  console.log("=== PDF Thumbnail Generator ===\n");

  if (!existsSync(OUTPUT)) {
    mkdirSync(OUTPUT, { recursive: true });
  }

  // Check for pdftoppm
  try {
    execSync("which pdftoppm", { stdio: "pipe" });
  } catch {
    console.error(
      "Error: pdftoppm not found. Install poppler:\n  macOS: brew install poppler\n  Ubuntu: sudo apt-get install poppler-utils"
    );
    process.exit(1);
  }

  for (const dir of pdfDirs) {
    if (!existsSync(dir)) {
      console.log(`Skipping missing directory: ${dir}`);
      continue;
    }

    const pdfs = readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf"));
    console.log(`Processing ${pdfs.length} PDFs from ${dir}`);

    for (const pdf of pdfs) {
      const baseName = parse(pdf).name;
      const slug = pdfToSlug[baseName];

      if (slug) {
        await generateThumbnail(join(dir, pdf), slug);
      } else {
        console.log(`  ? No slug mapping for: ${baseName}`);
      }
    }
  }

  console.log("\n=== Done! ===");
}

main().catch(console.error);
