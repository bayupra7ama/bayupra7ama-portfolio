"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isLight = saved === "light";
    setLight(isLight);
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label="Toggle color theme">
      <span>{light ? "☾" : "☀"}</span>
    </button>
  );
}
