import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ujjuImg from "../assets/ujju.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiAward, FiBookOpen, FiCode, FiTarget, FiBriefcase, FiDownload, FiCheckCircle } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const stats = [
  { value: "12+", label: "PROJECTS SHIPPED", bar: "[||||||||||||]" },
  { value: "8+", label: "CORE TECHNOLOGIES", bar: "[||||||||....]" },
  { value: "2", label: "INDUSTRY ROLES", bar: "[||..........]" },
  { value: "5+", label: "CERTIFICATIONS", bar: "[|||||.......]" },
];

const socials = [
  { icon: FaLinkedin, label: "LINKEDIN", href: "https://www.linkedin.com/in/ujjwal-anand63/" },
  { icon: FaGithub, label: "GITHUB", href: "https://github.com/Ujjwal-anand00" },
  { icon: FaInstagram, label: "INSTAGRAM", href: "https://www.instagram.com/_ujjwal.anand_/" },
  { icon: SiLeetcode, label: "LEETCODE", href: "https://leetcode.com/u/ujjwal_anand_7170/" },
];

const timeline = [
  {
    icon: FiCode,
    title: "PROFESSIONAL PROFILE",
    detail: "Full Stack Web Developer, Software Engineer, and Cyber Security Specialist focused on resilient systems.",
    code: "STATUS: ACTIVE_DEVELOPER",
  },
  {
    icon: FiBookOpen,
    title: "EDUCATION CREDENTIALS",
    detail: "Bachelor of Technology in Computer Science and Engineering, Lovely Professional University.",
    code: "DEGREE: B.TECH_CSE",
  },
  {
    icon: FiTarget,
    title: "ENGINEERING MINDSET",
    detail: "Relentless pursuit of clean code, architectural scalability, low latency, and robust test coverage.",
    code: "PARADIGM: SCALABILITY",
  },
  {
    icon: FiAward,
    title: "SECURITY FIRST APPROACH",
    detail: "Cybersecurity-aware developer designing defensive API endpoints, token verification, and data integrity.",
    code: "SECURITY: DEFENSIVE_CODING",
  },
  {
    icon: FiBriefcase,
    title: "PRODUCTION DELIVERY",
    detail: "Dedicated to building high-value software, optimizing query performance, and deploying across AWS cloud.",
    code: "DEPLOY: AWS_DOCKER_NGINX",
  },
];

export default function About() {
  return (
    <div className="about-section">
      {/* Section Terminal Header */}
      <div className="section-heading">
        <span className="section-kicker">// SECTION: 01 &bull; WHOAMI &amp; PROFILE</span>
        <h2>SYS_IDENT: UJJWAL ANAND</h2>
        <p className="flex items-center gap-2">
          <span>&gt;</span>
          <Typewriter
            words={[
              "A Full Stack Web Developer.",
              "A Systems & Cloud Developer.",
              "A Cyber Security Specialist.",
              "A passionate builder driven by technical rigor.",
            ]}
            loop={0}
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
            cursor
            cursorStyle="█"
          />
        </p>
      </div>

      <div className="about-grid">
        {/* LEFT: Terminal Profile ID Card */}
        <article className="profile-card">
          <div className="profile-header-bar">
            <span>+--- [ID_CARD: UJJWAL_ANAND] ---+</span>
            <span className="text-[#33ff00]">[VERIFIED]</span>
          </div>

          <div className="profile-image-wrap">
            <img src={ujjuImg} alt="Ujjwal Anand" loading="lazy" />
          </div>

          <div className="profile-content">
            <div className="text-xs text-[#ffb000] mb-2 uppercase font-bold flex items-center justify-between">
              <span>[STATUS: 200 OK &bull; OPEN TO ROLES]</span>
              <span className="text-[#33ff00] text-[10px] hidden sm:inline">[HOST: LPU_CSE]</span>
            </div>

            <h3 className="tracking-wide">UJJWAL ANAND</h3>

            <div className="space-y-2.5 my-2 text-xs sm:text-sm">
              <p className="leading-relaxed text-[#a8d5a8]">
                Computer Science Engineer (<span className="text-[#ffb000] font-semibold">B.Tech CSE @ Lovely Professional University</span>)
                crafting high-throughput <span className="text-[#33ff00] font-semibold">full-stack web architectures</span>, 
                <span className="text-[#00ffff] font-semibold"> distributed cloud backends</span>, and 
                <span className="text-[#ffb000] font-semibold"> hardened cybersecurity</span> protocols.
              </p>

              {/* Terminal Micro-Specs */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-dashed border-[#1f521f] text-[11px] font-mono">
                <div className="p-2 bg-[#000] border border-[#1f521f]">
                  <span className="text-[#4e804e] block text-[9px] uppercase">// SPECIALIZATION</span>
                  <span className="text-[#33ff00] font-bold">MERN &bull; CLOUD &bull; SEC</span>
                </div>
                <div className="p-2 bg-[#000] border border-[#1f521f]">
                  <span className="text-[#4e804e] block text-[9px] uppercase">// CORE DIRECTIVE</span>
                  <span className="text-[#ffb000] font-bold">SCALE &bull; OPTIMIZE</span>
                </div>
              </div>

              <div className="text-[11px] text-[#4e804e] flex items-center gap-1.5 pt-0.5 font-mono">
                <span className="text-[#33ff00]">●</span>
                <span>PRODUCTION-READY SYSTEMS FROM SPEC TO SCALE</span>
              </div>
            </div>

            <div className="profile-card-footer mt-auto pt-4 border-t border-dashed border-[#1f521f]">
              <a
                href="https://drive.google.com/file/d/1cZOtq34HLsAuFTAFKBkPN8ZvifC9HLhG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button w-full justify-center mb-3"
              >
                <span>[ FETCH_DOSSIER.PDF ]</span>
                <FiDownload />
              </a>

              <div className="flex flex-wrap gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-bracket-link flex-1 text-center justify-center"
                    >
                      <Icon />
                      <span>[{social.label}]</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </article>

        {/* RIGHT: Raw Data Stats & Diagnostic Execution Timeline */}
        <div className="about-bento flex flex-col gap-4">
          {/* Terminal Stat Grid with ASCII Bars */}
          <div className="stat-terminal-pane">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="flex justify-between items-baseline mb-1">
                  <strong>{stat.value}</strong>
                  <span className="text-xs text-[#ffb000]">{stat.bar}</span>
                </div>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Diagnostic Initialization Timeline */}
          <div className="timeline-card">
            <div className="text-xs text-[#ffb000] pb-2 border-b border-[#1f521f] mb-3 flex justify-between uppercase">
              <span>// SYSTEM LOG: SPECIFICATIONS &amp; RECORD</span>
              <span>JOURNAL_LEVEL: 0</span>
            </div>

            <div className="flex flex-col gap-2">
              {timeline.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="timeline-entry">
                    <div className="timeline-entry-icon">
                      <Icon size={18} />
                    </div>
                    <div className="timeline-entry-body flex-1">
                      <div className="flex justify-between items-center">
                        <strong>{item.title}</strong>
                        <span className="text-[10px] text-[#ffb000] font-mono">[{item.code}]</span>
                      </div>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
