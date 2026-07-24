import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Nav = ({ activeSection, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      {/* LEFT: Identity Block */}
      <a
        className="brand-lockup"
        onClick={() => handleNavigate("home")}
        aria-label="Go to home"
      >
        <div className="brand-avatar">
          <img src="/Logo.png" alt="Ujjwal Anand" />
          <span className="brand-online-dot" />
        </div>
        <div className="brand-info">
          <strong>Ujjwal Anand</strong>
          <small>Full Stack Engineer</small>
        </div>
      </a>

      {/* CENTER: Floating Capsule Navigation */}
      <nav className="desktop-nav-capsule" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item-btn ${isActive ? "active" : ""}`}
              onClick={() => handleNavigate(item.id)}
            >
              {isActive && (
                <motion.span
                  layoutId="activeNavPill"
                  className="nav-active-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="nav-item-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* RIGHT: Action CTAs */}
      <div className="nav-actions">
        <a
          href="https://drive.google.com/file/d/1cZOtq34HLsAuFTAFKBkPN8ZvifC9HLhG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-secondary-btn"
        >
          <span>Resume</span>
          <FiDownload />
        </a>

        <button
          type="button"
          className="nav-primary-cta"
          onClick={() => handleNavigate("contact")}
        >
          <span>Hire Me</span>
          <FiArrowUpRight className="cta-arrow-icon" />
        </button>

        <button
          type="button"
          className="icon-button mobile-trigger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="mobile-nav-panel"
              initial={{ y: -16, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-nav-head">
                <div className="mobile-brand">
                  <img src="/Logo.png" alt="Ujjwal Anand" />
                  <div>
                    <strong>Ujjwal Anand</strong>
                    <small>Full Stack Engineer</small>
                  </div>
                </div>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              <div className="mobile-nav-links">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`mobile-link ${activeSection === item.id ? "active" : ""}`}
                    onClick={() => handleNavigate(item.id)}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && <span className="mobile-active-indicator" />}
                  </button>
                ))}
              </div>

              <div className="mobile-nav-actions">
                <a
                  href="https://drive.google.com/file/d/1cZOtq34HLsAuFTAFKBkPN8ZvifC9HLhG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-secondary-btn"
                >
                  Resume <FiDownload />
                </a>
                <button
                  type="button"
                  className="mobile-primary-btn"
                  onClick={() => handleNavigate("contact")}
                >
                  Hire Me <FiArrowUpRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
