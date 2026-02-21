export interface ClientLogo {
  name: string;
  logo?: string;
}

export const clients: ClientLogo[] = [
  { name: "CYRELA", logo: "/logos/cyrela-logo.svg" },
  { name: "MRV", logo: "/logos/mrv-logo.png" },
  { name: "DIRECIONAL", logo: "/logos/direcional-logo.png" },
  { name: "TENDA", logo: "/logos/tenda-logo.png" },
  { name: "CURY", logo: "/logos/cury-logo.png" },
  { name: "EVEN", logo: "/logos/even-logo.svg" },
  { name: "TEGRA", logo: "/logos/tegra-logo.png" },
  { name: "PATRIMAR", logo: "/logos/patrimar-logo.svg" },
  { name: "KALLAS", logo: "/logos/kallas-logo.png" },
  { name: "GAFISA", logo: "/logos/gafisa-logo.svg" },
];

export const testimonialMeta = [
  { video: "https://www.youtube.com/watch?v=1AHWDr61QJ0", photo: "/testimonials/paula-dias.png" },
  { video: "https://www.youtube.com/watch?v=9PyJOeXnjRQ", photo: "/testimonials/thiago-sanches.webp" },
  { video: "https://www.youtube.com/watch?v=EOYG0ZY4G-Y", photo: "/testimonials/david-fratel.png" },
  { video: "https://www.youtube.com/watch?v=6HuId6FqcEc", photo: "/testimonials/francisco-wanderley.png", inMemoriam: true },
  { video: "https://www.youtube.com/watch?v=ZknPfqo5fhQ", photo: "/testimonials/alexandre-barbas.png" },
  { video: "https://www.youtube.com/watch?v=rzEXiyAAapk", photo: "/testimonials/marina-gabrieli.png" },
  { video: "https://www.youtube.com/watch?v=Vsbou6y7qYo", photo: "/testimonials/marcelo-moraes.png" },
  { photo: "/testimonials/ana-carolina.png" },
];
