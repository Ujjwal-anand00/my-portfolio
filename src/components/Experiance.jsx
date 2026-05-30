import React from "react";
import CodeAi from "../assets/certificates/CodeAi.jpg";
import Cpp from "../assets/certificates/C++All.jpg";
import gokC from "../assets/certificates/gokC.jpg";
import NodeJsC from "../assets/certificates/certificate.webp";
import Nptel from "../assets/certificates/Nptel.jpg";
import Zidio from "../assets/certificates/Zidio.jpg";
import { FiArrowUpRight, FiBriefcase, FiCheckCircle } from "react-icons/fi";

const roles = [
  {
    company: "Embtel Solutions Pvt. Ltd.",
    role: "Full Stack Developer Associate",
    period: "Apr 2026 to Present",
    focus: "Production web applications",
    highlights: [
      "Contributing to the development and deployment of modern web applications.",
      "Building responsive frontend interfaces, developing backend APIs, and integrating databases.",
      "Fixing bugs, optimizing performance, deploying projects on cloud platforms, and collaborating on real-world software solutions.",
    ],
  },
  {
    company: "Zidio Development",
    role: "Full Stack Developer Intern",
    period: "May 2025 to July 2025",
    focus: "MERN + TypeScript blog platform",
    certificate: Zidio,
    link: "https://drive.google.com/file/d/1pSpJa0K-qLiz9ixjq4gRqCZ75X6C1yJb/view?usp=sharing",
    highlights: [
      "Led the development of a full-stack blog platform using the MERN stack with TypeScript.",
      "Gained hands-on experience in JavaScript, Node.js, Express.js, MongoDB, and React.",
      "Resolved real-world backend issues, enhancing debugging skills and understanding of scalable web application development.",
    ],
  },
];

const certificates = [
  {
    title: "FrontEnd Certification",
    by: "Gokboru Tech",
    img: gokC,
    link: "#",
  },
  {
    title: "Namaste Node.js",
    by: "Akshay Saini",
    img: NodeJsC,
    link: "https://namastedev.com/ujjsmart21/certificates/namaste-node",
  },
  {
    title: "Cloud Computing",
    by: "NPTEL",
    img: Nptel,
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S153730301604255991",
  },
  {
    title: "C++ Specialization",
    by: "Coursera",
    img: Cpp,
    link: "https://www.coursera.org/account/accomplishments/specialization/UB7LC6CREWWA",
  },
  {
    title: "Learn to Code with AI",
    by: "Coursera",
    img: CodeAi,
    link: "https://www.coursera.org/account/accomplishments/verify/96V4FY5ZJTYM",
  },
];

const Experiance = () => {
  return (
    <div className="section-shell experience-section">
      <div className="section-heading">
        <span>Experience</span>
        <h2>Execution history with real-world delivery.</h2>
        <p>
          My experience combines product implementation, backend problem-solving, deployment exposure, and
          practical certification work across the modern web stack.
        </p>
      </div>

      <div className="experience-layout">
        <div className="experience-timeline">
          {roles.map((role) => (
            <article key={role.company} className="role-card">
              <div className="role-marker">
                <FiBriefcase />
              </div>
              <div className="role-content">
                <div className="role-topline">
                  <span>{role.period}</span>
                  <span>{role.focus}</span>
                </div>
                <h3>{role.role}</h3>
                <p className="company-name">{role.company}</p>
                <ul>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>
                      <FiCheckCircle />
                      {highlight}
                    </li>
                  ))}
                </ul>
                {role.certificate && (
                  <a className="certificate-preview" href={role.link} target="_blank" rel="noopener noreferrer">
                    <img src={role.certificate} alt={`${role.company} certificate`} loading="lazy" />
                    <span>
                      View internship certificate <FiArrowUpRight />
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <aside className="certification-panel">
          <span className="panel-kicker">Verified learning</span>
          <h3>Certificates that sharpen the stack</h3>
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card">
                <img src={cert.img} alt={cert.title} loading="lazy" />
                <div>
                  <strong>{cert.title}</strong>
                  <span>{cert.by}</span>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Experiance;
