import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card ${project.wide ? 'wide' : ''}`}><Link href={`/work/${project.slug}`} aria-label={`Ver projeto ${project.title}`}><div className="project-media"><Image src={project.image} alt="" width={1800} height={1200} priority={index === 0} /></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.category} · {project.year}</p></div><span className="project-index">0{index + 1}</span></div></Link></article>;
}
