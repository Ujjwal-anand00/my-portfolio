import React, { useState } from "react";
import {
  FaAws,
  FaCode,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiJavascript,
  SiMongodb,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { FiCpu, FiDatabase, FiLayers, FiShield, FiTerminal, FiZap } from "react-icons/fi";
import { allskills } from "./SkillName";
import "./ShowcaseUpgrades.css";

const categories = [
  {
    id: "frontend",
    title: "CORE_FRONTEND.RUNTIME",
    icon: FaReact,
    skills: [
      { name: "React.js", level: 92, bar: "[||||||||||||||||||..]" },
      { name: "JavaScript (ES6+)", level: 90, bar: "[||||||||||||||||||..]" },
      { name: "Tailwind CSS", level: 88, bar: "[||||||||||||||||....]" },
      { name: "Vite & Tooling", level: 82, bar: "[||||||||||||||......]" },
      { name: "TypeScript", level: 78, bar: "[||||||||||||.......]" },
      { name: "UI/UX & Figma", level: 72, bar: "[||||||||||.........]" },
    ],
  },
  {
    id: "backend",
    title: "SERVER_BACKEND.DAEMON",
    icon: FiLayers,
    skills: [
      { name: "Node.js", level: 86, bar: "[|||||||||||||||.....]" },
      { name: "REST API Architecture", level: 86, bar: "[|||||||||||||||.....]" },
      { name: "Express.js Framework", level: 84, bar: "[||||||||||||||......]" },
      { name: "MongoDB & Mongoose", level: 82, bar: "[||||||||||||||......]" },
      { name: "JWT & Security Auth", level: 82, bar: "[||||||||||||||......]" },
      { name: "Socket.IO Realtime", level: 78, bar: "[||||||||||||.......]" },
      { name: "PostgreSQL & SQL", level: 76, bar: "[|||||||||||........]" },
    ],
  },
  {
    id: "languages",
    title: "PROGRAMMING_LANGUAGES.BIN",
    icon: FaCode,
    skills: [
      { name: "C++ (Data Structures)", level: 84, bar: "[||||||||||||||......]" },
      { name: "JavaScript", level: 90, bar: "[||||||||||||||||||..]" },
      { name: "TypeScript", level: 78, bar: "[||||||||||||.......]" },
      { name: "Python", level: 76, bar: "[|||||||||||........]" },
      { name: "SQL (Relational)", level: 78, bar: "[||||||||||||.......]" },
      { name: "Java (OOPs)", level: 70, bar: "[||||||||||.........]" },
    ],
  },
  {
    id: "devops",
    title: "INFRA_AND_DEVOPS.SYS",
    icon: FiTerminal,
    skills: [
      { name: "Linux / Unix Shell", level: 85, bar: "[||||||||||||||......]" },
      { name: "Git & GitHub CI/CD", level: 88, bar: "[||||||||||||||||....]" },
      { name: "AWS EC2 Deployment", level: 78, bar: "[||||||||||||.......]" },
      { name: "Nginx Reverse Proxy", level: 76, bar: "[|||||||||||........]" },
      { name: "Docker Containers", level: 72, bar: "[||||||||||.........]" },
      { name: "Postman API Tests", level: 84, bar: "[||||||||||||||......]" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="skills-section">
      {/* Section Terminal Header */}
      <div className="section-heading">
        <span className="section-kicker">
          // SECTION: 04 &bull; HTOP &bull; SYSTEM RESOURCE MONITOR
        </span>
        <h2>ENGINEERING RUNTIMES &amp; CAPABILITIES</h2>
        <p>
          Process load utilization, algorithmic competencies, distributed frameworks, and cloud infrastructure operations.
        </p>
      </div>

      {/* HTOP Resource Meters Layout */}
      <div className="skills-terminal-layout">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.id} className="skill-category-pane">
              <div className="skill-category-header">
                <h3>
                  <Icon />
                  <span>{cat.title}</span>
                </h3>
                <span className="text-xs text-[#33ff00] font-mono">[READY]</span>
              </div>

              <div className="skill-meters-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-meter-row">
                    <div className="meter-label-line">
                      <span className="meter-name">{skill.name}</span>
                      <span className="meter-value">
                        <span className="text-[#4e804e] mr-1 hidden sm:inline">{skill.bar}</span>
                        <span>{skill.level}%</span>
                      </span>
                    </div>

                    <div className="meter-track">
                      <div
                        className="meter-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* All Installed Packages Terminal Dock */}
      <div className="allskills-terminal-dock">
        <div className="allskills-title flex justify-between items-center">
          <span>// /BIN/USR/SKILLS --ALL-INSTALLED (TOTAL: {allskills.length})</span>
          <span className="text-xs text-[#33ff00] font-mono">[STATUS: CACHED]</span>
        </div>

        <div className="allskills-chip-list">
          {allskills.map((skill, idx) => (
            <span key={idx} className="skill-chip">
              <span className="text-[#33ff00] mr-1">&bull;</span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
