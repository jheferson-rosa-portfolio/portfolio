import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = { title: 'Contato' };

export default function ContactPage() {
  return <><SiteHeader /><main className="contact-panel page-shell"><h1>Vamos dar forma à próxima história?</h1><div className="contact-bottom rule" style={{ paddingTop: 24 }}><p>Disponível para projetos de direção criativa, branding, design editorial, audiovisual e experiências de aprendizagem.</p><p className="contact-status">E-mail e links profissionais serão adicionados antes do lançamento.</p></div></main><SiteFooter /></>;
}
