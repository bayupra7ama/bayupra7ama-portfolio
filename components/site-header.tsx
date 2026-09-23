import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Bayu Pratama home">
          BAYU<span>.</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <a className="nav-cv" href="/resume" target="_blank" rel="noreferrer">View CV</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
