import Link from 'next/link';
import { asset } from '@/lib/site';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`} style={{ '--project-accent': project.accent }}>
      <Link className="project-card__link" href={`/projects/${project.slug}/`} aria-label={`Xem ${project.title}`}>
        <div className="project-card__media">
          <img src={asset(project.cover)} alt={project.coverAlt} loading="lazy" />
          <span className="project-card__number">{project.number}</span>
          <span className="project-card__korean" lang="ko">{project.korean}</span>
        </div>
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>Bài tập {project.number}</span>
            <span>{project.tags[0]}</span>
          </div>
          <h3>{project.shortTitle}</h3>
          <p>{project.summary}</p>
          <span className="project-card__cta">Xem bài chi tiết <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  );
}
