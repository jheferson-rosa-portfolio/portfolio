import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getProject, publishedProjects } from '@/lib/content';

export function generateStaticParams() {
  return publishedProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const socialImage = project.hero ?? project.cover;
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Jheferson Rosa`,
      description: project.summary,
      images: [{ url: socialImage.src, alt: socialImage.alt }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const currentIndex = publishedProjects.findIndex(({ slug }) => slug === project.slug);
  const next = publishedProjects[(currentIndex + 1) % publishedProjects.length];
  const hero = project.hero ?? project.cover;
  const featuredVideos = project.videos.filter((video) => video.layout === 'featured');
  const stageVideos = project.videos.filter((video) => video.layout === 'stage');
  const gridVideos = project.videos.filter((video) => video.layout === 'grid');

  return (
    <>
      <SiteHeader />
      <main>
        <header className="case-head page-shell">
          <div className="case-title"><span className="eyebrow">{project.category} · {project.year}</span><h1>{project.title}</h1></div>
          <div className="case-lead"><span className="eyebrow blue">Contexto</span><p>{project.summary}</p></div>
        </header>

        <Image className={`case-hero ${'fit' in hero && hero.fit === 'contain' ? 'portrait-hero' : ''}`} src={hero.src} alt={hero.alt} width={2200} height={1400} priority />

        <dl className="case-details page-shell">
          <div><dt>Atuação</dt><dd>{project.role}</dd></div>
          <div><dt>Suportes</dt><dd>{project.support}</dd></div>
          <div><dt>Ano</dt><dd>{project.year}</dd></div>
        </dl>

        {featuredVideos.map((video) => (
          <section className="case-section page-shell rule" key={video.src}>
            <div className="case-section-head"><span className="eyebrow blue">{video.label}</span><h2>{video.heading}</h2></div>
            <div className="video-frame">
              {video.kind === 'embed' ? <iframe src={video.src} title={video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <video src={video.src} controls playsInline preload="metadata" aria-label={video.title}><track kind="captions" src="/captions/visual-only.vtt" srcLang="pt-BR" label="Vídeo sem fala" /></video>}
            </div>
            {video.note && <p className="video-note">{video.note}</p>}
          </section>
        ))}

        {stageVideos.map((video) => (
          <section className="case-section page-shell rule" key={video.src}>
            <div className="case-section-head"><span className="eyebrow blue">{video.label}</span><h2>{video.heading}</h2></div>
            <div className="motion-stage"><video src={video.src} autoPlay muted loop playsInline controls aria-label={video.title}><track kind="captions" src="/captions/visual-only.vtt" srcLang="pt-BR" label="Vídeo sem fala" /></video></div>
          </section>
        ))}

        {project.collections.map((collection) => (
          <section className="case-section page-shell rule" key={`${collection.type}-${collection.label}`}>
            <div className="case-section-head"><span className="eyebrow blue">{collection.label}</span><h2>{collection.heading}</h2></div>
            <div className="catalog-grid">
              {collection.items.map((item) => (
                <article className="catalog-item" key={item.number}>
                  <figure><Image src={item.image.src} alt={item.image.alt} width={900} height={1200} /></figure>
                  <div><span>{item.number}</span><h3>{item.title}</h3></div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {gridVideos.length > 0 && (
          <section className="case-section page-shell rule">
            <div className="case-section-head"><span className="eyebrow blue">{gridVideos[0].label}</span><h2>{gridVideos[0].heading}</h2></div>
            <div className="folio-video-grid">
              {gridVideos.map((video) => (
                <article className="folio-video" key={video.src}>
                  <video src={video.src} controls muted playsInline preload="metadata" aria-label={video.title}><track kind="captions" src="/captions/visual-only.vtt" srcLang="pt-BR" label="Vídeo sem fala" /></video>
                  <h3>{video.title}</h3>
                </article>
              ))}
            </div>
          </section>
        )}

        {project.gallery.items.length > 0 && (
          <section className="case-section page-shell rule">
            <div className="case-section-head"><span className="eyebrow blue">{project.gallery.label}</span><h2>{project.gallery.heading}</h2></div>
            <div className="gallery">
              {project.gallery.items.map((item) => <figure key={item.src}><Image src={item.src} alt={item.alt} width={1600} height={1200} />{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}
            </div>
          </section>
        )}

        <Link className="next-project page-shell rule" href={`/work/${next.slug}`}><span className="eyebrow">Próximo projeto</span><strong>{next.title} →</strong></Link>
      </main>
      <SiteFooter />
    </>
  );
}
