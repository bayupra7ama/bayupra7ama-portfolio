"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1100) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Bayu Pratama home" onClick={() => setMenuOpen(false)}>
          BAYU<span>.</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>

        <div className="nav-actions">
          <a className="nav-icon-link" href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer" aria-label="GitHub profile"><SiGithub /></a>
          <a className="nav-cv" href="/resume" target="_blank" rel="noreferrer">View CV</a>
          <ThemeToggle />
          <button
            ref={toggleRef}
            className="nav-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? <FiX /> : <FiMenu />}</span>
            <span>Menu</span>
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile primary navigation" hidden={!menuOpen}>
        <div className="mobile-menu-heading"><span>EXPLORE</span><span>Bayu's portfolio</span></div>
        <div className="mobile-menu-links">
          {navigation.map((item, index) => (
            <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span className="mobile-menu-index">{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mobile-menu-actions">
          <a href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}><SiGithub aria-hidden="true" /> GitHub</a>
          <a href="/resume" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>View CV <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}
