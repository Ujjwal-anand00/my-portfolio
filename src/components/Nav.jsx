import React, { useEffect, useState } from "react";
import {
  FiDownload,
  FiMenu,
  FiX,
  FiTerminal,
  FiTv,
} from "react-icons/fi";

const navItems = [
  { id: "home", label: "cd ~/home", short: "HOME" },
  { id: "about", label: "cd ~/about", short: "ABOUT" },
  { id: "experience", label: "cd ~/exp", short: "EXP" },
  { id: "projects", label: "cd ~/projects", short: "PROJECTS" },
  { id: "skills", label: "cd ~/skills", short: "SKILLS" },
  { id: "contact", label: "cd ~/contact", short: "CONTACT" },
];

export default function Nav({
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
  scanlines,
  onToggleScanlines,
  onOpenTerminal,
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      setCurrentTime(d.toTimeString().split(" ")[0]);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigate = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      {/* LEFT: System Identity */}
      <div
        className="brand-lockup"
        onClick={() => handleNavigate("home")}
        role="button"
        tabIndex={0}
      >
        <span className="brand-prompt-sym">&gt;</span>
        <div className="brand-info">
          <strong>
            <span className="hidden sm:inline">ujjwal@anand-sys</span>
            <span className="sm:hidden">ujjwal@sys</span>
          </strong>
          <small className="hidden sm:block">[STATUS: 200 OK &bull; {currentTime}]</small>
        </div>
      </div>

      {/* CENTER: Terminal Command Capsule (Desktop) */}
      <nav className="desktop-nav-capsule" aria-label="Primary terminal navigation">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`nav-item-btn ${isActive ? "active" : ""}`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* RIGHT: Quick Controls & Shell Launch */}
      <div className="nav-controls">
        {/* Interactive CLI launcher (Always visible) */}
        <button
          type="button"
          className="nav-cli-toggle"
          onClick={onOpenTerminal}
          title="Open interactive terminal console (Shortcut: Ctrl + `)"
        >
          <FiTerminal />
          <span>CLI &gt;_</span>
        </button>

        {/* Scanlines Toggle (Desktop / Tablet only) */}
        <button
          type="button"
          className="nav-pill-btn hidden md:inline-flex"
          onClick={onToggleScanlines}
          title="Toggle CRT scanlines"
        >
          <FiTv />
          <span>{scanlines ? "CRT:ON" : "CRT:OFF"}</span>
        </button>

        {/* Theme Palette Switcher (Desktop / Tablet only) */}
        <button
          type="button"
          className="nav-pill-btn hidden md:inline-flex"
          onClick={() => onToggleTheme()}
          title="Switch Phosphor Monitor color (Green / Amber)"
        >
          <span>{theme === "amber" ? "P3:AMBER" : "P1:GREEN"}</span>
        </button>

        {/* Resume Bracket Download (Desktop only) */}
        <a
          href="https://drive.google.com/file/d/1cZOtq34HLsAuFTAFKBkPN8ZvifC9HLhG/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="nav-pill-btn hidden lg:inline-flex"
          title="Download verified resume"
        >
          <FiDownload />
          <span>CV.PDF</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open terminal navigation menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer (Responsive Overlay) */}
      {open && (
        <div className="mobile-menu-drawer">
          <div className="mobile-drawer-header">
            <span>[ SYSTEM NAVIGATION DIRECTORY ]</span>
            <button
              type="button"
              className="text-[#ffb000] text-xs font-mono"
              onClick={() => setOpen(false)}
            >
              [ CLOSE ]
            </button>
          </div>

          {/* Nav links */}
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`mobile-nav-item ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleNavigate(item.id)}
              >
                <span className="text-[#ffb000]">&gt;</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Quick System Controls in Mobile Drawer */}
          <div className="mobile-drawer-footer">
            <span className="text-[10px] text-[#4e804e] uppercase block mb-2 font-mono">
              // TERMINAL SETTINGS
            </span>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                type="button"
                className="mobile-control-btn"
                onClick={onToggleScanlines}
              >
                <FiTv />
                <span>{scanlines ? "CRT: ON" : "CRT: OFF"}</span>
              </button>

              <button
                type="button"
                className="mobile-control-btn"
                onClick={() => onToggleTheme()}
              >
                <span>THEME: {theme === "amber" ? "AMBER" : "GREEN"}</span>
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="mobile-control-btn primary"
                onClick={() => {
                  setOpen(false);
                  onOpenTerminal();
                }}
              >
                <FiTerminal />
                <span>EXECUTE TERMINAL CLI &gt;_</span>
              </button>

              <a
                href="https://drive.google.com/file/d/1cZOtq34HLsAuFTAFKBkPN8ZvifC9HLhG/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="mobile-control-btn"
              >
                <FiDownload />
                <span>FETCH RESUME.PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
