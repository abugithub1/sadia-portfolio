export type ProjectCategory =
  | "publications"
  | "branding"
  | "campaigns"
  | "brochures"
  | "infographics"
  | "motion";

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  role: string;
  thumbnail: string;
  images: string[];
  pdfUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}

export const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "publications", label: "Publications" },
  { value: "branding", label: "Branding" },
  { value: "campaigns", label: "Campaigns" },
  { value: "brochures", label: "Brochures" },
  { value: "infographics", label: "Infographics" },
  { value: "motion", label: "Motion" },
];

export const projects: Project[] = [
  // === EDITING AND COORDINATION (33 PDFs) ===
  {
    slug: "annual-report-2024-educo",
    title: "Annual Report 2024",
    client: "Educo Bangladesh",
    year: "2024",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Comprehensive annual report showcasing Educo Bangladesh's programs in education, child protection, and community development. Features editorial photography, infographics, and data visualization across 50+ pages.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/annual-report-2024-educo.webp",
    images: [],
    featured: true,
  },
  {
    slug: "annual-report-2023-educo",
    title: "Annual Report 2023",
    client: "Educo Bangladesh",
    year: "2023",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Annual report highlighting Educo Bangladesh's impact in child rights, education access, and gender equality. Editorial design with rich documentary photography.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/annual-report-2023-educo.webp",
    images: [],
    featured: true,
  },
  {
    slug: "case-story-booklet-2025",
    title: "Case Story Booklet 2025",
    client: "Educo Bangladesh",
    year: "2025",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "A collection of compelling case stories from Educo Bangladesh's field programs, documenting real impact on children and communities through narrative and photography.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/case-story-booklet-2025.webp",
    images: [],
    featured: true,
  },
  {
    slug: "education-book",
    title: "Education Book",
    client: "Educo Bangladesh",
    year: "2022",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "A comprehensive publication on education initiatives, featuring research findings, program methodologies, and impact stories from the field.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/education-book.webp",
    images: [],
  },
  {
    slug: "migration-book",
    title: "Migration Book",
    client: "Educo Bangladesh",
    year: "2020",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Publication exploring migration issues in Bangladesh, combining research, personal narratives, and documentary photography to tell the stories of migrant communities.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/migration-book.webp",
    images: [],
  },
  {
    slug: "koica-publication",
    title: "KOICA Publication",
    client: "KOICA",
    year: "2021",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Publication designed for the Korea International Cooperation Agency (KOICA), showcasing their development programs and partnerships in Bangladesh.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/koica-publication.webp",
    images: [],
  },
  {
    slug: "odhikar-publication",
    title: "ODHIKAR Publication",
    client: "ODHIKAR",
    year: "2019",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Publication for the ODHIKAR project, documenting community empowerment and rights-based approaches in development work.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/odhikar-publication.webp",
    images: [],
  },
  {
    slug: "ecotex-booklet",
    title: "Ecotex Booklet",
    client: "Ecotex",
    year: "2020",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "Corporate booklet for Ecotex, showcasing the company's commitment to sustainable and ethical garment manufacturing practices.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/ecotex-booklet.webp",
    images: [],
  },
  {
    slug: "echotex-brochure",
    title: "ECHOTEX Brochure",
    client: "Echotex",
    year: "2021",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "Corporate brochure for ECHOTEX, highlighting their sustainable manufacturing processes, corporate responsibility, and industry leadership.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/echotex-brochure.webp",
    images: [],
  },
  {
    slug: "gender-brochure",
    title: "Gender Brochure",
    client: "Educo Bangladesh",
    year: "2019",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "Brochure highlighting gender equality initiatives, promoting awareness of gender-based issues in education and community development.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/gender-brochure.webp",
    images: [],
  },
  {
    slug: "migration-brochure",
    title: "Migration Brochure",
    client: "Educo Bangladesh",
    year: "2019",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "Informational brochure on migration issues, designed to raise awareness and support for migrant communities and their families.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/migration-brochure.webp",
    images: [],
  },
  {
    slug: "eas-brochure",
    title: "EAS Brochure",
    client: "Educo Bangladesh",
    year: "2020",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "Brochure for the Education and Awareness program, communicating key program objectives and impact through engaging design.",
    role: "Design & Editing",
    thumbnail: "/images/projects/eas-brochure.webp",
    images: [],
  },
  {
    slug: "educo-infograph",
    title: "Educo Infograph",
    client: "Educo Bangladesh",
    year: "2022",
    category: "infographics",
    categoryLabel: "Infographic",
    description:
      "Data visualization and infographic design for Educo Bangladesh, presenting complex program data in accessible, engaging visual formats.",
    role: "Design & Coordination",
    thumbnail: "/images/projects/educo-infograph.webp",
    images: [],
    featured: true,
  },
  {
    slug: "keynote-paper",
    title: "Keynote Paper",
    client: "Educo Bangladesh",
    year: "2019",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Keynote paper design for a major conference, combining academic content with accessible editorial design.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/keynote-paper.webp",
    images: [],
  },
  {
    slug: "module-1-govt-officials",
    title: "Training Module — Government Officials",
    client: "Educo Bangladesh",
    year: "2021",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Training module designed for government officials, covering development program methodologies with clear instructional design.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/module-1-govt-officials.webp",
    images: [],
  },
  // Desk calendars, planners, stationery
  {
    slug: "educo-desk-calendar-2025",
    title: "Desk Calendar 2025",
    client: "Educo Bangladesh",
    year: "2025",
    category: "branding",
    categoryLabel: "Branding",
    description:
      "Custom desk calendar featuring documentary photography and Educo Bangladesh branding for the year 2025.",
    role: "Design & Coordination",
    thumbnail: "/images/projects/educo-desk-calendar-2025.webp",
    images: [],
  },
  {
    slug: "educo-planner-2025",
    title: "Planner 2025",
    client: "Educo Bangladesh",
    year: "2025",
    category: "branding",
    categoryLabel: "Branding",
    description:
      "Custom branded planner for Educo Bangladesh staff and partners, combining functionality with editorial photography.",
    role: "Design & Coordination",
    thumbnail: "/images/projects/educo-planner-2025.webp",
    images: [],
  },
  {
    slug: "educo-notebook-2025",
    title: "Notebook 2025",
    client: "Educo Bangladesh",
    year: "2025",
    category: "branding",
    categoryLabel: "Branding",
    description:
      "Branded notebook design for Educo Bangladesh, part of the 2025 stationery collection.",
    role: "Design",
    thumbnail: "/images/projects/educo-notebook-2025.webp",
    images: [],
  },
  {
    slug: "desk-calendar-2023",
    title: "Desk Calendar 2023",
    client: "Educo Bangladesh",
    year: "2023",
    category: "branding",
    categoryLabel: "Branding",
    description:
      "Desk calendar design featuring Educo Bangladesh's field photography and branding elements.",
    role: "Design & Coordination",
    thumbnail: "/images/projects/desk-calendar-2023.webp",
    images: [],
  },
  // Leaflets & campaigns
  {
    slug: "16-days-leaflet-2018",
    title: "16 Days of Activism — Leaflets",
    client: "Educo Bangladesh",
    year: "2018",
    category: "campaigns",
    categoryLabel: "Campaign",
    description:
      "Bilingual campaign leaflets (English & Bangla) for the 16 Days of Activism Against Gender-Based Violence, designed for wide distribution.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/16-days-leaflet-2018.webp",
    images: [],
  },
  {
    slug: "iwd-2018-leaflet",
    title: "International Women's Day 2018",
    client: "Educo Bangladesh",
    year: "2018",
    category: "campaigns",
    categoryLabel: "Campaign",
    description:
      "Bilingual campaign leaflets for International Women's Day, promoting gender equality and women's empowerment.",
    role: "Design & Coordination",
    thumbnail: "/images/projects/iwd-2018-leaflet.webp",
    images: [],
  },
  {
    slug: "16-days-leaflet-2019",
    title: "16 Days of Activism 2019",
    client: "Educo Bangladesh",
    year: "2019",
    category: "campaigns",
    categoryLabel: "Campaign",
    description:
      "Updated campaign materials for the 16 Days of Activism 2019, in both English and Bangla editions.",
    role: "Design & Coordination",
    thumbnail: "/images/projects/16-days-leaflet-2019.webp",
    images: [],
  },
  {
    slug: "iwd-2019-leaflet",
    title: "International Women's Day 2019",
    client: "Educo Bangladesh",
    year: "2019",
    category: "campaigns",
    categoryLabel: "Campaign",
    description:
      "Campaign leaflet for IWD 2019, continuing the visual language of Educo's gender equality communication materials.",
    role: "Design",
    thumbnail: "/images/projects/iwd-2019-leaflet.webp",
    images: [],
  },
  {
    slug: "iwd-2020-leaflet",
    title: "International Women's Day 2020",
    client: "Educo Bangladesh",
    year: "2020",
    category: "campaigns",
    categoryLabel: "Campaign",
    description:
      "Bangla campaign leaflet for International Women's Day 2020.",
    role: "Design",
    thumbnail: "/images/projects/iwd-2020-leaflet.webp",
    images: [],
  },
  {
    slug: "obr-leaflet-2018",
    title: "OBR Campaign Leaflet",
    client: "Educo Bangladesh",
    year: "2018",
    category: "campaigns",
    categoryLabel: "Campaign",
    description:
      "Campaign leaflet for an outreach and awareness initiative, designed for grassroots distribution.",
    role: "Design & Coordination",
    thumbnail: "/images/projects/obr-leaflet-2018.webp",
    images: [],
  },
  // Design and/or Editing PDFs
  {
    slug: "gender-lens-series",
    title: "Gender Lens Newsletter Series",
    client: "Educo Bangladesh",
    year: "2018–2019",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Quarterly newsletter series focusing on gender equality perspectives in education and development. Three editions: April 2018, August 2018, December 2018, and March 2019.",
    role: "Design & Editing",
    thumbnail: "/images/projects/gender-lens-series.webp",
    images: [],
  },
  {
    slug: "youth-talk-2021",
    title: "YouthTalk 2021",
    client: "Educo Bangladesh",
    year: "2021",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "E-publication amplifying youth voices on issues of education, rights, and social change in Bangladesh.",
    role: "Design & Editing",
    thumbnail: "/images/projects/youth-talk-2021.webp",
    images: [],
  },
  {
    slug: "youth-talk-2022",
    title: "Youth Talk 2022",
    client: "Educo Bangladesh",
    year: "2022",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Continuation of the Youth Talk series, featuring youth perspectives and engagement in development.",
    role: "Design & Editing",
    thumbnail: "/images/projects/youth-talk-2022.webp",
    images: [],
  },
  {
    slug: "dev-talk-2022",
    title: "DevTalk December 2022",
    client: "Educo Bangladesh",
    year: "2022",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Development-focused newsletter sharing insights, updates, and stories from Educo Bangladesh's programs.",
    role: "Design & Editing",
    thumbnail: "/images/projects/dev-talk-2022.webp",
    images: [],
  },
  {
    slug: "gcd-2018",
    title: "Global Campaign for Education 2018",
    client: "Educo Bangladesh",
    year: "2018",
    category: "campaigns",
    categoryLabel: "Campaign",
    description:
      "Campaign materials for the Global Campaign for Education, advocating for quality inclusive education.",
    role: "Design & Editing",
    thumbnail: "/images/projects/gcd-2018.webp",
    images: [],
  },
  {
    slug: "strategy-paper",
    title: "Strategy Paper",
    client: "Educo Bangladesh",
    year: "2021",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Strategic planning document outlining organizational direction, priorities, and implementation frameworks.",
    role: "Design & Editing",
    thumbnail: "/images/projects/strategy-paper.webp",
    images: [],
  },
  // One-pagers
  {
    slug: "educo-one-pager",
    title: "Educo — Organization One-Pager",
    client: "Educo Bangladesh",
    year: "2020",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "Concise one-page overview of Educo Bangladesh, designed for stakeholder engagement and quick reference.",
    role: "Design & Editing",
    thumbnail: "/images/projects/educo-one-pager.webp",
    images: [],
  },
  {
    slug: "child-labour-one-pager",
    title: "Child Labour Elimination — One-Pager",
    client: "Educo Bangladesh",
    year: "2020",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "One-page brief on child labour elimination initiatives, communicating program goals and impact.",
    role: "Design & Editing",
    thumbnail: "/images/projects/child-labour-one-pager.webp",
    images: [],
  },
  {
    slug: "climate-change-one-pager",
    title: "Climate Change — One-Pager",
    client: "Educo Bangladesh",
    year: "2021",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "One-page brief on climate change adaptation and resilience programs affecting children and communities.",
    role: "Design & Editing",
    thumbnail: "/images/projects/climate-change-one-pager.webp",
    images: [],
  },
  {
    slug: "aye-one-pager",
    title: "AYE Program — One-Pager",
    client: "Educo Bangladesh",
    year: "2020",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "One-page brief for the Advancing Youth Empowerment program.",
    role: "Design & Editing",
    thumbnail: "/images/projects/aye-one-pager.webp",
    images: [],
  },
  {
    slug: "gbv-prevention-brief",
    title: "GBV Prevention — Project Brief",
    client: "Educo Bangladesh",
    year: "2021",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "Project brief on gender-based violence prevention programming, designed for donors and stakeholders.",
    role: "Design & Editing",
    thumbnail: "/images/projects/gbv-prevention-brief.webp",
    images: [],
  },
  {
    slug: "odhikar-project-brief",
    title: "ODHIKAR — Project Brief",
    client: "Educo Bangladesh",
    year: "2020",
    category: "brochures",
    categoryLabel: "Brochure",
    description:
      "Project brief for the ODHIKAR community empowerment initiative.",
    role: "Design & Editing",
    thumbnail: "/images/projects/odhikar-project-brief.webp",
    images: [],
  },
  {
    slug: "migrants-voice",
    title: "Migrant's Voice — 3rd Issue",
    client: "Educo Bangladesh",
    year: "2014",
    category: "publications",
    categoryLabel: "Publication",
    description:
      "Third issue of the Migrant's Voice publication, giving platform to migrant communities' stories and perspectives. One of the earliest works in the portfolio.",
    role: "Design, Editing & Coordination",
    thumbnail: "/images/projects/migrants-voice.webp",
    images: [],
  },
  // Animations
  {
    slug: "educo-logo-electric",
    title: "Educo Logo Animation — Electric",
    client: "Educo Bangladesh",
    year: "2023",
    category: "motion",
    categoryLabel: "Motion",
    description:
      "Dynamic logo animation with electric visual effects for Educo Bangladesh's digital communications.",
    role: "Animation Design",
    thumbnail: "/images/projects/educo-logo-electric.webp",
    videoUrl: "/animations/Educo logo- electric.mp4",
    images: [],
  },
  {
    slug: "educo-logo-sweep",
    title: "Educo Logo Animation — CC Sweep",
    client: "Educo Bangladesh",
    year: "2023",
    category: "motion",
    categoryLabel: "Motion",
    description:
      "Elegant sweep-style logo animation for Educo Bangladesh brand presentations.",
    role: "Animation Design",
    thumbnail: "/images/projects/educo-logo-sweep.webp",
    videoUrl: "/animations/Educo Logo-Simple-CC Sweep.mp4",
    images: [],
  },
  {
    slug: "intervida-logo-animation",
    title: "Intervida Logo Animation",
    client: "Intervida",
    year: "2016",
    category: "motion",
    categoryLabel: "Motion",
    description:
      "Logo animation designed for Intervida (predecessor of Educo), a Spanish international development organization.",
    role: "Animation Design",
    thumbnail: "/images/projects/intervida-logo-animation.webp",
    videoUrl: "/animations/Intervida-Simple.mp4",
    images: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
