import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getProject, projects } from '@/lib/projects';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex(({ slug }) => slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const isLola = project.slug === 'lola-frita';
  return <><SiteHeader /><main><header className="case-head page-shell"><div className="case-title"><span className="eyebrow">{project.category} · {project.year}</span><h1>{project.title}</h1></div><div className="case-lead"><span className="eyebrow blue">Contexto</span><p>{project.summary}</p></div></header><Image className="case-hero" src={project.heroImage} alt={`Imagem de abertura do projeto ${project.title}`} width={2200} height={1400} priority /><dl className="case-details page-shell"><div><dt>Atuação</dt><dd>{project.role}</dd></div><div><dt>Suportes</dt><dd>{project.support}</dd></div><div><dt>Ano</dt><dd>{project.year}</dd></div></dl>{project.video && <section className="case-section page-shell rule"><div className="case-section-head"><span className="eyebrow blue">Audiovisual</span><h2>{project.slug === 'lg-40-anos' ? 'Uma história contada em filme.' : 'O evento começa antes do palco.'}</h2></div><div className="video-frame"><iframe src={project.video} title={`Vídeo do projeto ${project.title}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>{project.videoNote && <p className="video-note">{project.videoNote}</p>}</section>}<section className="case-section page-shell rule"><div className="case-section-head"><span className="eyebrow blue">Sistema visual</span><h2>{isLola ? 'Um catálogo é também uma forma de mundo.' : 'Da ideia central aos seus desdobramentos.'}</h2></div><div className={`gallery ${isLola ? 'lola' : ''}`}>{project.gallery.map((src, index) => <figure key={src}><Image src={src} alt={`${project.title}, aplicação ${index + 1}`} width={1600} height={1200} /></figure>)}</div></section><Link className="next-project page-shell rule" href={`/work/${next.slug}`}><span className="eyebrow">Próximo projeto</span><strong>{next.title} →</strong></Link></main><SiteFooter /></>;
}
