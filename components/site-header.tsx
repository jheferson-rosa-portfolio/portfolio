import Link from 'next/link';
import { siteContent } from '@/lib/content';

export function SiteHeader() {
  const { brand, navigation } = siteContent;
  return (
    <header className="site-header page-shell">
      <Link className="brand" href="/" aria-label={`${brand.name} — início`}>{brand.name}</Link>
      <span className="axis-mini">{brand.axis.join(' → ').toLowerCase()}</span>
      <nav className="nav" aria-label="Navegação principal">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>
    </header>
  );
}
