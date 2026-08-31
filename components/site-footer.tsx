import Link from 'next/link';
import { siteContent } from '@/lib/content';

export function SiteFooter() {
  const { brand, footer } = siteContent;
  return (
    <footer className="site-footer page-shell">
      <p className="serif">{brand.name}<br />{brand.descriptor}</p>
      <div className="footer-links">
        {footer.links.map((item) => <Link className="text-link" href={item.href} key={item.href}>{item.label}</Link>)}
      </div>
    </footer>
  );
}
