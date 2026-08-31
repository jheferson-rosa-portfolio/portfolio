import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';

export default function Home() {
  return <><SiteHeader /><main><section className="hero page-shell"><div className="hero-top"><h1>Design para transformar linguagem em experiência.</h1><p className="hero-intro">Jheferson Rosa é designer multidisciplinar. Articula repertório editorial, direção criativa e pensamento narrativo em diferentes suportes.</p></div><div className="axis" aria-label="Linguagem leva à narrativa, que leva à forma"><span>Linguagem</span><i>→</i><span>Narrativa</span><i>→</i><span>Forma</span></div></section><section className="page-shell rule" id="selected-work"><div className="section-head"><span className="eyebrow">Selected Work · 01—05</span><h2>Projetos que atravessam identidade, edição, audiovisual e experiência.</h2></div><div className="work-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div><p style={{ marginTop: 42, textAlign: 'right' }}><Link className="text-link" href="/work">Ver índice completo →</Link></p></section><section className="statement page-shell rule"><span className="eyebrow blue">Prática</span><p>Entre a palavra e a imagem, cada projeto encontra a forma que sua história pede.</p></section></main><SiteFooter /></>;
}
