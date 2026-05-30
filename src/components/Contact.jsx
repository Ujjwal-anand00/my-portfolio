import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const contactLinks = [
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/ujjwal-anand63/" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/Ujjwal-anand00" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/_ujjwal.anand_/" },
  { label: "LeetCode", icon: SiLeetcode, href: "https://leetcode.com/u/ujjwal_anand_7170/" },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4znr5r5",
      "template_968a2wh",
      form.current,
      "NqG7h7YmJg60ZBXeh"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.error(error);
        alert("Failed to send message");
      }
    );
};

  return (
    <div className="section-shell contact-section">
      <div className="contact-card">
        <div className="contact-copy">
          <span className="section-kicker">Contact Now</span>
          <h2>Let us build something amazing together.</h2>
          <div>
            <p>
              I'm always open to new opportunities, collaborations, or simply a meaningful conversation.
              Whether you have a project in mind, a question, or just want to say hello - feel free to
              reach out. Let's build something amazing together!
            </p>
            <p>
              Let's connect! Whether you're an aspiring collaborator with a vision or a recruiter looking
              to chat, your message is the first step towards a meaningful conversation. I'm eager to hear
              from you!
            </p>
          </div>

          

          <div className="contact-socials">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <Icon />
                  {link.label}
                  <FiArrowUpRight />
                </a>
              );
            })}
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} action="#" className="contact-form">
          <label htmlFor="name">
            Name
            <input id="name" type="text" name="name" placeholder="Enter your name..." required />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" type="email" name="email" placeholder="Enter your Email..." required />
          </label>
          <label htmlFor="message">
            Your message
            <textarea id="message" name="message" rows="6" placeholder="Leave a comment..." required />
          </label>
          <button className="primary-button" type="submit">
            Send Message <FiSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
