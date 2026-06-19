import React, { useEffect, useMemo, useRef, useState } from "react";
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
  SiJupyter,
  SiMongodb,
  SiNginx,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiLayers, FiShield, FiTerminal, FiZap } from "react-icons/fi";
import { allskills } from "./SkillName";
import "./ShowcaseUpgrades.css";

const capabilityCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: FaReact,
    summary: "Modern product interfaces, responsive systems, typed components, and polished interaction layers.",
    skills: [
      { name: "React.js", level: 92, icon: FaReact },
      { name: "Tailwind CSS", level: 88, icon: SiTailwindcss },
      { name: "JavaScript", level: 90, icon: SiJavascript },
      { name: "TypeScript", level: 78, icon: SiTypescript },
      { name: "Vite", level: 82, icon: SiVite },
      { name: "Figma", level: 72, icon: SiFigma },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    icon: FiLayers,
    summary: "API design, secure integrations, database-backed systems, realtime communication, and backend contracts.",
    skills: [
      { name: "Node.js", level: 86, icon: FaNodeJs },
      { name: "REST APIs", level: 86, icon: FiLayers },
      { name: "Express.js", level: 84, icon: SiExpress },
      { name: "Authentication", level: 84, icon: FiZap },
      { name: "JWT", level: 82, icon: FiShield },
      { name: "Socket.IO", level: 78, icon: SiSocketdotio },
      { name: "Postman", level: 84, icon: SiPostman },
      { name: "MongoDB", level: 82, icon: SiMongodb },
      { name: "PostgreSQL", level: 76, icon: SiPostgresql },
      { name: "PHP", level: 68, icon: SiPhp },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: FaCode,
    summary: "Core languages used across web apps, problem solving, scripts, and database work.",
    skills: [
      { name: "C++", level: 84, icon: FaCode },
      { name: "Python", level: 76, icon: FaPython },
      { name: "Java", level: 70, icon: FaJava },
      { name: "JavaScript", level: 90, icon: SiJavascript },
      { name: "TypeScript", level: 78, icon: SiTypescript },
      { name: "SQL", level: 78, icon: FiDatabase },
    ],
  },
  {
    id: "devops",
    title: "Linux & DevOps",
    icon: FaLinux,
    summary: "Deployment, server setup, process management, and practical production operations.",
    skills: [
      { name: "Linux", level: 80, icon: FaLinux },
      { name: "Ubuntu", level: 78, icon: FaLinux },
      { name: "Shell Scripting", level: 70, icon: FiTerminal },
      { name: "Nginx", level: 74, icon: SiNginx },
      { name: "PM2", level: 76, icon: FiZap },
      { name: "AWS EC2", level: 74, icon: FaAws },
      { name: "Deployment", level: 82, icon: FaDocker },
      { name: "Git/GitHub", level: 88, icon: FaGitAlt },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: FaAws,
    summary: "Cloud deployment, process managers, reverse proxies, and production release workflows.",
    skills: [
      { name: "AWS EC2", level: 74, icon: FaAws },
      { name: "Nginx", level: 74, icon: SiNginx },
      { name: "PM2", level: 76, icon: FiZap },
      { name: "Deployment", level: 82, icon: FaDocker },
      { name: "Vercel/Vite workflow", level: 82, icon: SiVite },
      { name: "GitHub", level: 88, icon: FaGitAlt },
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: SiPandas,
    summary: "Data workflows for analysis, visualization, notebooks, and spreadsheet-driven products.",
    skills: [
      { name: "NumPy", level: 70, icon: SiNumpy },
      { name: "Pandas", level: 72, icon: SiPandas },
      { name: "Jupyter Notebook", level: 72, icon: SiJupyter },
      { name: "Excel Analytics", level: 78, icon: FiDatabase },
      { name: "Data Visualization", level: 76, icon: FiZap },
    ],
  },
  {
    id: "ai",
    title: "AI & Productivity",
    icon: FiZap,
    summary: "Using AI responsibly to accelerate debugging, ideation, prototyping, and developer workflow.",
    skills: [
      { name: "AI-assisted debugging", level: 82, icon: FiZap },
      { name: "Prompt Engineering", level: 78, icon: FiCpu },
      { name: "AI workflow optimization", level: 76, icon: FiLayers },
      { name: "Rapid prototyping", level: 84, icon: FaReact },
      { name: "VS Code", level: 90, icon: FaCode },
      { name: "Postman", level: 84, icon: SiPostman },
      { name: "Git", level: 88, icon: FaGitAlt },
    ],
  },
  {
    id: "cs",
    title: "Computer Science Fundamentals",
    icon: FiCpu,
    summary: "Foundations for writing better software and reasoning through technical interviews.",
    skills: [
      { name: "Data Structures & Algorithms", level: 78, icon: FiCpu },
      { name: "OOPs", level: 80, icon: FiLayers },
      { name: "DBMS", level: 82, icon: FiDatabase },
      { name: "Operating Systems", level: 74, icon: FiTerminal },
      { name: "Networking", level: 76, icon: FiZap },
      { name: "System Design basics", level: 68, icon: FiLayers },
      { name: "Problem Solving", level: 82, icon: FiZap },
    ],
  },
];

const originalCategories = ["All", "Languages", "Frontend", "Backend", "Others"];

function SkillMeter({ skill }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = skill.icon;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.article
      className="skill-card-interactive"
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="skill-card-head">
        <span>
          <Icon />
        </span>
        <strong>{skill.level}%</strong>
      </div>
      <h3>{skill.name}</h3>
      <div className="progress-track" aria-label={`${skill.name} proficiency ${skill.level}%`}>
        <span style={{ width: visible ? `${skill.level}%` : "0%" }} />
      </div>
    </motion.article>
  );
}

export default function Skills() {
  const [activeCapability, setActiveCapability] = useState("frontend");
  const [originalFilter, setOriginalFilter] = useState("All");

  const selectedCapability = capabilityCategories.find((category) => category.id === activeCapability);
  const SummaryIcon = selectedCapability?.icon;
  const filteredOriginalSkills = useMemo(
    () =>
      originalFilter === "All"
        ? allskills
        : allskills.filter((skill) => skill.category === originalFilter),
    [originalFilter]
  );

  return (
    <motion.div
      className="section-shell skills-section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading skills-ecosystem-heading">
        <span>Engineering Ecosystem</span>
        <h2>Capabilities Beyond Full Stack Development</h2>
        <p>
          A multidisciplinary toolkit spanning software engineering, systems, cloud infrastructure, data
          analytics, AI-assisted workflows, and modern product development.
        </p>
      </div>

      <div className="capability-tabs" role="tablist" aria-label="Capability categories">
        {capabilityCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              className={activeCapability === category.id ? "active" : ""}
              onClick={() => setActiveCapability(category.id)}
              role="tab"
              aria-selected={activeCapability === category.id}
            >
              <Icon />
              {category.title}
            </button>
          );
        })}
      </div>

      <motion.div
        className="capability-dashboard"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <article className="capability-summary-card">
          <div className="capability-summary-icon">
            {SummaryIcon && <SummaryIcon />}
          </div>
          <span>{selectedCapability?.title}</span>
          <h3>{selectedCapability?.summary}</h3>

        </article>

        <div className="skills-grid expanded">
          {selectedCapability?.skills.map((skill) => (
            <SkillMeter key={skill.name} skill={skill} />
          ))}
        </div>
      </motion.div>


    </motion.div>
  );
}
