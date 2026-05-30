import React from "react";
import { Typewriter } from "react-simple-typewriter";
import download from "../assets/download.png";
import ujjuImg from "../assets/ujju.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiAward, FiBookOpen, FiCode, FiTarget } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "8+", label: "Core technologies" },
  { value: "2", label: "Industry roles" },
  { value: "5+", label: "Certifications" },
];

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ujjwal-anand63/" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Ujjwal-anand00" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/_ujjwal.anand_/" },
  { icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com/u/ujjwal_anand_7170/" },
];

const timeline = [
  {
    icon: FiCode,
    title: "Hey! I am Ujjwal Anand",
    detail: "A Full Stack Web Developer, Software Developer, Cyber Security Specialist, and passionate learner driven by curiosity.",
  },
  {
    icon: FiBookOpen,
    title: "Education",
    detail: "Bachelor of Technology in Computer Science and Engineering, Lovely Professional University.",
  },
  {
    icon: FiTarget,
    title: "Growth mindset",
    detail: "Constant desire to grow and innovate through creative problem-solving and clean, scalable code.",
  },
  {
    icon: FiAward,
    title: "Technical identity",
    detail: "A cybersecurity-aware developer focused on meaningful digital experiences and user-driven solutions.",
  },
];

const About = () => {
  return (
    <div className="section-shell about-section">
      <div className="section-heading">
        <span>About</span>
        <h2>Hey! I am Ujjwal Anand</h2>
        <p>
          <Typewriter
            words={[
              "A Full Stack Web Developer.",
              "A Software Developer.",
              "A Cyber Security Specialist.",
              "A passionate learner driven by curiosity.",
              "Constant desire to grow and innovate.",
            ]}
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            cursor
            cursorStyle="|"
          />
        </p>
      </div>

      <div className="about-grid">
        <article className="profile-card">
          <div className="profile-image-wrap">
            <img src={ujjuImg} alt="Ujjwal Anand" loading="lazy" />
          </div>
          <div className="profile-content">
            <span className="status-pill">Open to opportunities</span>
            <h3>Full Stack Developer</h3>
            <p>
              Bachelor of Technology in Computer Science and Engineering at Lovely Professional University.
            </p>
            <a
              href="https://drive.google.com/file/d/1MU3Lc0Uk7x90saiTdzS78Vacdx5iFWev/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Download Resume <img src={download} alt="" />
            </a>
            <div className="social-row">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </article>

        <div className="about-bento">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="timeline-card">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="timeline-item">
                  <div className="timeline-icon">
                    <Icon />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
