import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteContent } from '@/lib/content';

export const metadata: Metadata = { title: siteContent.contact.title };

export default function ContactPage() {
  const { contact } = siteContent;
  return <><SiteHeader /><main className="contact-panel page-shell"><h1>{contact.heading}</h1><div className="contact-bottom rule" style={{ paddingTop: 24 }}><p>{contact.intro}</p><p className="contact-status">{contact.status}</p></div></main><SiteFooter /></>;
}
