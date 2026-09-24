import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/lib/projects";
import {
  FiAward, FiBarChart2, FiBell, FiBookOpen, FiBriefcase, FiCamera,
  FiCheckSquare, FiClipboard, FiCpu, FiDatabase, FiDownload, FiFileText,
  FiGitMerge, FiGlobe, FiLayers, FiLock, FiMapPin, FiMessageCircle,
  FiMessageSquare, FiShield, FiSmartphone, FiStar, FiTool, FiTruck,
  FiUsers, FiWifi, FiCloud, FiKey, FiLayout, FiSend, FiServer, FiCreditCard,
} from "react-icons/fi";


const highlightIcons = {
  "ponsel-yen": [FiTool, FiLayers, FiUsers, FiBarChart2, FiFileText],
  "desa-cantik": [FiBarChart2, FiFileText, FiLayout, FiUsers, FiLock],
  ukt: [FiClipboard, FiUsers, FiCpu, FiBarChart2, FiGitMerge],
  jastip: [FiLayers, FiClipboard, FiLock, FiCreditCard, FiLayout],
  "mudah-catat": [FiDatabase, FiUsers, FiFileText, FiLock, FiSmartphone],
  spotgacor: [FiMapPin, FiLayers, FiShield, FiStar, FiMessageCircle],
  "monitoring-ta": [FiCheckSquare, FiClipboard, FiBell, FiBarChart2, FiFileText],
  resikapp: [FiTruck, FiCamera, FiCpu, FiGitMerge, FiAward],
  "lapor-infra": [FiBriefcase, FiWifi, FiMessageSquare, FiGlobe, FiTool],
  "7kaih": [FiUsers, FiShield, FiBookOpen, FiMessageCircle, FiDownload],
} as const;

const architectureIcons = {
  "ponsel-yen": [FiLayout, FiServer, FiLayers, FiDatabase, FiFileText],
  "desa-cantik": [FiGlobe, FiBarChart2, FiSend, FiLayout, FiDatabase],
  ukt: [FiLayout, FiDatabase, FiSend, FiCpu, FiCheckSquare],
  jastip: [FiLayout, FiServer, FiKey, FiCreditCard, FiDatabase],
  "mudah-catat": [FiSmartphone, FiLayers, FiShield, FiDatabase, FiKey],
  spotgacor: [FiSmartphone, FiSend, FiServer, FiDatabase, FiMapPin],
  "monitoring-ta": [FiLayout, FiSend, FiServer, FiShield, FiTool],
  resikapp: [FiSmartphone, FiCamera, FiCpu, FiCloud, FiGitMerge],
  "lapor-infra": [FiLayout, FiClipboard, FiMessageSquare, FiDatabase, FiGlobe],
  "7kaih": [FiLayout, FiServer, FiShield, FiMessageCircle, FiDownload],
} as const;

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
          <ProjectVisual project={project} />
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
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Open live app ↗</a>}
              {project.github && <a href={project.github} target="_blank" rel="noreferrer">View repository ↗</a>}
              {project.secondaryGithub && <a href={project.secondaryGithub} target="_blank" rel="noreferrer">Supporting repository ↗</a>}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <span className="case-label">ENGINEERING HIGHLIGHTS</span>
          <div className={`highlight-grid accent-${project.accent}`}>
            {project.highlights.map((item, idx) => {
              const Icon = highlightIcons[project.slug as keyof typeof highlightIcons]?.[idx] ?? FiCheckSquare;
              return (
                <div className="highlight-card" key={item}>
                  <div className="highlight-card-top">
                    <span className="highlight-number">0{idx + 1}</span>
                    <span className="highlight-icon"><Icon aria-hidden="true" /></span>
                  </div>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="case-section architecture-section">
        <div className="container">
          <span className="case-label">SYSTEM VIEW</span>
          <h2 className="architecture-title">A simple view of the product flow.</h2>
          <div className={`architecture-flow accent-${project.accent}`}>
            {project.architecture.map((item, idx) => {
              const Icon = architectureIcons[project.slug as keyof typeof architectureIcons]?.[idx] ?? FiLayers;
              return (
                <div className="architecture-node" key={item}>
                  <span className="architecture-icon"><Icon aria-hidden="true" /></span>
                  <div className="architecture-copy">
                    <span className="architecture-step">{String(idx + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                  {idx < project.architecture.length - 1 && <i aria-hidden="true">→</i>}
                </div>
              );
            })}
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
