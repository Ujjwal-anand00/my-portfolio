import React, { useEffect, useMemo, useRef, useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Experiance from "./Experiance";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const sections = ["home", "about", "experience", "projects", "skills", "contact"];

const Body = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experianceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  const refs = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      experience: experianceRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    }),
    []
  );

  useEffect(() => {
    const loader = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(loader);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    const onPointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.08 }
    );

    sections.forEach((section) => {
      const node = refs[section]?.current;
      if (node) {
        if (section === "home") node.classList.add("is-visible");
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [refs]);

  const scrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`portfolio-shell ${theme}`}>
      {loading && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[var(--page)]">
          <div className="loader-card">
            <span className="loader-mark" />
            <p>Building the interface</p>
          </div>
        </div>
      )}

      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div
        className="cursor-glow"
        style={{ transform: `translate3d(${cursor.x - 210}px, ${cursor.y - 210}px, 0)` }}
      />
      <div className="ambient-grid" aria-hidden="true" />
      <div className="os-noise" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ "--i": index }} />
        ))}
      </div>
      <aside className="system-rail" aria-label="Engineering operating system status">
        <span className="rail-dot" />
        <span>Identity OS</span>
        <strong>{activeSection}</strong>
      </aside>

      <Nav
        activeSection={activeSection}
        onNavigate={scrollTo}
        theme={theme}
        onThemeToggle={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
      />

      <main>
        <section ref={homeRef} id="home" className="reveal-section">
          <Home onNavigate={scrollTo} />
        </section>

        <section ref={aboutRef} id="about" className="reveal-section">
          <About />
        </section>

        <section ref={experianceRef} id="experience" className="reveal-section">
          <Experiance />
        </section>

        <section ref={projectsRef} id="projects" className="reveal-section">
          <Projects />
        </section>

        <section ref={skillsRef} id="skills" className="reveal-section">
          <Skills />
        </section>

        <section ref={contactRef} id="contact" className="reveal-section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Body;
