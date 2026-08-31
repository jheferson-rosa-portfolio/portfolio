import Link from 'next/link';
import { Fragment } from 'react';
import { ProjectCard } from '@/components/project-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { featuredProjects, siteContent } from '@/lib/content';

export default function Home() {
  const { home, brand } = siteContent;
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero page-shell">
          <div className="hero-top"><h1>{home.headline}</h1><p className="hero-intro">{home.intro}</p></div>
          <div className="axis" aria-label={brand.axis.join(' leva à ')}>
            {brand.axis.map((term, index) => <Fragment key={term}><span>{term}</span>{index < brand.axis.length - 1 && <i>→</i>}</Fragment>)}
          </div>
        </section>

        <section className="page-shell rule" id="selected-work">
          <div className="section-head">
            <span className="eyebrow">{home.selectedWorkLabel} · 01—{String(featuredProjects.length).padStart(2, '0')}</span>
            <h2>{home.selectedWorkHeading}</h2>
          </div>
          <div className="work-grid">
            {featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
          <p style={{ marginTop: 42, textAlign: 'right' }}><Link className="text-link" href="/work">{home.selectedWorkLink}</Link></p>
        </section>

        <section className="statement page-shell rule"><span className="eyebrow blue">{home.practiceLabel}</span><p>{home.practiceText}</p></section>
      </main>
      <SiteFooter />
    </>
  );
}
