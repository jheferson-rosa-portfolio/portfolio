import type { Metadata } from 'next';
import { ProjectCard } from '@/components/project-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';

export const metadata: Metadata = { title: 'Selected Work' };

export default function WorkPage() {
  return <><SiteHeader /><main className="page-shell"><header className="page-intro"><span className="eyebrow">Selected Work · 2025—26</span><h1>Identidades que organizam histórias.</h1><p>Uma seleção de projetos em que direção criativa, repertório editorial e produção audiovisual trabalham como partes de uma mesma linguagem.</p></header><section className="work-grid work-index">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</section></main><SiteFooter /></>;
}
