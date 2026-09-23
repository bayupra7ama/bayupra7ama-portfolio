import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { extraProjects, projects } from "@/lib/projects";

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
    tools: "Laravel · PHP · REST API · MySQL · Authentication · Admin workflows",
    proof: "Monitoring TA · Jastip · 7KAIH · Lapor Infra",
  },
  {
    label: "Mobile Engineering",
    tools: "Kotlin · Android · Jetpack Compose · Flutter · Retrofit · Firebase",
    proof: "SpotGacor · Monitoring TA · MUDAH CATAT · ResikApp",
  },
  {
    label: "Applied AI & Integrations",
    tools: "Python · TensorFlow · Scikit-learn · Maps · Midtrans · WhatsApp OTP",
    proof: "ResikApp · UKT Classification · Location & payment flows",
  },
];

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
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
              <a className="button button-ghost" href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer">View GitHub ↗</a>
              <a className="button button-ghost" href="/resume" target="_blank" rel="noreferrer">View CV ↗</a>
            </div>
          </div>

          <div className="hero-side reveal delay-1">
            <div className="portrait-shell">
              <div className="portrait-halo" />
              <div className="portrait-frame">
                <img src="https://avatars.githubusercontent.com/u/146198328?v=4" alt="Bayu Pratama Agus Kurniawan" />
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
              <article className={`project-row ${idx % 2 ? "project-reverse" : ""}`} key={project.slug}>
                <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>
                  <ProjectVisual title={project.title} index={project.index} accent={project.accent} />
                </Link>
                <div className="project-copy">
                  <div className="project-topline"><span>{project.index}</span><span>{project.eyebrow}</span><span>{project.year}</span></div>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <div className="tag-row">{project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
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
                <p>{skill.tools}</p>
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
                <small>{project.stack}</small>
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
            <a href="mailto:bayupratamaaguskurniawan@gmail.com">Email me ↗</a>
            <a href="https://www.linkedin.com/in/bayu-pratama-agus-kurniawan-770798309/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="footer-line"><span>Bayu Pratama Agus Kurniawan</span><span>Riau, Indonesia · GMT+7</span><span>© 2026</span></div>
        </div>
      </section>
    </main>
  );
}
