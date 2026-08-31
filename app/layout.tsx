import type { Metadata } from 'next';
import { siteContent } from '@/lib/content';
import './globals.css';

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(productionHost ? `https://${productionHost}` : 'http://localhost:3000'),
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
