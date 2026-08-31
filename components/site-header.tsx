import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header page-shell">
      <Link className="brand" href="/" aria-label="Jheferson Rosa — início">Jheferson Rosa</Link>
      <span className="axis-mini">linguagem → narrativa → forma</span>
      <nav className="nav" aria-label="Navegação principal">
        <Link href="/work">Work</Link><Link href="/publications">Publicações</Link><Link href="/about">Sobre</Link><Link href="/contact">Contato</Link>
      </nav>
    </header>
  );
}
