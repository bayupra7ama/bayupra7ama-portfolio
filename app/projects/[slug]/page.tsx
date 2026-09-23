import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-main">
      <section className="case-hero">
        <div className="container">
          <Link className="back-link" href="/#work">← Selected work</Link>
          <div className="case-heading">
            <div><span className="eyebrow-text">CASE STUDY · {project.index}</span><h1>{project.title}</h1></div>
            <p>{project.summary}</p>
          </div>
          <ProjectVisual title={project.title} index={project.index} accent={project.accent} />
          <div className="case-meta">
            <div><span>ROLE</span><strong>{project.role}</strong></div>
            <div><span>YEAR</span><strong>{project.year}</strong></div>
            <div><span>STACK</span><strong>{project.stack.slice(0, 3).join(" · ")}</strong></div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container case-two-col">
          <div><span className="case-label">THE PROBLEM</span><h2>Start with the workflow, not the technology.</h2></div>
          <p className="case-large-copy">{project.problem}</p>
        </div>
      </section>

      <section className="case-section case-surface">
        <div className="container case-two-col">
          <div><span className="case-label">THE SOLUTION</span><h2>Turn complexity into a usable system.</h2></div>
          <div>
            <p className="case-large-copy">{project.solution}</p>
            <div className="case-links">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer">View repository ↗</a>}
              {project.secondaryGithub && <a href={project.secondaryGithub} target="_blank" rel="noreferrer">Backend repository ↗</a>}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <span className="case-label">ENGINEERING HIGHLIGHTS</span>
          <div className="highlight-grid">
            {project.highlights.map((item, idx) => <div key={item}><span>0{idx + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="case-section architecture-section">
        <div className="container">
          <span className="case-label">SYSTEM VIEW</span>
          <h2 className="architecture-title">A simple view of the product flow.</h2>
          <div className="architecture-flow">
            {project.architecture.map((item, idx) => (
              <div key={item}>
                <span>{String(idx + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                {idx < project.architecture.length - 1 && <i>→</i>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="next-project">
        <div className="container">
          <span className="case-label">NEXT CASE STUDY</span>
          <Link href={`/projects/${nextProject.slug}`}><span>{nextProject.index}</span>{nextProject.title}<b>↗</b></Link>
        </div>
      </section>
    </main>
  );
}
