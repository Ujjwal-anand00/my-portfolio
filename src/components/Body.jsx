import React, { useEffect, useMemo, useRef, useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Experiance from "./Experiance";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import TerminalCLI from "./TerminalCLI";

const sections = ["home", "about", "experience", "projects", "skills", "contact"];

const Body = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experianceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("green"); // 'green' | 'amber'
  const [scanlines, setScanlines] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // System Boot Loader
  useEffect(() => {
    const loader = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(loader);
  }, []);

  // Global Key Shortcut for Terminal (Ctrl + ` or Backquote or F2)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === "`") || e.key === "F2") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.08 }
    );

    sections.forEach((section) => {
      const node = refs[section]?.current;
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [refs]);

  const scrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`portfolio-shell theme-${theme}`}>
      {/* Boot sequence indicator */}
      {loading && (
        <div className="fixed inset-0 z-[1000] grid place-items-center bg-[#0a0a0a] text-[#33ff00] font-mono p-4">
          <div className="border border-[#33ff00] p-6 max-w-md w-full bg-[#0d120d] shadow-[0_0_20px_rgba(51,255,0,0.3)]">
            <p className="text-xs text-[#ffb000] mb-2">[ SYSTEM BOOT SEQUENCE ]</p>
            <p className="text-sm leading-relaxed mb-3">
              INITIALIZING ANAND_OS v2.4...<br />
              LOADING TERMINAL SHELL...<br />
              MOUNTING VFS: /home/ujjwal/portfolio [OK]
            </p>
            <div className="h-2 w-full bg-[#000] border border-[#1f521f] overflow-hidden">
              <div className="h-full bg-[#33ff00] animate-[pulse_0.6s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      )}

      {/* CRT Scanline & Screen Effects */}
      {scanlines && <div className="crt-overlay" aria-hidden="true" />}
      <div className="crt-vignette" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Primary Terminal Nav Bar */}
      <Nav
        activeSection={activeSection}
        onNavigate={scrollTo}
        theme={theme}
        onToggleTheme={(t) => setTheme(t || (theme === "amber" ? "green" : "amber"))}
        scanlines={scanlines}
        onToggleScanlines={() => setScanlines((prev) => !prev)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Terminal CLI Modal */}
      <TerminalCLI
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigate={scrollTo}
        currentTheme={theme}
        onToggleTheme={(t) => setTheme(t || (theme === "amber" ? "green" : "amber"))}
        scanlines={scanlines}
        onToggleScanlines={(val) => setScanlines(val !== undefined ? val : !scanlines)}
      />

      <main>
        <section ref={homeRef} id="home" className="section-shell">
          <Home onNavigate={scrollTo} onOpenTerminal={() => setTerminalOpen(true)} />
        </section>

        <section ref={aboutRef} id="about" className="section-shell">
          <About />
        </section>

        <section ref={experianceRef} id="experience" className="section-shell">
          <Experiance />
        </section>

        <section ref={projectsRef} id="projects" className="section-shell">
          <Projects />
        </section>

        <section ref={skillsRef} id="skills" className="section-shell">
          <Skills />
        </section>

        <section ref={contactRef} id="contact" className="section-shell">
          <Contact />
        </section>
      </main>

      {/* Terminal Footer Status Bar */}
      <footer className="border-t border-[#1a3d1a] bg-[#0d120d] py-4 px-4 sm:px-6 text-xs text-[#4e804e] flex flex-col sm:flex-row justify-between items-center gap-3 font-mono max-w-[1240px] mx-auto text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
          <span className="text-[#33ff00] whitespace-nowrap">[SYS_STATUS: READY]</span>
          <span className="text-[#ffb000] whitespace-nowrap">&bull; HOST: ujjwal-workstation</span>
          <span className="whitespace-nowrap hidden md:inline">&bull; UPTIME: 24/7</span>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
          <button
            type="button"
            className="text-[#33ff00] hover:underline whitespace-nowrap shrink-0 font-bold"
            onClick={() => setTerminalOpen(true)}
          >
            [ EXECUTE_CLI &gt;_ ]
          </button>
          <span className="text-[11px] sm:text-xs">&copy; {new Date().getFullYear()} UJJWAL ANAND. ALL PROTOCOLS VERIFIED.</span>
        </div>
      </footer>
    </div>
  );
};

export default Body;
