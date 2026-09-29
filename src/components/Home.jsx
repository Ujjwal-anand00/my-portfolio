import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiLeetcode,
} from "react-icons/si";
import {
  FiArrowUpRight,
  FiDownload,
  FiTerminal,
} from "react-icons/fi";
import CodeEditorWindow from "./CodeEditorWindow";

const socials = [
  {
    icon: FaLinkedin,
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/ujjwal-anand63/",
  },
  {
    icon: FaGithub,
    label: "GITHUB",
    href: "https://github.com/Ujjwal-anand00",
  },
  {
    icon: SiLeetcode,
    label: "LEETCODE",
    href: "https://leetcode.com/u/ujjwal_anand_7170/",
  },
  {
    icon: FaInstagram,
    label: "INSTAGRAM",
    href: "https://www.instagram.com/_ujjwal.anand_/",
  },
];

const daemons = [
  { name: "react.service", status: "ACTIVE (running)", load: "92%" },
  { name: "node-api.service", status: "ACTIVE (running)", load: "86%" },
  { name: "mongo-db.service", status: "ACTIVE (listening)", load: "82%" },
  { name: "aws-ec2.service", status: "ACTIVE (cloud-prod)", load: "99.9%" },
];

export default function Home({ onNavigate, onOpenTerminal }) {
  return (
    <div className="hero-section">
      {/* LEFT COLUMN: Terminal Prompts & Hero Copy */}
      <div className="hero-copy w-full min-w-0">
        {/* System Diagnostic Status Bar */}
        <div className="hero-sys-banner">
          <div className="stat-item">
            <span>KERNEL:</span>
            <strong>MERN/LINUX</strong>
          </div>
          <div className="stat-item">
            <span>UPTIME:</span>
            <strong>3+ YRS</strong>
          </div>
          <div className="stat-item">
            <span>STATUS:</span>
            <strong className="text-[#33ff00]">[ AVAILABLE ]</strong>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-ascii-title">
          ARCHITECTING SYSTEMS FROM CONCEPT TO SCALE.
        </h1>

        {/* Dynamic Typewriter Prompt */}
        <div className="hero-prompt-line">
          <span className="font-bold text-[#ffb000]">&gt;</span>
          <div className="truncate">
            <Typewriter
              words={[
                "FULL STACK SOFTWARE ENGINEER",
                "SYSTEMS & CLOUD DEVELOPER",
                "MERN & TYPESCRIPT SPECIALIST",
                "CYBERSECURITY ENTHUSIAST",
              ]}
              loop={0}
              typeSpeed={60}
              deleteSpeed={35}
              delaySpeed={1600}
              cursor
              cursorStyle="█"
            />
          </div>
        </div>

        <p className="hero-description">
          A Software Engineer dedicated to architecting and developing scalable, high-performance applications.
          With a comprehensive background spanning full-stack development, cloud infrastructure, and advanced system design,
          I consistently deliver robust, production-ready solutions that drive real-world impact.
        </p>

        {/* Terminal Execution Actions */}
        <div className="hero-actions">
          <button
            type="button"
            className="primary-button hero-act-btn"
            onClick={() => onNavigate("projects")}
          >
            <span>[ ./EXPLORE_PROJECTS.SH ]</span>
            <FiArrowUpRight />
          </button>

          <a
            className="secondary-button hero-act-btn"
            href="https://drive.google.com/file/d/1cZOtq34HLsAuFTAFKBkPN8ZvifC9HLhG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>[ CAT RESUME.PDF ]</span>
            <FiDownload />
          </a>

          <button
            type="button"
            className="secondary-button hero-act-btn"
            onClick={onOpenTerminal}
          >
            <FiTerminal />
            <span>[ LAUNCH_CLI &gt;_ ]</span>
          </button>
        </div>

        {/* Social Terminal Links */}
        <div className="hero-social-strip">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="social-bracket-link"
              >
                <Icon />
                <span>[{social.label}]</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive TMUX Editor & Running Daemons */}
      <div className="hero-visual flex flex-col gap-4 w-full min-w-0">
        {/* TMUX Code Window */}
        <CodeEditorWindow />

        {/* Running System Daemons Pane */}
        <div className="border border-[#1f521f] bg-[#0d120d] p-3 text-xs font-mono w-full overflow-hidden">
          <div className="flex justify-between items-center text-[#ffb000] pb-2 border-b border-[#1f521f] mb-2 uppercase text-[11px]">
            <span>// SYSTEM DAEMONS</span>
            <span className="hidden sm:inline">systemctl list-units</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {daemons.map((d) => (
              <div key={d.name} className="flex justify-between items-center text-[#a8d5a8] text-[11px] gap-2">
                <span className="text-[#33ff00] truncate">● {d.name}</span>
                <span className="text-[#4e804e] hidden sm:inline">{d.status}</span>
                <span className="text-[#ffb000] shrink-0">[{d.load}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
