import type { Metadata } from 'next';
import { siteContent } from '@/lib/content';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteContent.metadata.title,
    template: siteContent.metadata.titleTemplate,
  },
  description: siteContent.metadata.description,
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.socialDescription,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: siteContent.metadata.socialImage, width: 1200, height: 630, alt: siteContent.metadata.socialImageAlt }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
