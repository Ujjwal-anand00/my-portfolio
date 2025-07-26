import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Experiance from "./Experiance";

const Body = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800">
        <Nav/>
        <Home/>
        <About/>
        <Experiance/>
    </div>
  );
};

export default Body;
