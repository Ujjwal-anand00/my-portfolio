import React, { useRef } from "react";
import CodeAi from "../assets/certificates/CodeAi.jpg";
import Cpp from "../assets/certificates/C++All.jpg";
import gokC from "../assets/certificates/gokC.jpg";
import NodeJsC from "../assets/certificates/certificate.webp";
import Nptel from "../assets/certificates/Nptel.jpg";
import Zidio from "../assets/certificates/Zidio.jpg";
import { FiArrowUpRight, FiBriefcase, FiCheckCircle, FiShield, FiTerminal, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const roles = [
  {
    service: "embtel-solutions.service",
    company: "Embtel Solutions Pvt. Ltd.",
    role: "Full Stack Developer Associate",
    period: "2026-04 -> PRESENT",
    status: "ACTIVE (RUNNING)",
    focus: "Production Web Applications & Cloud Services",
    highlights: [
      "Contributing to the development, security audits, and cloud deployment of modern web applications.",
      "Building high-performance frontend interfaces, scalable RESTful API endpoints, and database schemas.",
      "Resolving critical bugs, optimizing database queries, and collaborating on real-world software architecture.",
    ],
  },
  {
    service: "zidio-development.service",
    company: "Zidio Development",
    role: "Full Stack Developer Intern",
    period: "2025-05 -> 2025-07",
    status: "SUCCESS (EXIT 0)",
    focus: "MERN + TypeScript Full Stack Platform",
    certificate: Zidio,
    link: "https://drive.google.com/file/d/1pSpJa0K-qLiz9ixjq4gRqCZ75X6C1yJb/view?usp=sharing",
    highlights: [
      "Led the engineering of a full-stack blog platform using the MERN stack coupled with strict TypeScript typing.",
      "Implemented real-time features, secure JWT authentication tokens, and robust error middleware in Express.js.",
      "Resolved complex backend edge cases, enhancing software stability and system debugging workflows.",
    ],
  },
];

const certificates = [
  {
    title: "FrontEnd Engineering",
    by: "Gokboru Tech",
    img: gokC,
    link: "#",
    code: "GOK-FE-2025",
  },
  {
    title: "Namaste Node.js Deep Dive",
    by: "Akshay Saini",
    img: NodeJsC,
    link: "https://namastedev.com/ujjsmart21/certificates/namaste-node",
    code: "NODE-CORE-V2",
  },
  {
    title: "Cloud Computing Architecture",
    by: "NPTEL",
    img: Nptel,
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S153730301604255991",
    code: "NPTEL-CLOUD-IIT",
  },
  {
    title: "C++ Advanced Specialization",
    by: "Coursera",
    img: Cpp,
    link: "https://www.coursera.org/account/accomplishments/specialization/UB7LC6CREWWA",
    code: "CPP-SYSTEMS-SPEC",
  },
  {
    title: "Learn to Code with AI",
    by: "Coursera",
    img: CodeAi,
    link: "https://www.coursera.org/account/accomplishments/verify/96V4FY5ZJTYM",
    code: "AI-DEV-CERT",
  },
];

export default function Experiance() {
  const scrollTrackRef = useRef(null);

  const scrollLeft = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="experience-section">
      {/* Section Header */}
      <div className="section-heading">
        <span className="section-kicker">
          // SECTION: 02 &bull; JOURNALCTL -U CAREER.SERVICE -F
        </span>
        <h2>SYSTEM EXECUTION HISTORY</h2>
        <p>
          Historical audit log of real-world production engineering, client delivery, cloud infrastructure, and technical credentials.
        </p>
      </div>

      {/* Career Service Daemons Log */}
      <div className="experience-timeline">
        {roles.map((role) => (
          <article key={role.company} className="role-card">
            <div className="role-topline">
              <div className="flex items-center gap-2">
                <span className="text-[#33ff00]">●</span>
                <span className="font-bold text-[#ffb000]">[{role.service}]</span>
                <span className="text-xs text-[#33ff00]">[{role.status}]</span>
              </div>
              <span className="text-xs text-[#a8d5a8] font-mono">
                TIMESTAMP: {role.period}
              </span>
            </div>

            <div className="border-b border-dashed border-[#1f521f] pb-2 mb-3">
              <h3>{role.role}</h3>
              <p className="company-name">{role.company} &bull; <span className="text-[#ffb000]">{role.focus}</span></p>
            </div>

            <ul>
              {role.highlights.map((highlight, idx) => (
                <li key={highlight}>
                  <span className="font-mono text-[#33ff00]">[LOG_0{idx + 1}]</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {role.link && (
              <div className="mt-3 pt-2 border-t border-[#1a3d1a]">
                <a
                  href={role.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#ffb000] hover:text-[#33ff00] inline-flex items-center gap-1 font-mono uppercase"
                >
                  <span>[ VERIFY_INTERNSHIP_CREDENTIAL.PDF ]</span>
                  <FiArrowUpRight />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Verified Certification Digests - Horizontal Scrollable Track */}
      <div className="certificates-shell">
        <div className="certificates-header-bar flex flex-wrap justify-between items-center gap-3 mb-3">
          <h3 className="certificates-subhead m-0">
            <FiShield />
            <span>// VERIFIED TECHNICAL CREDENTIALS &amp; DIGESTS ({certificates.length})</span>
          </h3>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-[#4e804e] hidden sm:inline">[SCROLL_HORIZONTAL &gt;&gt;]</span>
            <button
              type="button"
              className="cert-nav-btn"
              onClick={scrollLeft}
              title="Scroll previous certificate"
            >
              [ &lt; PREV ]
            </button>
            <button
              type="button"
              className="cert-nav-btn"
              onClick={scrollRight}
              title="Scroll next certificate"
            >
              [ NEXT &gt; ]
            </button>
          </div>
        </div>

        {/* Scrollable Track - No blank spaces */}
        <div
          ref={scrollTrackRef}
          className="certificates-scroll-track"
        >
          {certificates.map((cert) => (
            <div key={cert.title} className="cert-card-slide">
              <div className="flex justify-between items-center text-xs text-[#ffb000] font-mono">
                <span>[{cert.code}]</span>
                <span className="text-[#33ff00]">[SHA256:OK]</span>
              </div>

              <div className="cert-preview-img-wrap">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="cert-preview-img"
                  loading="lazy"
                />
              </div>

              <div>
                <strong>{cert.title}</strong>
                <span>ISSUING AUTHORITY: {cert.by}</span>
              </div>

              {cert.link !== "#" ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#33ff00] hover:underline inline-flex items-center gap-1 font-mono uppercase mt-auto"
                >
                  <span>[ VERIFY_DIGEST ]</span>
                  <FiArrowUpRight />
                </a>
              ) : (
                <span className="text-xs text-[#4e804e] font-mono uppercase mt-auto">
                  [ VERIFIED_INTERNAL ]
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
