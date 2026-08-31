import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <p className="serif">Jheferson Rosa<br />Designer multidisciplinar</p>
      <div className="footer-links"><Link className="text-link" href="/work">Selected Work</Link><Link className="text-link" href="/publications">Publicações</Link><Link className="text-link" href="/about">Sobre</Link><Link className="text-link" href="/contact">Contato</Link></div>
    </footer>
  );
}
