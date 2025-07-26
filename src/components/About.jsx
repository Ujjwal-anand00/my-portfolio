import React from "react";
import ujjuImg from "../assets/ujju.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-between items-center mx-auto  max-w-6xl">
      <div className="flex flex-col gap-10">
        <p className="text-4xl font-bold text-center lg:text-left">
          Hey! I am Ujjwal Anand
        </p>

        <p className="text-xl font-light">
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

        <div>
          <p className="font-bold text-2xl">Education</p>
          <p className="font-light text-xl">
            Bachelor of Technology in Computer Science and Engineering
          </p>
          <p className="font-medium text-xl">Lovely Professional University</p>
        </div>
        <div className="flex gap-6 justify-center py-4 text-3xl">
          <a
            href="https://www.linkedin.com/in/ujjwal-anand63/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/Ujjwal-anand00"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-black" />
          </a>
          <a
            href="https://www.instagram.com/_ujjwal.anand_/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:text-pink-500" />
          </a>
          <a
            href="https://leetcode.com/u/ujjwal_anand_7170/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode className="hover:text-yellow-500" />
          </a>
        </div>
      </div>

      <div className="w-80 shadow-lg">
        <img
          src={ujjuImg}
          alt="Ujjwal Anand"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
