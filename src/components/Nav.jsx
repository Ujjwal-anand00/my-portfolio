import React, { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Nav = ({ activeSection, onNavigate, theme, onThemeToggle }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand-lockup" onClick={() => handleNavigate("home")} aria-label="Go to home">
        <span>UA</span>
        <div>
          <strong>Ujjwal Anand</strong>
          <small>Full Stack Developer</small>
        </div>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => handleNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-button" onClick={onThemeToggle} aria-label="Toggle color theme">
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <button className="nav-cta" onClick={() => handleNavigate("contact")}>
          Hire me
        </button>
        <button className="icon-button mobile-trigger" onClick={() => setOpen(true)} aria-label="Open menu">
          <FiMenu />
        </button>
      </div>

      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <div className="mobile-nav-panel">
          <div className="mobile-nav-head">
            <span>Navigation</span>
            <button className="icon-button" onClick={() => setOpen(false)} aria-label="Close menu">
              <FiX />
            </button>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Nav;
