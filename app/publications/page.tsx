import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { publicationsContent } from '@/lib/content';

export const metadata: Metadata = { title: publicationsContent.eyebrow };

export default function PublicationsPage() {
  return (
    <><SiteHeader /><main className="page-shell"><header className="page-intro"><span className="eyebrow">{publicationsContent.eyebrow}</span><h1>{publicationsContent.heading}</h1><p>{publicationsContent.intro}</p></header><section className="publication-grid">{publicationsContent.items.map((item) => <article className="publication-item" key={item.title}><figure><Image src={item.image.src} alt={item.image.alt} width={900} height={1305} /></figure><h2>{item.title}</h2><p>{item.meta}</p></article>)}</section></main><SiteFooter /></>
  );
}
