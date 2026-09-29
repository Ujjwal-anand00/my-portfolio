import React, { useState } from "react";
import Blog from "../assets/projects/Blog.png";
import Edibles from "../assets/projects/Edibles.png";
import GitHookUP from "../assets/projects/GitHookUP.png";
import Gyano from "../assets/projects/Gyano.png";
import UMDB from "../assets/projects/Movie.png";
import Tomato from "../assets/projects/Tomato.png";
import {
  FiArrowUpRight,
  FiGithub,
  FiTerminal,
  FiLayers,
  FiExternalLink,
  FiCode,
} from "react-icons/fi";
import "./ShowcaseUpgrades.css";

const projectList = [
  {
    id: "gyano",
    title: "Gyano - Digital Learning Platform",
    pkg: "gyano-edtech.pkg",
    img: Gyano,
    description:
      "A full-stack digital learning platform featuring secure authentication, course catalog & enrollments, and an interactive lesson player with offline video caching powered by IndexedDB. Engineered with scalable MERN architecture.",
    codeLink: "https://github.com/Ujjwal-anand00/Gyano",
    liveLink: "https://gyano.vercel.app/",
    category: "Full Stack",
    stack: ["MERN", "IndexedDB", "JWT_AUTH", "Vercel"],
    flag: "--prod",
  },
  {
    id: "githookup",
    title: "GitHookUP - Realtime Developer Network",
    pkg: "githookup-socket.pkg",
    img: GitHookUP,
    description:
      "Full-stack MERN application connecting developers in real time through WebSocket chat and video streaming. Deployed on AWS EC2 with Nginx reverse proxy and PM2 process daemon for production stability.",
    codeLink: "https://github.com/Ujjwal-anand00/GitHookUP-WEB",
    liveLink: "http://51.21.152.151/",
    category: "Real-Time",
    stack: ["MERN", "Socket.IO", "AWS_EC2", "Nginx", "PM2"],
    flag: "--cloud",
  },
  {
    id: "chillplex",
    title: "ChillPlex - Movie Database Mobile App",
    pkg: "chillplex-mobile.apk",
    img: UMDB,
    description:
      "React Native mobile application enabling smooth movie exploration and streaming discovery through TMDB API integration. Built with clean responsive navigation and optimized poster rendering.",
    codeLink: "https://github.com/Ujjwal-anand00/ChillPlex",
    liveLink: "",
    category: "Mobile App",
    stack: ["React_Native", "TMDB_API", "Mobile_OS"],
    flag: "--mobile",
  },
  {
    id: "tomato",
    title: "Tomato - Food Delivery Architecture",
    pkg: "tomato-delivery.pkg",
    img: Tomato,
    description:
      "Full-featured food delivery application with menu filtering, cart synchronization, Stripe payment processing flow, and multi-tier role dashboard for vendors and customers.",
    codeLink: "https://github.com/Ujjwal-anand00/Tomato",
    liveLink: "https://tomato-ujju.vercel.app/",
    category: "Full Stack",
    stack: ["React", "Express", "Node.js", "MongoDB", "Stripe"],
    flag: "--ecommerce",
  },
  {
    id: "edibles",
    title: "Edibles - Confectionery Platform",
    pkg: "edibles-store.pkg",
    img: Edibles,
    description:
      "Production-ready confectionery and cake ordering portal with inventory tracking, customized order configuration, and secure checkout pipeline.",
    codeLink: "https://github.com/Ujjwal-anand00/Edibles",
    liveLink: "https://edibles-ujju.vercel.app/",
    category: "Full Stack",
    stack: ["MERN_Stack", "REST_API", "Responsive_UI"],
    flag: "--store",
  },
  {
    id: "techblog",
    title: "TechBlog - MERN Developer Publishing",
    pkg: "techblog-engine.pkg",
    img: Blog,
    description:
      "Robust developer blogging platform with markdown parsing, syntax highlighting, tag taxonomies, and authenticated discussion threads.",
    codeLink: "https://github.com/Ujjwal-anand00/TechBlog",
    liveLink: "https://tech-blog-web.vercel.app/",
    category: "Full Stack",
    stack: ["React", "Node.js", "MongoDB", "Markdown"],
    flag: "--content",
  },
];

const categories = ["--all", "--fullstack", "--realtime", "--mobile"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("--all");

  const filteredProjects = projectList.filter((proj) => {
    if (activeFilter === "--all") return true;
    if (activeFilter === "--fullstack") return proj.category === "Full Stack";
    if (activeFilter === "--realtime") return proj.category === "Real-Time";
    if (activeFilter === "--mobile") return proj.category === "Mobile App";
    return true;
  });

  return (
    <div className="projects-section">
      {/* Section Terminal Header */}
      <div className="section-heading">
        <span className="section-kicker">
          // SECTION: 03 &bull; LS -LA ~/DEPLOYMENTS
        </span>
        <h2>DEPLOYED SYSTEMS &amp; SHIPMENTS</h2>
        <p>
          Production software systems, distributed real-time applications, and mobile products engineered for resilience and user value.
        </p>
      </div>

      {/* Terminal Command Flags Filter Bar */}
      <div className="projects-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            [ {cat} ]
          </button>
        ))}
      </div>

      {/* Terminal Projects Grid */}
      <div className="projects-terminal-grid">
        {filteredProjects.map((proj) => (
          <article key={proj.id} className="project-card">
            {/* Terminal Window Header Bar */}
            <div className="project-card-header">
              <span className="font-mono text-[#ffb000]">+-- [{proj.pkg}]</span>
              <span className="text-xs text-[#33ff00]">[{proj.flag}]</span>
            </div>

            {/* Project Image Viewport */}
            <div className="project-card-image">
              <img src={proj.img} alt={proj.title} loading="lazy" />
            </div>

            {/* Project Metadata & Body */}
            <div className="project-card-body">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              {/* Stack Badges */}
              <div className="project-tech-tags">
                {proj.stack.map((item) => (
                  <span key={item} className="tech-tag">
                    [{item}]
                  </span>
                ))}
              </div>

              {/* Terminal CLI Actions */}
              <div className="project-card-actions">
                {proj.liveLink ? (
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link"
                  >
                    <span>[ $ CURL LIVE ]</span>
                    <FiArrowUpRight />
                  </a>
                ) : (
                  <span className="project-action-link opacity-40 cursor-not-allowed">
                    [ $ OFFLINE_MOBILE ]
                  </span>
                )}

                <a
                  href={proj.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-link"
                >
                  <FiGithub />
                  <span>[ $ GIT CLONE ]</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
