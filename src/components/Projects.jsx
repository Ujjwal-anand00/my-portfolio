import React from "react";
import UMDB from "../assets/projects/Movie.png";
import Blog from "../assets/projects/Blog.png";
import Edibles from "../assets/projects/Edibles.png";
import Tomato from "../assets/projects/Tomato.png";
import GitHookUP from "../assets/projects/GitHookUP.png";
import Gyano from "../assets/projects/Gyano.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const projectList = [
    {
      title: "Gyano - A Digital Learning Platform",
      img: Gyano,
      description:
        "Gyano is a full-stack digital learning platform designed to deliver a seamless and personalized education experience. It features secure authentication, course exploration, enrollment systems, and an interactive lesson player with offline video access using IndexedDB. Built with a scalable MERN architecture, the platform includes user dashboards, admin controls, and is evolving with AI-driven insights and a mobile app for enhanced accessibility.",
      codeLink: "https://github.com/Ujjwal-anand00/Gyano",
      liveLink: "https://gyano.vercel.app/",
      isNew: true,
    },
    {
      title: "ChillPlex – A Movie Database Android App",
      img: UMDB,
      description:
        "ChillPlex is a React Native-based mobile application that allows users to explore and view detailed movie information using the TMDB API. It provides real-time movie data including descriptions, ratings, and posters through a clean and responsive interface. The app focuses on seamless navigation and efficient API integration to deliver a smooth movie discovery experience.",
      codeLink: "https://github.com/Ujjwal-anand00/ChillPlex",
      liveLink: "",
      isNew: false,
    },
    {
      title: "GitHookUp – A Developer Match Making Website",
      img: GitHookUP,
      description:
        "GitHookUP is a full-stack MERN application that connects developers in real time through chat and video calling features. It leverages WebSockets (Socket.IO) for instant communication, along with secure authentication using JWT and bcrypt. Designed for scalability and performance, the platform is deployed on AWS EC2 with Nginx and PM2, enabling developers to collaborate, network, and interact seamlessly.",
      codeLink: "https://github.com/Ujjwal-anand00/GitHookUP-WEB",
      liveLink: "http://51.21.152.151/",
      isNew: false,
    },
    {
      title: "TypeVoid – A Blog Website",
      img: Blog,
      description:
        "TypeVoid is a full-stack blog application built using the MERN stack with TypeScript, enabling users to create, edit, search, and manage blog posts seamlessly. It features secure user authentication, dynamic content rendering, and an intuitive UI for a smooth writing and reading experience. Designed for performance and scalability, TypeVoid demonstrates robust backend handling and efficient state management.",
      codeLink: "https://github.com/Ujjwal-anand00/Blog_Web",
      liveLink: "https://typevoid-blog-web.vercel.app/",
      isNew: false,
    },
    {
      title: "Edibles - A Food Delivery Website",
      img: Edibles,
      description:
        "Edibles is a frontend food delivery web application inspired by Swiggy, built during my React learning journey. It integrates the Swiggy API for fetching restaurant and menu data and showcases dynamic UI rendering, component-based architecture, and responsive design. While it is not fully functional, the project demonstrates strong fundamentals in React, API handling, and modern UI development.",
      codeLink: "https://github.com/Ujjwal-anand00/Edibles---Food-Delevery-",
      liveLink: "https://regal-blini-ac5fd7.netlify.app/",
      isNew: false,
    },
    {
      title: "Tomato - Food Delevery Website",
      img: Tomato,
      description:
        "A Swiggy-inspired food delivery application built using React.js with a clean, responsive UI, real-time restaurant listings, menu browsing, and a smooth user experience — developed as part of my React learning journey.",
      codeLink: "https://github.com/Ujjwal-anand00/tomatoFood",
      liveLink: "https://tomato-ujjwal.netlify.app/",
      isNew: false,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 py-20 rounded-xl shadow-inner">
      <div className="px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-400 mb-12">
          Projects
        </h1>

        <Slider {...sliderSettings}>
          {projectList.map((project, index) => (
            <div key={index} className="px-6">
              <div className="card bg-gray-300 shadow-lg  rounded-xl overflow-hidden h-[500px] lg:h-[600px]">
                <figure>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[150px] sm:h-[200px] lg:h-[450px] object-cover"
                  />
                </figure>
                <div className="card-body px-6 py-4">
                  <h2 className="card-title text-2xl font-semibold text-gray-800 mb-2">
                    {project.title}
                    {project.isNew && (
                      <span className="badge badge-secondary ml-2">NEW</span>
                    )}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="card-actions justify-end gap-3">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Code ⩥
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
