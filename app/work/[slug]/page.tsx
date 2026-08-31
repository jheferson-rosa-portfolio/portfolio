import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getProject, projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project
    ? {
        title: project.title,
        description: project.summary,
        openGraph: {
          title: `${project.title} — Jheferson Rosa`,
          description: project.summary,
          images: [{ url: project.heroImage, alt: project.title }],
        },
      }
    : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex(({ slug }) => slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const isLola = project.slug === 'lola-frita';

  return (
    <>
      <SiteHeader />
      <main>
        <header className="case-head page-shell">
          <div className="case-title">
            <span className="eyebrow">{project.category} · {project.year}</span>
            <h1>{project.title}</h1>
          </div>
          <div className="case-lead">
            <span className="eyebrow blue">Contexto</span>
            <p>{project.summary}</p>
          </div>
        </header>

        <Image className={`case-hero ${isLola ? 'portrait-hero' : ''}`} src={project.heroImage} alt={`Imagem de abertura do projeto ${project.title}`} width={2200} height={1400} priority />

        <dl className="case-details page-shell">
          <div><dt>Atuação</dt><dd>{project.role}</dd></div>
          <div><dt>Suportes</dt><dd>{project.support}</dd></div>
          <div><dt>Ano</dt><dd>{project.year}</dd></div>
        </dl>

        {project.video && (
          <section className="case-section page-shell rule">
            <div className="case-section-head">
              <span className="eyebrow blue">Audiovisual</span>
              <h2>{project.slug === 'lg-40-anos' ? 'Uma história contada em filme.' : 'O evento começa antes do palco.'}</h2>
            </div>
            <div className="video-frame">
              <iframe src={project.video} title={`Vídeo do projeto ${project.title}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            {project.videoNote && <p className="video-note">{project.videoNote}</p>}
          </section>
        )}

        {project.motionVideo && (
          <section className="case-section page-shell rule">
            <div className="case-section-head">
              <span className="eyebrow blue">Motion</span>
              <h2>A marca também existe em movimento.</h2>
            </div>
            <div className="motion-stage">
              <video src={project.motionVideo} autoPlay muted loop playsInline controls aria-label={`Animação de marca do projeto ${project.title}`} />
            </div>
          </section>
        )}

        {project.catalog && (
          <section className="case-section page-shell rule">
            <div className="case-section-head">
              <span className="eyebrow blue">Catálogo · {project.catalog.length} títulos</span>
              <h2>Uma coleção é também uma forma de mundo.</h2>
            </div>
            <div className="catalog-grid">
              {project.catalog.map((item) => (
                <article className="catalog-item" key={item.number}>
                  <figure><Image src={item.image} alt={item.title} width={900} height={1200} /></figure>
                  <div><span>{item.number}</span><h3>{item.title}</h3></div>
                </article>
              ))}
            </div>
          </section>
        )}

        {project.pageVideos && (
          <section className="case-section page-shell rule">
            <div className="case-section-head">
              <span className="eyebrow blue">Livros em movimento</span>
              <h2>Ritmo, matéria e sequência.</h2>
            </div>
            <div className="folio-video-grid">
              {project.pageVideos.map((video) => (
                <article className="folio-video" key={video.src}>
                  <video src={video.src} controls muted playsInline preload="metadata" aria-label={`Folheio de ${video.title}`} />
                  <h3>{video.title}</h3>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="case-section page-shell rule">
          <div className="case-section-head">
            <span className="eyebrow blue">{isLola ? 'Circulação' : 'Sistema visual'}</span>
            <h2>{isLola ? 'Publicar também é criar encontros.' : 'Da ideia central aos seus desdobramentos.'}</h2>
          </div>
          <div className="gallery">
            {project.gallery.map((src, index) => (
              <figure key={src}><Image src={src} alt={`${project.title}, aplicação ${index + 1}`} width={1600} height={1200} /></figure>
            ))}
          </div>
        </section>

        <Link className="next-project page-shell rule" href={`/work/${next.slug}`}>
          <span className="eyebrow">Próximo projeto</span><strong>{next.title} →</strong>
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
