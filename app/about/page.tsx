import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteContent } from '@/lib/content';

export const metadata: Metadata = { title: siteContent.about.eyebrow };

export default function AboutPage() {
  const { about } = siteContent;
  return (
    <><SiteHeader /><main><header className="page-intro page-shell"><span className="eyebrow">{about.eyebrow}</span><h1>{about.heading}</h1></header><section className="about-hero page-shell"><Image src={about.portrait.src} alt={about.portrait.alt} width={1400} height={1800} priority /><div className="about-copy">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section><section className="about-list page-shell rule"><span className="eyebrow blue">{about.fieldsLabel}</span><ul>{about.fields.map((field) => <li key={field}>{field}</li>)}</ul></section></main><SiteFooter /></>
  );
}
