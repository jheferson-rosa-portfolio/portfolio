import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const projects = JSON.parse(readFileSync(resolve(root, 'content/projects.json'), 'utf8'));
const publications = JSON.parse(readFileSync(resolve(root, 'content/publications.json'), 'utf8'));
const errors = [];
const slugs = new Set();
const orders = new Set();
const requiredFields = ['title', 'slug', 'year', 'category', 'role', 'summary', 'cover', 'gallery', 'videos', 'displayOrder', 'status', 'featuredOnHome'];

function checkLocalAsset(src, context) {
  if (!src || /^https?:\/\//.test(src)) return;
  const assetPath = resolve(root, 'public', src.replace(/^\//, ''));
  if (!existsSync(assetPath)) errors.push(`${context}: asset não encontrado (${src})`);
}

for (const project of projects) {
  const context = project.slug || project.title || 'projeto sem identificação';
  for (const field of requiredFields) {
    if (project[field] === undefined || project[field] === null || project[field] === '') errors.push(`${context}: campo obrigatório ausente (${field})`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug || '')) errors.push(`${context}: slug inválido`);
  if (slugs.has(project.slug)) errors.push(`${context}: slug duplicado`);
  if (orders.has(project.displayOrder)) errors.push(`${context}: ordem de exibição duplicada (${project.displayOrder})`);
  if (!['draft', 'published', 'archived'].includes(project.status)) errors.push(`${context}: status inválido (${project.status})`);
  slugs.add(project.slug);
  orders.add(project.displayOrder);
  checkLocalAsset(project.cover?.src, `${context}.cover`);
  checkLocalAsset(project.hero?.src, `${context}.hero`);
  for (const item of project.gallery?.items || []) checkLocalAsset(item.src, `${context}.gallery`);
  for (const video of project.videos || []) checkLocalAsset(video.src, `${context}.videos`);
  for (const collection of project.collections || []) {
    for (const item of collection.items || []) checkLocalAsset(item.image?.src, `${context}.collections`);
  }
}

for (const item of publications.items || []) checkLocalAsset(item.image?.src, `publicação ${item.title}`);

if (errors.length) {
  console.error(`Conteúdo inválido:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`${projects.length} projetos e ${publications.items.length} publicações validados.`);
