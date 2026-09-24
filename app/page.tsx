import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { extraProjects, projects } from "@/lib/projects";
import {
  SiAndroid,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGooglemaps,
  SiKotlin,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPython,
  SiTensorflow,
  SiWhatsapp,
} from "react-icons/si";
import { MdCode, MdDescription, MdOutlineEmail, MdPayments, MdSecurity, MdStorage } from "react-icons/md";

const experience = [
  {
    period: "FEB — JUN 2025",
    org: "Diskominfo Pekanbaru",
    role: "Infrastructure Service Intern · SPBE",
    text: "Built Lapor Infra for OPD network-infrastructure incident reporting and contributed to monitoring, evaluation, and documentation of public digital infrastructure.",
  },
  {
    period: "SEP — DEC 2024",
    org: "Bangkit Academy · MSIB Batch 7",
    role: "Machine Learning Cohort",
    text: "Studied supervised and unsupervised learning, CNN, and NLP while contributing to a multidisciplinary end-to-end capstone project.",
  },
  {
    period: "FEB — JUN 2024",
    org: "Bangkit Academy · MSIB Batch 6",
    role: "Android Developer Cohort",
    text: "Deepened native Android development with Kotlin, Jetpack, MVVM, Retrofit, and Firebase through structured coursework and capstone collaboration.",
  },
  {
    period: "2021 — 2025",
    org: "Politeknik Negeri Bengkalis",
    role: "Bachelor of Applied Science · Software Engineering",
    text: "Graduated with a 3.72 / 4.00 GPA and Cumlaude honors from the Software Engineering program.",
  },
];

const skills = [
  {
    label: "Backend Engineering",
    tools: ["Laravel", "PHP", "REST API", "MySQL", "Authentication", "Admin workflows"],
    proof: "Monitoring TA · Jastip · 7KAIH · Lapor Infra",
  },
  {
    label: "Mobile Engineering",
    tools: ["Kotlin", "Android", "Jetpack Compose", "Flutter", "Retrofit", "Firebase"],
    proof: "SpotGacor · Monitoring TA · MUDAH CATAT · ResikApp",
  },
  {
    label: "Applied AI & Integrations",
    tools: ["Python", "TensorFlow", "Scikit-learn", "Maps", "Midtrans", "WhatsApp OTP"],
    proof: "ResikApp · UKT Classification · Location & payment flows",
  },
];

const techIcons = {
  Laravel: <SiLaravel />,
  "Laravel 12": <SiLaravel />,
  "Laravel API": <SiLaravel />,
  PHP: <SiPhp />,
  MySQL: <SiMysql />,
  Kotlin: <SiKotlin />,
  Android: <SiAndroid />,
  "Jetpack Compose": <SiAndroid />,
  Flutter: <SiFlutter />,
  Firebase: <SiFirebase />,
  Firestore: <SiFirebase />,
  Python: <SiPython />,
  TensorFlow: <SiTensorflow />,
  Maps: <SiGooglemaps />,
  "Google Maps": <SiGooglemaps />,
  "WhatsApp OTP": <SiWhatsapp />,
  "REST API": <MdCode />,
  Retrofit: <MdCode />,
  "Scikit-learn": <MdCode />,
  Authentication: <MdSecurity />,
  "Role Access": <MdSecurity />,
  "Admin workflows": <MdStorage />,
  Midtrans: <MdPayments />,
} as const;

const techColors: Record<string, string> = {
  Laravel: "#ff2d20",
  "Laravel 12": "#ff2d20",
  "Laravel API": "#ff2d20",
  PHP: "#777bb4",
  MySQL: "#4479a1",
  Kotlin: "#a97bff",
  Android: "#3ddc84",
  "Jetpack Compose": "#3ddc84",
  Flutter: "#54c5f8",
  Firebase: "#ffca28",
  Firestore: "#ffca28",
  Python: "#4b8bbe",
  TensorFlow: "#ff8a00",
  Maps: "#4285f4",
  "Google Maps": "#4285f4",
  "WhatsApp OTP": "#25d366",
  "REST API": "#5aa7ff",
  Retrofit: "#48b983",
  "Scikit-learn": "#f7931e",
  Authentication: "#a78bfa",
  "Role Access": "#a78bfa",
  "Admin workflows": "#94a3b8",
  Midtrans: "#24b8eb",
};

const heroTech = ["Laravel", "Kotlin", "Flutter", "Firebase", "Python"];

function TechBadge({ name, compact = false }: { name: string; compact?: boolean }) {
  const icon = techIcons[name as keyof typeof techIcons] ?? <MdCode />;
  const iconColor = techColors[name] ?? "#d8bc7a";

  return (
    <span className={`tech-badge${compact ? " tech-badge-compact" : ""}`}>
      <span className="tech-badge-icon" style={{ color: iconColor }} aria-hidden="true">{icon}</span>
      <span className="tech-badge-label">{name}</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy reveal">
            <div className="availability hero-availability"><span /> OPEN TO BUILD</div>
            <div className="eyebrow">SOFTWARE ENGINEER · INDONESIA</div>
            <h1>I build software that turns <em>real-world workflows</em> into useful digital products.</h1>
            <p className="hero-lead">
              Mobile · Backend · Web · Applied AI — built with practical engineering, clear workflows, and product thinking.
            </p>
            <div className="hero-tech" aria-label="Primary technology stack">
              {heroTech.map((tech) => <TechBadge name={tech} key={tech} />)}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
              <a className="button button-ghost" href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer"><SiGithub aria-hidden="true" /> View GitHub ↗</a>
              <a className="button button-ghost" href="/resume" target="_blank" rel="noreferrer"><MdDescription aria-hidden="true" /> View CV ↗</a>
            </div>
          </div>

          <div className="hero-side reveal delay-1">
            <div className="portrait-shell">
              <div className="portrait-halo" />
              <div className="portrait-frame">
                <img src="data:image/webp;base64,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" alt="Bayu Pratama Agus Kurniawan" />
                <div className="portrait-overlay" />
              </div>
              <div className="portrait-signature">Bayu Pratama<span>SOFTWARE ENGINEER</span></div>
            </div>
          </div>
        </div>

        <div className="container proof-strip reveal delay-2">
          <div><strong>B.Sc. Applied Software Engineering</strong><span>Politeknik Negeri Bengkalis · GPA 3.72 · Cumlaude</span></div>
          <div><strong>Bangkit Academy ×2</strong><span>Android Development · Machine Learning</span></div>
          <div><strong>Former Intern</strong><span>Diskominfo Pekanbaru · Infrastructure Service · SPBE</span></div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-heading">
            <div><span className="section-number">01</span><span className="eyebrow-text">SELECTED WORK</span></div>
            <p>Six projects chosen for the engineering story they tell — from mobile finance and location platforms to public-service workflows and applied AI.</p>
          </div>

          <div className="projects-list">
            {projects.map((project, idx) => (
              <article className={`project-row ${idx % 2 ? "project-reverse" : ""} ${idx === 0 ? "project-featured" : idx % 3 === 1 ? "project-compact" : "project-standard"}`} key={project.slug}>
                <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>
                  <ProjectVisual project={project} />
                </Link>
                <div className="project-copy">
                  <div className="project-topline"><span>{project.index}</span><span>{project.eyebrow}</span><span>{project.year}</span></div>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <div className="tag-row">{project.stack.slice(0, 4).map((tag) => <TechBadge name={tag} compact key={tag} />)}</div>
                  <div className="project-links">
                    <Link className="text-link" href={`/projects/${project.slug}`}>View case study <span>↗</span></Link>
                    {project.github && <a className="text-link subtle" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container">
          <div className="section-heading">
            <div><span className="section-number">02</span><span className="eyebrow-text">EXPERIENCE & JOURNEY</span></div>
            <p>From native Android to machine learning, backend systems, and software built around real operational needs.</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-item" key={item.period + item.org}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-main"><h3>{item.org}</h3><div className="timeline-role">{item.role}</div></div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-heading compact">
            <div><span className="section-number">03</span><span className="eyebrow-text">ENGINEERING TOOLKIT</span></div>
            <p>No percentage bars — just tools connected to work I have actually built.</p>
          </div>
          <div className="stack-grid">
            {skills.map((skill, index) => (
              <div className="stack-card" key={skill.label}>
                <span>0{index + 1}</span>
                <h3>{skill.label}</h3>
                <div className="skill-tools">
                  {skill.tools.map((tool) => <TechBadge name={tool} key={tool} />)}
                </div>
                <small>Used in → {skill.proof}</small>
              </div>
            ))}
          </div>
          <div className="metric-strip">
            <div><strong>6+</strong><span>Featured Projects</span></div>
            <div><strong>2</strong><span>Bangkit Cohorts</span></div>
            <div><strong>3.72</strong><span>GPA · Cumlaude</span></div>
            <div><strong>1</strong><span>Professional Internship</span></div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="section-kicker"><span className="section-number">04</span><span className="eyebrow-text">ABOUT</span></div>
          <div className="about-copy">
            <h2>I like building where <em>mobile apps, APIs, data, and people&apos;s workflows meet.</em></h2>
            <p>I started in native Android development, expanded into machine learning, and then moved deeper into backend and product engineering. Today my work spans Kotlin, Flutter, Laravel, Firebase, REST APIs, and practical integrations.</p>
            <p>What I care about most is not adding technology for its own sake — it is turning a real workflow into software that is understandable, maintainable, and useful.</p>
            <div className="about-actions">
              <a className="text-link" href="/resume" target="_blank" rel="noreferrer">View full resume ↗</a>
              <a className="text-link subtle" href="https://www.coursera.org/user/398d906c82f910021692e701ec6854e4" target="_blank" rel="noreferrer">Additional certifications ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section extra-section">
        <div className="container">
          <div className="section-heading compact">
            <div><span className="section-number">05</span><span className="eyebrow-text">MORE ENGINEERING</span></div>
            <p>Additional work across decision-support, commerce, and automation.</p>
          </div>
          <div className="extra-grid">
            {extraProjects.map((project) => (
              <a className="extra-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <span className="extra-arrow">↗</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="extra-stack">
                  {project.stack.split(" · ").map((tag) => <TechBadge name={tag} compact key={tag} />)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements-section">
        <div className="container">
          <div className="section-heading compact">
            <div><span className="section-number">06</span><span className="eyebrow-text">MILESTONES</span></div>
          </div>
          <div className="milestone-grid">
            <div><span>2025</span><strong>Cumlaude Graduate</strong><p>Software Engineering · GPA 3.72 / 4.00</p></div>
            <div><span>2025</span><strong>Outstanding Student Certificate</strong><p>Recognition related to MSIB participation in Mobile Development and Machine Learning.</p></div>
            <div><span>2024</span><strong>Bangkit Academy ×2</strong><p>Completed Android Development and Machine Learning cohorts.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow-text">LET&apos;S BUILD SOMETHING USEFUL</span>
          <h2>Have a product, system, or idea worth building?</h2>
          <p>I&apos;m open to software opportunities, collaboration, and interesting projects.</p>
          <div className="contact-links">
            <a href="mailto:bayupratamaaguskurniawan@gmail.com"><MdOutlineEmail aria-hidden="true" /> Email me ↗</a>
            <a href="https://www.linkedin.com/in/bayu-pratama-agus-kurniawan-770798309/" target="_blank" rel="noreferrer">{/* LinkedIn icon temporarily disabled */}LinkedIn ↗</a>
            <a href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer"><SiGithub aria-hidden="true" /> GitHub ↗</a>
          </div>
          <div className="footer-line"><span>Bayu Pratama Agus Kurniawan</span><span>Riau, Indonesia · GMT+7</span><span>© 2026</span></div>
        </div>
      </section>
    </main>
  );
}
