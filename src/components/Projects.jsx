import React, { useEffect, useRef, useState } from "react";
import Blog from "../assets/projects/Blog.png";
import Edibles from "../assets/projects/Edibles.png";
import GitHookUP from "../assets/projects/GitHookUP.png";
import Gyano from "../assets/projects/Gyano.png";
import UMDB from "../assets/projects/Movie.png";
import Tomato from "../assets/projects/Tomato.png";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub, FiLayers, FiZap } from "react-icons/fi";
import "./ShowcaseUpgrades.css";

const projectList = [
  {
    title: "Gyano - A Digital Learning Platform",
    img: Gyano,
    description:
      "Gyano is a full-stack digital learning platform designed to deliver a seamless and personalized education experience. It features secure authentication, course exploration, enrollment systems, and an interactive lesson player with offline video access using IndexedDB. Built with a scalable MERN architecture, the platform includes user dashboards, admin controls, and is evolving with AI-driven insights and a mobile app for enhanced accessibility.",
    codeLink: "https://github.com/Ujjwal-anand00/Gyano",
    liveLink: "https://gyano.vercel.app/",
    isNew: true,
    category: "EdTech Platform",
    stack: ["MERN", "IndexedDB", "Authentication", "Dashboard"],
    architecture: ["Secure auth", "Course enrollment", "Offline video access", "Admin controls"],
    metrics: ["MERN", "IndexedDB", "AI-ready"],
  },
  {
    title: "ChillPlex - A Movie Database Android App",
    img: UMDB,
    description:
      "ChillPlex is a React Native-based mobile application that allows users to explore and view detailed movie information using the TMDB API. It provides real-time movie data including descriptions, ratings, and posters through a clean and responsive interface. The app focuses on seamless navigation and efficient API integration to deliver a smooth movie discovery experience.",
    codeLink: "https://github.com/Ujjwal-anand00/ChillPlex",
    liveLink: "",
    isNew: false,
    category: "Mobile App",
    stack: ["React Native", "TMDB API", "Mobile UI"],
    architecture: ["TMDB API", "Poster rendering", "Mobile navigation"],
    metrics: ["API-first", "Mobile", "Realtime data"],
  },
  {
    title: "GitHookUp - A Developer Match Making Website",
    img: GitHookUP,
    description:
      "GitHookUP is a full-stack MERN application that connects developers in real time through chat and video calling features. It leverages WebSockets (Socket.IO) for instant communication, along with secure authentication using JWT and bcrypt. Designed for scalability and performance, the platform is deployed on AWS EC2 with Nginx and PM2, enabling developers to collaborate, network, and interact seamlessly.",
    codeLink: "https://github.com/Ujjwal-anand00/GitHookUP-WEB",
    liveLink: "http://51.21.152.151/",
    isNew: false,
    category: "Developer Network",
    stack: ["MERN", "Socket.IO", "JWT", "AWS EC2", "Nginx", "PM2"],
    architecture: ["Socket.IO realtime", "JWT + bcrypt", "AWS EC2", "Nginx + PM2"],
    metrics: ["Realtime", "Cloud deployed", "Auth secure"],
  },
  {
    title: "Excel Analytics Platform",
    img: null,
    description:
      "Excel Analytics Platform is a data-focused analytics project for turning spreadsheet workflows into clearer visual insights. It highlights practical data handling, analytical thinking, dashboard-style presentation, and a product mindset around making raw Excel data easier to understand and act on.",
    codeLink: "",
    liveLink: "",
    isNew: false,
    category: "Data Analytics Platform",
    stack: ["Excel Analytics", "Data Visualization", "Dashboard UI"],
    architecture: ["Spreadsheet workflows", "Insight dashboards", "Visual analytics", "Readable reporting"],
    metrics: ["Analytics", "Dashboard", "Data product"],
  },
  {
    title: "NeighborFit",
    img: null,
    description:
      "NeighborFit is a product-oriented project focused on matching people with neighborhoods through practical decision signals. It brings together user needs, structured comparison, and experience design to help users evaluate fit through a clearer digital workflow.",
    codeLink: "",
    liveLink: "",
    isNew: false,
    category: "Matching Experience",
    stack: ["Product Thinking", "User Matching", "Decision UI"],
    architecture: ["Fit scoring", "Structured comparison", "User-first workflow", "Experience design"],
    metrics: ["Matching", "UX logic", "Product system"],
  },
  {
    title: "TypeVoid - A Blog Website",
    img: Blog,
    description:
      "TypeVoid is a full-stack blog application built using the MERN stack with TypeScript, enabling users to create, edit, search, and manage blog posts seamlessly. It features secure user authentication, dynamic content rendering, and an intuitive UI for a smooth writing and reading experience. Designed for performance and scalability, TypeVoid demonstrates robust backend handling and efficient state management.",
    codeLink: "https://github.com/Ujjwal-anand00/Blog_Web",
    liveLink: "https://typevoid-blog-web.vercel.app/",
    isNew: false,
    category: "Internship Project / Publishing Platform",
    stack: ["MERN", "TypeScript", "Authentication", "Search"],
    architecture: ["Typed MERN stack", "Blog CRUD", "Search", "Dynamic rendering"],
    metrics: ["TypeScript", "Auth", "Internship-grade"],
  },
  {
    title: "Edibles - A Food Delivery Website",
    img: Edibles,
    description:
      "Edibles is a frontend food delivery web application inspired by Swiggy, built during my React learning journey. It integrates the Swiggy API for fetching restaurant and menu data and showcases dynamic UI rendering, component-based architecture, and responsive design. While it is not fully functional, the project demonstrates strong fundamentals in React, API handling, and modern UI development.",
    codeLink: "https://github.com/Ujjwal-anand00/Edibles---Food-Delevery-",
    liveLink: "https://regal-blini-ac5fd7.netlify.app/",
    isNew: false,
    category: "Food Delivery UI",
    stack: ["React", "Swiggy API", "Responsive UI"],
    architecture: ["Swiggy API", "Restaurant data", "Component UI"],
    metrics: ["Frontend", "API handling", "Learning build"],
  },
  {
    title: "Tomato - Food Delevery Website",
    img: Tomato,
    description:
      "A Swiggy-inspired food delivery application built using React.js with a clean, responsive UI, real-time restaurant listings, menu browsing, and a smooth user experience - developed as part of my React learning journey.",
    codeLink: "https://github.com/Ujjwal-anand00/tomatoFood",
    liveLink: "https://tomato-ujjwal.netlify.app/",
    isNew: false,
    category: "Food Delivery UI",
    stack: ["React", "Restaurant Listings", "Menu UI"],
    architecture: ["Restaurant listings", "Menu browsing", "Responsive UI"],
    metrics: ["React", "Food UI", "Learning build"],
  }
];

const Projects = () => {
  const trackRef = useRef(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0, pointerId: null });
  const [scrollState, setScrollState] = useState({ start: true, end: false });
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Reset expansion when switching to desktop
      if (window.innerWidth >= 768) {
        setExpandedIndex(null);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track || isMobile) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setScrollState({
      start: track.scrollLeft <= 8,
      end: track.scrollLeft >= maxScroll - 8,
    });
  };

  const scrollProjects = (direction) => {
    const track = trackRef.current;
    if (!track || isMobile) return;

    const firstCard = track.querySelector(".project-card");
    const scrollAmount = firstCard ? firstCard.getBoundingClientRect().width + 24 : track.clientWidth * 0.85;
    track.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  const handlePointerDown = (event) => {
    if (isMobile) return;
    const track = trackRef.current;
    if (!track) return;

    dragState.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      pointerId: event.pointerId,
    };
    track.classList.add("is-dragging");
    track.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (isMobile) return;
    const track = trackRef.current;
    const state = dragState.current;
    if (!track || !state.active) return;

    event.preventDefault();
    track.scrollLeft = state.scrollLeft - (event.clientX - state.startX);
  };

  const stopDragging = () => {
    if (isMobile) return;
    const track = trackRef.current;
    const state = dragState.current;
    if (!track || !state.active) return;

    track.classList.remove("is-dragging");
    if (state.pointerId !== null) {
      track.releasePointerCapture?.(state.pointerId);
    }
    dragState.current = { active: false, startX: 0, scrollLeft: 0, pointerId: null };
  };

  const handleCardTap = (index) => {
    if (!isMobile) return;
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    updateScrollState();
    const track = trackRef.current;
    if (!track) return undefined;

    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [isMobile]);

  return (
    <motion.div
      className="section-shell projects-section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading projects-showcase-heading">
        <span>Selected Work</span>
        <h2>Building Products, Systems & Experiences</h2>
        <p>
          A collection of projects where engineering, problem-solving, and product thinking come together to
          create meaningful digital experiences.
        </p>
      </div>

      <div className="project-showcase-shell">
        {!isMobile && (
          <>
            <button
              className="showcase-nav showcase-nav-prev"
              type="button"
              onClick={() => scrollProjects(-1)}
              disabled={scrollState.start}
              aria-label="Previous project"
            >
              <FiArrowLeft />
            </button>
            <button
              className="showcase-nav showcase-nav-next"
              type="button"
              onClick={() => scrollProjects(1)}
              disabled={scrollState.end}
              aria-label="Next project"
            >
              <FiArrowRight />
            </button>
          </>
        )}

        <div
          className="featured-grid project-showcase-track"
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
        >
        {projectList.map((project, index) => {
          const isExpanded = !isMobile || expandedIndex === index;
          
          return (
          <motion.article
            key={project.title}
            className={`project-card ${index < 2 ? "featured" : ""} ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: isMobile ? 0 : Math.min(index * 0.06, 0.28), ease: [0.22, 1, 0.36, 1] }}
            onClick={() => handleCardTap(index)}
            style={{ cursor: isMobile ? 'pointer' : 'default' }}
          >
            <div className="project-media">
              {project.img ? (
                <img src={project.img} alt={`${project.title} preview`} loading="lazy" />
              ) : (
                <div className="generated-preview project-os-preview">
                  <FiLayers />
                  <span>{project.title}</span>
                </div>
              )}
              <div className="project-overlay">
                <FiZap />
                <span>{project.category}</span>
              </div>
            </div>

            <div className="project-content">
              <motion.div
                initial={false}
                animate={{ 
                  height: isExpanded ? "auto" : 0, 
                  opacity: isExpanded ? 1 : 0,
                  marginBottom: isExpanded ? 12 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    {project.category}
                    {project.isNew ? " / New" : ""}
                  </span>
                </div>
              </motion.div>
              
              <h3>{project.title}</h3>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: isExpanded ? "auto" : 0, 
                  opacity: isExpanded ? 1 : 0,
                  marginTop: isExpanded ? 12 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="project-problem">
                  <strong>Problem solved</strong>
                  <span>{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-system-strip" aria-label={`${project.title} engineering metrics`}>
                  {project.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
                <div className="architecture-list">
                  <strong>Architecture highlights</strong>
                  <div>
                    {project.architecture.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="stack-row">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.codeLink ? (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <FiGithub /> GitHub
                    </a>
                  ) : (
                    <span className="project-empty-state">
                      <FiGithub /> Code link not added
                    </span>
                  )}
                  {project.liveLink ? (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      Live Demo <FiArrowUpRight />
                    </a>
                  ) : (
                    <span className="project-empty-state">
                      <FiLayers /> Live demo not added
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.article>
          );
        })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
