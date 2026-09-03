import rawProjects from '@/content/projects.json';
import rawPublications from '@/content/publications.json';
import rawSite from '@/content/site.json';

export type MediaImage = { src: string; alt: string; caption?: string };
export type PublicationStatus = 'draft' | 'published' | 'archived';

export type ProjectVideo = {
  kind: 'embed' | 'file';
  layout: 'featured' | 'grid' | 'stage';
  title: string;
  src: string;
  label?: string;
  heading?: string;
  note?: string;
};

export type CatalogItem = { number: string; title: string; image: MediaImage };
export type ProjectCollection = {
  type: 'catalog';
  label: string;
  heading: string;
  items: CatalogItem[];
};

export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  role: string;
  support: string;
  summary: string;
  cover: MediaImage;
  hero?: MediaImage & { fit?: 'cover' | 'contain' };
  gallery: { label: string; heading: string; items: MediaImage[] };
  videos: ProjectVideo[];
  collections: ProjectCollection[];
  displayOrder: number;
  status: PublicationStatus;
  featuredOnHome: boolean;
  cardLayout: 'standard' | 'wide';
};

export type Publication = {
  title: string;
  meta: string;
  image: MediaImage;
  status: PublicationStatus;
  displayOrder: number;
};

const projectRecords = (rawProjects as unknown as Project[]).map((project) => ({
  ...project,
  videos: project.videos ?? [],
  collections: project.collections ?? [],
}));

function validateProjects(records: Project[]) {
  const slugs = new Set<string>();
  for (const project of records) {
    if (!project.title || !project.slug || !project.cover?.src) {
      throw new Error(`Projeto incompleto no conteúdo: ${project.slug || project.title || 'sem identificação'}`);
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
      throw new Error(`Slug inválido: ${project.slug}`);
    }
    if (slugs.has(project.slug)) {
      throw new Error(`Slug duplicado: ${project.slug}`);
    }
    slugs.add(project.slug);
  }
}

validateProjects(projectRecords);

export const siteContent = rawSite;
export const publicationsContent = {
  ...rawPublications,
  items: (rawPublications.items as unknown as Publication[])
    .filter((item) => item.status === 'published')
    .sort((a, b) => a.displayOrder - b.displayOrder),
};
export const publishedProjects = projectRecords
  .filter((project) => project.status === 'published')
  .sort((a, b) => a.displayOrder - b.displayOrder);
export const featuredProjects = publishedProjects.filter((project) => project.featuredOnHome);

export function getProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}
