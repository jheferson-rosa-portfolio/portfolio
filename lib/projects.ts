export type ProjectVideo = { title: string; src: string };
export type CatalogItem = { number: string; title: string; image: string };

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  role: string;
  support: string;
  summary: string;
  image: string;
  heroImage: string;
  gallery: string[];
  wide?: boolean;
  video?: string;
  videoNote?: string;
  motionVideo?: string;
  catalog?: CatalogItem[];
  pageVideos?: ProjectVideo[];
};

const lolaTitles = [
  'Potencial para significativos desastres',
  'Era uma promessa',
  'Terceiro mistério',
  'Jamais falaríamos',
  'Meu corpo é um mapa de desobediência',
  'Sílaba emperrada',
  'Era uma promessa — 2ª edição',
  'Fofocas do inconsciente',
  'Chame por mim e responderei coisas ocultas',
  'Small English Horse',
  'Sulfite',
  'Essa vida inteira ou menos',
  'Poemas de casa',
  'A estos hombres tristes',
  'Uma vida simples',
  'O passado assedia',
  'Kuarup',
  'Revista Cauim nº 1',
];

const lolaCatalog: CatalogItem[] = lolaTitles.map((title, index) => ({
  number: String(index + 1).padStart(2, '0'),
  title,
  image: `/images/lola/catalog/${String(index + 1).padStart(2, '0')}.jpg`,
}));

export const projects: Project[] = [
  {
    slug: 'convencao-lg-2025',
    title: 'Convenção LG',
    year: '2025',
    category: 'Design, audiovisual & branding',
    role: 'Criação de marca, peças gráficas e direção de arte',
    support: 'Impressos, digital, motion e audiovisual',
    summary: 'Identidade visual completa para a convenção de fim de ano da LG lugar de gente — do sistema de marca e das apresentações aos materiais de palco e vídeos cinematográficos.',
    image: '/images/convention/hero.jpg',
    heroImage: '/images/convention/hero.jpg',
    gallery: ['/images/convention/mockup.jpg', '/images/convention/stage.jpg', '/images/convention/presentation.jpg', '/images/convention/application.jpg'],
    wide: true,
    video: 'https://www.youtube-nocookie.com/embed/QrJVfi0FfZQ',
  },
  {
    slug: 'lola-frita',
    title: 'Lola Frita',
    year: '2019—23',
    category: 'Direção editorial, design editorial & branding',
    role: 'Direção criativa e editorial, design e produção editorial',
    support: 'Impresso, digital e eventos',
    summary: 'Quatro anos de direção de um selo editorial independente: identidade, comunicação e o ciclo de criação e produção de mais de 20 livros, zines e plaquetes.',
    image: '/images/lola/hero.jpg',
    heroImage: '/images/lola/hero.jpg',
    gallery: ['/images/lola/fair.jpg', '/images/lola/fair-detail.jpg'],
    wide: true,
    catalog: lolaCatalog,
    pageVideos: [
      { title: 'Fofocas do inconsciente', src: '/videos/lola/fofocas-do-inconsciente.mp4' },
      { title: 'Chame por mim e responderei coisas ocultas', src: '/videos/lola/chame-por-mim.mp4' },
      { title: 'Poemas de casa', src: '/videos/lola/poemas-de-casa.mp4' },
      { title: 'A estos hombres tristes', src: '/videos/lola/a-estos-hombres-tristes.mp4' },
      { title: 'Uma vida simples', src: '/videos/lola/uma-vida-simples.mp4' },
      { title: 'O passado assedia', src: '/videos/lola/o-passado-assedia.mp4' },
    ],
  },
  {
    slug: 'lg-40-anos',
    title: '40 anos LG lugar de gente',
    year: '2025',
    category: 'Branding, audiovisual & comunicação interna',
    role: 'Direção criativa, identidade visual, edição e sonoplastia',
    support: 'Digital, audiovisual e identidade para evento',
    summary: 'Uma identidade comemorativa desdobrada em comunicação interna, série de entrevistas e um documentário sobre a história da companhia.',
    image: '/images/lg40/listing.jpg',
    heroImage: '/images/lg40/banner.jpg',
    gallery: ['/images/lg40/listing.jpg'],
    video: 'https://www.youtube-nocookie.com/embed/14jYNLDDKbE',
    videoNote: 'Versão alternativa do documentário. A produção integral tem 19 minutos e contém material confidencial.',
  },
  {
    slug: 'spi-2025',
    title: 'SPI 2025 — Continentes Seguros',
    year: '2025',
    category: 'Design instrucional, branding & audiovisual',
    role: 'Direção criativa, identidade, storytelling e e-learning',
    support: 'Digital, Articulate Storyline, audiovisual e artigos',
    summary: 'Programa de conscientização sobre segurança e privacidade estruturado como uma narrativa gamificada, com identidade própria, recompensas e avaliações dinâmicas no Articulate Storyline.',
    image: '/images/spi/2025/05.jpg',
    heroImage: '/images/spi/2025/05.jpg',
    gallery: Array.from({ length: 14 }, (_, index) => `/images/spi/2025/${String(index + 1).padStart(2, '0')}.jpg`),
  },
  {
    slug: 'spi-2026',
    title: 'SPI 2026',
    year: '2026',
    category: 'Design instrucional, branding & audiovisual',
    role: 'Direção criativa, identidade, storytelling e e-learning',
    support: 'Digital, e-learning, audiovisual e comunicação interna',
    summary: 'Segunda edição do programa de conscientização sobre segurança e privacidade, apresentada como um novo ciclo visual e narrativo da experiência.',
    image: '/images/spi/2026/07.jpg',
    heroImage: '/images/spi/2026/07.jpg',
    gallery: Array.from({ length: 7 }, (_, index) => `/images/spi/2026/${String(index + 1).padStart(2, '0')}.jpg`),
  },
  {
    slug: 'deck-de-cultura',
    title: 'Deck de Cultura',
    year: '2026',
    category: 'Branding, design gráfico & comunicação interna',
    role: 'Direção criativa, identidade visual e criação de ícones',
    support: 'Digital — PPTX e PDF',
    summary: 'Sistema visual para apresentar missão, linha do tempo e pilares da cultura organizacional, incluindo cinco marcas exclusivas para os valores corporativos.',
    image: '/images/culture/cover.jpg',
    heroImage: '/images/culture/cover.jpg',
    gallery: ['/images/culture/values.jpg', '/images/culture/value-1.jpg', '/images/culture/value-2.jpg', '/images/culture/timeline.jpg'],
  },
  {
    slug: 'bardo',
    title: 'Bardo — Full Narrative',
    year: '2025—26',
    category: 'Branding, design editorial & motion',
    role: 'Direção criativa, identidade visual e motion design',
    support: 'Digital, editorial e motion',
    summary: 'Identidade para uma frente de serviços editoriais, articulando sistema visual, comunicação e animação de marca a partir do conceito full narrative.',
    image: '/images/bardo/concept.jpg',
    heroImage: '/images/bardo/concept.jpg',
    gallery: ['/images/bardo/artboard-1.jpg', '/images/bardo/artboard-copy.jpg', '/images/bardo/artboard-3.jpg'],
    motionVideo: '/videos/bardo/logo-animation.mp4',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
