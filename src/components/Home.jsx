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
  FiMousePointer,
} from "react-icons/fi";

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
        <h1>Igniting imagination from the void...</h1>
        <p className="hero-subtitle">
          <Typewriter
            words={[
              "Full Stack Developer",
              "React Experience Builder",
              "MERN Product Engineer",
              "Cybersecurity-minded Problem Solver",
            ]}
            loop={0}
            typeSpeed={70}
            deleteSpeed={42}
            delaySpeed={1400}
            cursor
            cursorStyle="_"
          />
        </p>
        <p className="hero-description">
          I'm Ujjwal Anand, a multidisciplinary software engineer focused on
          building scalable products, modern web applications, and impactful
          digital experiences. From full-stack development and cloud deployment
          to AI-assisted workflows and system design, I transform ideas into
          reliable, production-ready solutions.
        </p>

        <div className="identity-statement">
          <span>Engineering Identity</span>
          <strong>
            Full Stack Engineer • Systems Thinker • Product Builder
          </strong>
        </div>

        <div className="hero-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => onNavigate("projects")}
          >
            View work <FiArrowUpRight />
          </button>
          <a
            className="secondary-button"
            href="https://drive.google.com/file/d/1MU3Lc0Uk7x90saiTdzS78Vacdx5iFWev/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <FiDownload />
          </a>
        </div>

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
      </div>

      <div
        className="hero-visual"
        aria-hidden="true"
      >
        <div className="mesh-spotlight" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-device">
          <div className="device-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="metric-strip">
            <div>
              <small>Projects</small>
              <strong>15+</strong>
            </div>
            <div>
              <small>Technologies</small>
              <strong>20+</strong>
            </div>
            <div>
              <small>Cloud</small>
              <strong>AWS</strong>
            </div>
          </div>
          <div className="command-card">
            <FiMousePointer />
            <span>Recruiter journey optimized</span>
          </div>
          <div className="signal-grid">
            {[
              "UI Systems",
              "APIs",
              "Auth",
              "Analytics",
              "Security",
              "Cloud",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
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
