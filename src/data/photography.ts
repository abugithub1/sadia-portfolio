export type PhotoCollection = "educo" | "personal";

export interface Photo {
  src: string;
  thumb: string;
  blurDataUrl?: string;
  alt: string;
  collection: PhotoCollection;
  width: number;
  height: number;
}

// Educo Bangladesh documentary photography
const educoFiles = [
  "DSC00781", "DSC01325", "DSC02178", "DSC02200", "DSC02206",
  "DSC02208", "DSC02228", "DSC02245", "DSC02266", "DSC02296",
  "DSC02324", "DSC02325", "DSC02346", "DSC02392", "DSC02426",
  "DSC02465", "DSC02566", "DSC02780", "DSC02849", "DSC02980",
  "DSC03011", "DSC03020", "DSC03229", "DSC03233", "DSC03235",
  "DSC03244", "DSC03248", "DSC03251", "DSC03259", "DSC03265",
  "DSC03669", "DSC03670", "DSC03687", "DSC03690", "DSC03702",
  "DSC03714", "DSC03718", "DSC03739", "DSC03743", "DSC03839",
  "DSC03934", "DSC03947", "DSC03953", "DSC03956", "DSC03960",
  "DSC03963", "DSC03971", "DSC03975", "DSC03977", "DSC03988",
  "DSC03995", "DSC04014", "DSC04033", "DSC04103", "DSC04145",
  "DSC04992", "DSC05016", "DSC05024", "DSC06063", "DSC06170",
  "DSC06172", "DSC07367", "DSC07621", "DSC08666", "IMG_0155",
  "IMG_0350", "IMG_0543", "IMG_0552", "IMG_0561", "IMG_0643",
  "IMG_08710", "IMG_5438", "IMG_5536", "IMG_5762", "IMG_5823",
  "IMG_5833",
];

const personalFiles = [
  "_MG_5481", "_MG_5983", "_MG_6476", "DSC02633", "DSC02643",
  "DSC03071", "DSC03092", "DSC03103", "DSC06108", "IMG_8965",
  "SP7_6320",
];

export const educoPhotos: Photo[] = educoFiles.map((name) => ({
  src: `/images/photos/educo/${name}.webp`,
  thumb: `/images/photos/educo/thumb_${name}.webp`,
  alt: `Documentary photography — Educo Bangladesh — ${name}`,
  collection: "educo" as const,
  width: 2000,
  height: 1333,
}));

export const personalPhotos: Photo[] = personalFiles.map((name) => ({
  src: `/images/photos/personal/${name}.webp`,
  thumb: `/images/photos/personal/thumb_${name}.webp`,
  alt: `Personal photography — ${name}`,
  collection: "personal" as const,
  width: 2000,
  height: 1333,
}));

export const allPhotos: Photo[] = [...educoPhotos, ...personalPhotos];

// Curated selection for homepage photo strip
export const featuredPhotos: Photo[] = [
  educoPhotos[0],  // DSC00781
  educoPhotos[2],  // DSC02178
  educoPhotos[7],  // DSC02245
  educoPhotos[12], // DSC02346
  educoPhotos[17], // DSC02780
  educoPhotos[22], // DSC03229
  educoPhotos[30], // DSC03669
  educoPhotos[40], // DSC03934
  educoPhotos[54], // DSC04145
  educoPhotos[63], // DSC08666
  personalPhotos[0], // _MG_5481
  personalPhotos[1], // _MG_5983
];
