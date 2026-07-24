import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FiArrowUpRight,
  FiDownload,
  FiTerminal,
  FiCheckCircle,
  FiActivity,
  FiCpu,
} from "react-icons/fi";
import CodeEditorWindow from "./CodeEditorWindow";

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ujjwal-anand63/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Ujjwal-anand00",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/ujjwal_anand_7170/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/_ujjwal.anand_/",
  },
];

const floatingTech = [
  { icon: FaReact, label: "React", className: "float-a" },
  { icon: SiTailwindcss, label: "Tailwind", className: "float-b" },
  { icon: FaNodeJs, label: "Node", className: "float-c" },
  { icon: SiMongodb, label: "MongoDB", className: "float-d" },
  { icon: SiPostgresql, label: "Postgres", className: "float-e" },
  { icon: SiTypescript, label: "TypeScript", className: "float-f" },
];

const Home = ({ onNavigate }) => {
  return (
    <div className="hero-section section-shell">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="pulse-dot" />
          <span>Available for Full-time Roles</span>
        </div>

        <h1>Architecting Systems From Concept to Scale.</h1>

        <div className="hero-subtitle">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Frontend React Specialist",
              "MERN Stack Engineer",
              "Secure Systems Developer",
            ]}
            loop={0}
            typeSpeed={70}
            deleteSpeed={42}
            delaySpeed={1400}
            cursor
            cursorStyle="_"
          />
        </div>

        <p className="hero-description">
          A Software Engineer dedicated to architecting and developing scalable, high-performance applications. With a comprehensive background spanning full-stack development, cloud infrastructure, and advanced system design, I consistently deliver robust, production-ready solutions that drive business value and elevate user experiences.
        </p>

        <div className="identity-statement">
          <span>Engineering Operating System</span>
          <strong>
            Software Engineer • Full Stack Developer • Systems Architect
          </strong>
        </div>

        <div className="hero-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => onNavigate("projects")}
          >
            Explore Projects <FiArrowUpRight />
          </button>
          <a
            className="secondary-button"
            href="https://drive.google.com/file/d/1cZOtq34HLsAuFTAFKBkPN8ZvifC9HLhG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <FiDownload />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="mesh-spotlight" />
        
        {/* Animated VS Code Style Editor */}
        <CodeEditorWindow />

        <div className="social-row">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {floatingTech.map((tech) => {
          const Icon = tech.icon;
          return (
            <div key={tech.label} className={`floating-tech ${tech.className}`}>
              <Icon />
              <span>{tech.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

