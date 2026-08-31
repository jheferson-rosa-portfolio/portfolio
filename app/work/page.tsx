import type { Metadata } from 'next';
import { ProjectCard } from '@/components/project-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { publishedProjects, siteContent } from '@/lib/content';

export const metadata: Metadata = { title: siteContent.work.eyebrow.split(' · ')[0] };

export default function WorkPage() {
  const { work } = siteContent;
  return (
    <><SiteHeader /><main className="page-shell"><header className="page-intro"><span className="eyebrow">{work.eyebrow}</span><h1>{work.heading}</h1><p>{work.intro}</p></header><section className="work-grid work-index">{publishedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</section></main><SiteFooter /></>
  );
}
