import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l7h0e1r", // Replace with your actual Service ID
        "template_sodtvov", // Replace with your actual Template ID
        form.current,
        "3m3YWa10c4hfTjQlC" // Replace with your actual Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div>
      <section className="bg-gradient-to-r from-slate-500 to-slate-800">
        <div className="py-16 px-4 mx-auto max-w-6xl">
          <h2 className="mb-6 text-5xl tracking-tight font-extrabold text-center text-white">
            Contact Now
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 justify-between items-center mt-10">
            {/* Message Paragraph */}
            <div className="flex gap-20 flex-col">
              <p className="font-light text-gray-100 text-xl text-center lg:text-left max-w-2xl leading-relaxed">
                I'm always open to new opportunities, collaborations, or simply
                a meaningful conversation. Whether you have a project in mind, a
                question, or just want to say hello — feel free to reach out.
                Let's build something amazing together!
              </p>
              <p className="font-light text-gray-100 text-xl text-center lg:text-left max-w-2xl leading-relaxed">
                Let's connect! Whether you're an aspiring collaborator with a
                vision or a recruiter looking to chat, your message is the first
                step towards a meaningful conversation. I'm eager to hear from
                you!
              </p>
              <div className="flex gap-10 text-3xl">
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

            {/* Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              action="#"
              className="w-full max-w-lg bg-slate-700 p-8 rounded-xl shadow-xl"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name..."
                  className="w-full p-3 rounded-lg border border-gray-400 bg-slate-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="w-full p-3 rounded-lg border border-gray-400 bg-slate-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Leave a comment..."
                  className="w-full p-3 rounded-lg border border-gray-400 bg-slate-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-400 hover:to-green-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
