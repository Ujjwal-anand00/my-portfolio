import React from "react";
import Blog from "../assets/projects/Blog.png";
import Edibles from "../assets/projects/Edibles.png";
import Tomato from "../assets/projects/Tomato.png";
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
    autoplaySpeed: 3000,
    arrows: false,
  };

  const projectList = [
    {
      title: "TypeVoid – A Blog Website",
      img: Blog,
      description:
        "A modern full-stack blog platform built with MERN & TypeScript. Features publishing, editing, search, login/signup, and responsive UI.",
      codeLink: "https://github.com/Ujjwal-anand00/Blog_Web",
      liveLink: "https://typevoid-blog-web.vercel.app/",
      isNew: true,
    },
    {
      title: "Edibles - A Food Delivery Website",
      img: Edibles,
      description:
        "A Frontend web page for a food delivery website built with React. Features responsive UI, search, login/signup, and cart functionality by using Swiggy API.",
      codeLink: "https://github.com/Ujjwal-anand00/Edibles---Food-Delevery-",
      liveLink: "https://edibles.netlify.app",
      isNew: false,
    },
    {
      title: "Tomato - Food Delevery Website",
      img: Tomato,
      description: "This project is a food delevery system.",
      codeLink: "https://github.com/Ujjwal-anand00/tomatoFood",
      liveLink: "https://tomato-ujjwal.netlify.app/",
      isNew: false,
    },
    // You can add more projects here...
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
              <div className="card bg-white shadow-lg rounded-xl overflow-hidden">
                <figure>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-110 w-full object-cover"
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
