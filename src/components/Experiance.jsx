import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NodeJsC from "../assets/certificates/certificate.webp";
import gokC from "../assets/certificates/gokC.jpg";
import Cpp from "../assets/certificates/C++All.jpg";
import Nptel from "../assets/certificates/Nptel.jpg";
import CodeAi from "../assets/certificates/CodeAi.jpg";
import React from "react";
import Slider from "react-slick";

const Experiance = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const certificates = [
    {
      title: "Node Js Certification",
      by: "Akshay Saini, NamasteNode",
      img: NodeJsC,
      link: "https://namastedev.com/ujjsmart21/certificates/namaste-node",
    },
    {
      title: "FrontEnd Certification",
      by: "Gokboru Tech",
      img: gokC,
      link: "#",
    },
    {
      title: "C++ Certification",
      by: "Coursera",
      img: Cpp,
      link: "https://www.coursera.org/account/accomplishments/specialization/UB7LC6CREWWA",
    },
    {
      title: "Cloud Computing Certification",
      by: "Nptel",
      img: Nptel,
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S153730301604255991",
    },
    {
      title: "Learn to code with AI",
      by: "Coursera",
      img: CodeAi,
      link: "https://www.coursera.org/account/accomplishments/verify/96V4FY5ZJTYM",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 py-20  rounded-2xl shadow-lg">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-400 text-center mb-4">
          Certification & Internship
        </h1>

        <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-xl shadow-md border-l-4 border-yellow-400">
          <p className="text-3xl font-bold text-gray-200 mb-2">
            Intern at Zidio Development
          </p>
          <p className="text-xl text-blue-50 mb-4">May 2025 to July 2025</p>

          <p className="text-2xl font-semibold text-blue-50 mb-3">
            Responsibilities: Full Stack Development
          </p>

          <p className="text-lg text-blue-100 leading-relaxed font-sans">
            During my internship at Zidio Development, I led the development of
            a full-stack blog platform using the MERN stack with TypeScript. I
            gained hands-on experience in JavaScript, Node.js, Express.js,
            MongoDB, and React. I also resolved real-world backend issues,
            enhancing my debugging skills and deepening my understanding of
            scalable web application development.
          </p>
        </div>
        {/* 🔄 Slider Component */}
        <Slider {...sliderSettings}>
          {certificates.map((cert, idx) => (
            <div key={idx} className="px-4">
              <div className="card bg-gradient-to-r from-slate-900 to-slate-700 w-full shadow-xl border rounded-xl">
                <figure>
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="h-56 w-full object-cover rounded-t-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{cert.title}</h2>
                  <p>{cert.by}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Link
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

export default Experiance;
