import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ProjectContent from '@/components/ProjectContent';
import ScrollProgress from '@/components/ScrollProgress';
import { projects, getProject } from '@/lib/projects';
import { asset } from '@/lib/site';
import ProjectCover from '@/components/ProjectCover';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.shortTitle,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <ScrollProgress />
      <main id="top" className="detail-page" style={{ '--project-accent': project.accent }}>
        <div className="detail-hero">
          <SiteHeader detail />
          <div className="detail-hero__inner shell">
            <div className="detail-hero__copy">
              <Link className="back-link" href="/#projects">← Quay lại danh sách</Link>
              <div className="detail-hero__meta">
                <span>Bài tập {project.number}</span>
                <span>{project.tags[0]}</span>
              </div>
              <h1>{project.title}</h1>
              <p>{project.intro}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="button button--dark" href={asset(project.document)} target="_blank" rel="noreferrer">Mở file gốc PDF ↗</a>
            </div>
            <figure className="detail-hero__media">
              <ProjectCover project={project} variant="detail" />
            </figure>
          </div>
        </div>

        <div className="detail-layout shell">
          <aside className="detail-index">
            <span>Nội dung</span>
            <ol>
              {project.sections.map((section, sectionIndex) => (
                <li key={section.title}><a href={`#section-${sectionIndex + 1}`}>{String(sectionIndex + 1).padStart(2, '0')} · {section.title}</a></li>
              ))}
            </ol>
          </aside>
          <article className="detail-content">
            <ProjectContent sections={project.sections.map((section, sectionIndex) => ({ ...section, anchor: `section-${sectionIndex + 1}` }))} />
          </article>
        </div>

        <nav className="project-pagination shell" aria-label="Điều hướng bài tập">
          <Link href={`/projects/${previous.slug}/`}>
            <span>← Bài trước</span>
            <strong>{previous.shortTitle}</strong>
          </Link>
          <Link href={`/projects/${next.slug}/`}>
            <span>Bài tiếp →</span>
            <strong>{next.shortTitle}</strong>
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
