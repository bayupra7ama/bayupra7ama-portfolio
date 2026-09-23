import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Bayu Pratama Agus Kurniawan, Software Engineer.",
};

const experience = [
  {
    date: "Feb 2025 — Jun 2025",
    title: "Infrastructure Service Intern · SPBE",
    org: "Dinas Komunikasi, Informatika, Statistik, dan Persandian Kota Pekanbaru",
    bullets: [
      "Built a Chatbot Auto-Reply website for handling network-infrastructure incident reports across OPD in Pekanbaru.",
      "Supported management of SPBE service infrastructure.",
      "Contributed to monitoring, evaluation, and documentation of municipal digital infrastructure.",
    ],
  },
  {
    date: "Sep 2024 — Dec 2024",
    title: "Machine Learning Cohort",
    org: "Bangkit Academy · Kampus Merdeka · MSIB Batch 7",
    bullets: [
      "Studied and implemented supervised / unsupervised learning, CNN, and NLP fundamentals.",
      "Contributed to an AI-based capstone addressing a real-world problem.",
      "Worked across Machine Learning, Android, and Cloud disciplines.",
    ],
  },
  {
    date: "Feb 2024 — Jun 2024",
    title: "Android Developer Cohort",
    org: "Bangkit Academy · Kampus Merdeka · MSIB Batch 6",
    bullets: [
      "Focused on Android development with Kotlin, Jetpack, MVVM, Retrofit, and Firebase.",
      "Collaborated on a mobile capstone integrating backend and machine learning components.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar container">
        <Link href="/">← Portfolio</Link>
        <PrintButton />
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <div className="eyebrow-text">SOFTWARE ENGINEER</div>
            <h1>Bayu Pratama<br />Agus Kurniawan</h1>
          </div>
          <div className="resume-contact">
            <a href="mailto:bayupratamaaguskurniawan@gmail.com">bayupratamaaguskurniawan@gmail.com</a>
            <a href="https://www.linkedin.com/in/bayu-pratama-agus-kurniawan-770798309/">LinkedIn</a>
            <a href="https://github.com/bayupra7ama">github.com/bayupra7ama</a>
            <span>Riau, Indonesia</span>
          </div>
        </header>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-list">
            {experience.map((item) => (
              <div className="resume-entry" key={item.date + item.title}>
                <div className="resume-date">{item.date}</div>
                <div>
                  <h3>{item.title}</h3>
                  <strong>{item.org}</strong>
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section resume-two-col">
          <div>
            <h2>Education</h2>
            <h3>Politeknik Negeri Bengkalis</h3>
            <p>Bachelor of Applied Science — Software Engineering</p>
            <p>2021 — 2025 · GPA 3.72 / 4.00 · Cumlaude</p>
          </div>
          <div>
            <h2>Languages</h2>
            <p>Bahasa Indonesia — Native</p>
            <p>English — Professional Working Proficiency</p>
          </div>
        </section>

        <section className="resume-section resume-two-col">
          <div>
            <h2>Engineering Skills</h2>
            <p><strong>Programming:</strong> Kotlin, PHP, Python, Dart</p>
            <p><strong>Frameworks:</strong> Laravel, Flutter, Jetpack Compose, Retrofit, TensorFlow, Scikit-learn, Flask</p>
            <p><strong>Tools:</strong> Git/GitHub, Firebase, MySQL, REST API, Postman</p>
          </div>
          <div>
            <h2>Achievements</h2>
            <p>Cumlaude Graduate — Politeknik Negeri Bengkalis, 2025</p>
            <p>Outstanding Student Certificate — 2025</p>
            <p>Bangkit Academy Certificate of Completion — Machine Learning, 2024</p>
            <p>Bangkit Academy Certificate of Completion — Android Development, 2024</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Selected Projects</h2>
          <div className="resume-project-grid">
            <div><h3>SpotGacor</h3><p>Kotlin + Laravel location platform for freshwater fishing spots using Google Maps.</p></div>
            <div><h3>Lapor Infra</h3><p>Laravel reporting workflow for OPD network-infrastructure incidents in Pekanbaru.</p></div>
            <div><h3>ResikApp</h3><p>Bangkit capstone combining mobile waste-pickup workflows with AI-based computer vision classification.</p></div>
            <div><h3>MUDAH CATAT</h3><p>Flutter / Firebase cashier and financial-record application with biometrics.</p></div>
          </div>
        </section>
      </article>
    </main>
  );
}
