import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = { title: 'Publicações' };
const items = [
  { title: 'Trote', meta: 'Livro autoral · poesia', image: '/images/publications/trote.jpg' },
  { title: 'Dança comigo enquanto eles dormem', meta: 'Livro autoral · poesia', image: '/images/publications/danca.jpg' },
  { title: 'Revista Cauim nº 1', meta: 'Editoração e design de capa', image: '/images/publications/cauim.jpg' },
  { title: 'Fofocas do inconsciente', meta: 'Lola Frita · publicação independente', image: '/images/lola/fofocas.jpeg' },
  { title: 'Potencial para significativos desastres', meta: 'Lola Frita · publicação independente', image: '/images/lola/potencial.jpeg' },
  { title: 'Meu corpo é um mapa de desobediência', meta: 'Lola Frita · publicação independente', image: '/images/lola/mapa.jpeg' },
  { title: 'Chame por mim e responderei coisas ocultas', meta: 'Lola Frita · publicação independente', image: '/images/lola/chame.jpeg' },
  { title: 'Small English Horse', meta: 'Lola Frita · publicação independente', image: '/images/lola/horse.jpeg' },
];

export default function PublicationsPage() {
  return <><SiteHeader /><main className="page-shell"><header className="page-intro"><span className="eyebrow">Publicações</span><h1>Livros como objetos de linguagem.</h1><p>Um arquivo visual de projetos autorais e editoriais. Aqui, escrita, edição e forma gráfica ocupam o mesmo campo de trabalho.</p></header><section className="publication-grid">{items.map((item) => <article className="publication-item" key={item.title}><figure><Image src={item.image} alt={`Capa de ${item.title}`} width={900} height={1305} /></figure><h2>{item.title}</h2><p>{item.meta}</p></article>)}</section></main><SiteFooter /></>;
}
