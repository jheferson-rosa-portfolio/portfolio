import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = { title: 'Sobre' };

export default function AboutPage() {
  return <><SiteHeader /><main><header className="page-intro page-shell"><span className="eyebrow">Sobre</span><h1>Palavra, imagem e direção.</h1></header><section className="about-hero page-shell"><Image src="/images/about/portrait.jpeg" alt="Jheferson Rosa em leitura pública" width={1400} height={1800} priority /><div className="about-copy"><p>Sou designer multidisciplinar com mais de seis anos de experiência e uma trajetória que começa em Letras e na docência.</p><p>Minha prática atravessa design gráfico e editorial, branding, audiovisual, motion, design instrucional, storytelling, produção editorial e direção criativa.</p><p>Hoje atuo no ambiente corporativo na LG lugar de gente e no editorial por meio da Bardo. Também dirigi o selo independente Lola Frita por mais de quatro anos.</p><p>Sou autor de quatro livros e professor de escrita criativa.</p></div></section><section className="about-list page-shell rule"><span className="eyebrow blue">Campos de atuação</span><ul><li>Direção criativa</li><li>Branding</li><li>Design editorial</li><li>Audiovisual</li><li>Motion</li><li>Storytelling</li><li>Design instrucional</li><li>Produção editorial</li></ul></section></main><SiteFooter /></>;
}
