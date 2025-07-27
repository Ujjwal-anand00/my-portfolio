import React, { useRef } from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Experiance from "./Experiance";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Body = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experianceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800">
      <Nav
        homeRef={homeRef}
        aboutRef={aboutRef}
        experianceRef={experianceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <section ref={homeRef} id="home">
        <Home />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={experianceRef} id="experiance">
        <Experiance />
      </section>

      <section ref={projectsRef} id="projects">
        <Projects />
      </section>

      <section ref={skillsRef} id="skills">
        <Skills />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
