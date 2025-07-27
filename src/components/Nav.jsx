import React from "react";


const Nav = ({ homeRef, aboutRef, experianceRef, projectsRef, skillsRef , contactRef }) => {
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar bg-gradient-to-r from-slate-500 to-slate-800 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl font-extrabold ">Ujjwal Anand .</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-light text-xl ">
            <a onClick={() => scrollTo(homeRef)}>Home</a>
          </li>
          <li className="font-light text-xl ">
            <a onClick={() => scrollTo(experianceRef)} >Experience</a>
          </li>
          <li className="font-light text-xl ">
            <a onClick={() => scrollTo(projectsRef)}>Projects</a>
          </li>
          <li className="font-light text-xl ">
            <a onClick={() => scrollTo(skillsRef)}>Skills</a>
          </li>

        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={() => scrollTo(contactRef)} className="btn">CONTACT NOW</a>
      </div>
    </div>
  );
};

export default Nav;
