import React from "react";

const Nav = () => {
  return (
    <div className="navbar bg-gradient-to-r from-slate-500 to-slate-800 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl font-extrabold ">Ujjwal Anand .</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold text-xl ">
            <a>Home</a>
          </li>
          <li className="font-bold text-xl ">
            <a>Experience</a>
          </li>
          <li className="font-bold text-xl ">
            <a>Projects</a>
          </li>
          <li className="font-bold text-xl ">
            <a>Certificates</a>
          </li>
          <li className="font-bold text-xl ">
            <a>Skills</a>
          </li>

        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">CONTACT NOW</a>
      </div>
    </div>
  );
};

export default Nav;
