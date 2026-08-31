import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Jheferson Rosa — Linguagem, narrativa e forma',
    template: '%s — Jheferson Rosa',
  },
  description:
    'Portfólio de Jheferson Rosa, designer multidisciplinar que articula linguagem, narrativa e forma em projetos de branding, editorial, audiovisual e experiências digitais.',
  openGraph: {
    title: 'Jheferson Rosa — Linguagem, narrativa e forma',
    description: 'Design multidisciplinar entre identidade, edição, audiovisual e experiência.',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Linguagem, narrativa e forma — Jheferson Rosa' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
