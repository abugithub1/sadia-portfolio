import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, parse } from "path";

const ROOT = process.cwd();
const PORTFOLIO = join(ROOT, "Portfolio_Sadia Karim");
const PUBLIC = join(ROOT, "public/images/photos");

const FULL_WIDTH = 2000;
const THUMB_WIDTH = 600;
const QUALITY = 80;
const THUMB_QUALITY = 70;

async function processImage(
  inputPath: string,
  outputDir: string,
  baseName: string
) {
  const name = baseName.replace(/\.[^.]+$/, "");

  // Full size WebP
  await sharp(inputPath)
    .resize(FULL_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(join(outputDir, `${name}.webp`));

  // Thumbnail WebP
  await sharp(inputPath)
    .resize(THUMB_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(join(outputDir, `thumb_${name}.webp`));

  console.log(`  ✓ ${name}`);
}

async function processDirectory(srcDir: string, destDir: string) {
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }

  const files = readdirSync(srcDir).filter((f) =>
    /\.(jpg|jpeg|png|tif|tiff)$/i.test(f)
  );

  console.log(`\nProcessing ${files.length} images from ${srcDir} -> ${destDir}`);

  for (const file of files) {
    try {
      await processImage(join(srcDir, file), destDir, file);
    } catch (err) {
      console.error(`  ✗ Error processing ${file}:`, err);
    }
  }
}

async function main() {
  console.log("=== Image Optimization Pipeline ===\n");

  // Educo Bangladesh photos
  await processDirectory(
    join(PORTFOLIO, "Photo gallery/My Work_Educo Bangladesh"),
    join(PUBLIC, "educo")
  );

  // Personal photos
  await processDirectory(
    join(PORTFOLIO, "Photo gallery/My work_Personal"),
    join(PUBLIC, "personal")
  );

  // Hero image (pick a great one for the homepage)
  const heroDir = join(ROOT, "public/images/hero");
  if (!existsSync(heroDir)) {
    mkdirSync(heroDir, { recursive: true });
  }

  // Use a few strong photos for the hero
  const heroSources = [
    join(PORTFOLIO, "Photo gallery/My Work_Educo Bangladesh/DSC02245.JPG"),
    join(PORTFOLIO, "Photo gallery/My Work_Educo Bangladesh/DSC03229.jpg"),
    join(PORTFOLIO, "Photo gallery/My Work_Educo Bangladesh/DSC03669.jpg"),
  ];

  console.log("\nProcessing hero images...");
  for (const src of heroSources) {
    const name = parse(src).name;
    try {
      await sharp(src)
        .resize(2400, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(join(heroDir, `${name}.webp`));

      // Blur placeholder
      const blurBuf = await sharp(src)
        .resize(20)
        .webp({ quality: 20 })
        .toBuffer();
      console.log(
        `  ✓ hero: ${name} (blur placeholder: ${blurBuf.length} bytes)`
      );
    } catch (err) {
      console.error(`  ✗ Error processing hero ${name}:`, err);
    }
  }

  console.log("\n=== Done! ===");
}

main().catch(console.error);
