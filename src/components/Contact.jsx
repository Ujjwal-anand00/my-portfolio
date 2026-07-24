import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiSend, FiCheckCircle, FiAlertCircle, FiMail, FiPhone } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const contactLinks = [
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/ujjwal-anand63/" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/Ujjwal-anand00" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/_ujjwal.anand_/" },
  { label: "LeetCode", icon: SiLeetcode, href: "https://leetcode.com/u/ujjwal_anand_7170/" },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus({ loading: true, success: false, error: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_4znr5r5";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_968a2wh";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "NqG7h7YmJg60ZBXeh";

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      });

      setStatus({ loading: false, success: true, error: null });
      form.current.reset();
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      try {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        setStatus({ loading: false, success: true, error: null });
        form.current.reset();
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      } catch (fallbackErr) {
        console.error("EmailJS Fallback Error:", fallbackErr);
        setStatus({
          loading: false,
          success: false,
          error: "Failed to send message. Please try again or reach out directly.",
        });
      }
    }
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
          </div>

          {/* Direct Email & Phone Info Badges */}
          <div className="direct-contact-details">
            <a href="mailto:ujjwal.anand6376@gmail.com" className="direct-contact-card">
              <div className="contact-icon-bubble">
                <FiMail />
              </div>
              <div className="contact-info-text">
                <span>Email</span>
                <strong>ujjwal.anand6376@gmail.com</strong>
              </div>
            </a>

            <a href="tel:+916376747170" className="direct-contact-card">
              <div className="contact-icon-bubble">
                <FiPhone />
              </div>
              <div className="contact-info-text">
                <span>Phone / WhatsApp</span>
                <strong>+91 6376747170</strong>
              </div>
            </a>
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

          {status.success && (
            <div className="form-status-msg success">
              <FiCheckCircle /> Message sent successfully! Thank you for reaching out.
            </div>
          )}

          {status.error && (
            <div className="form-status-msg error">
              <FiAlertCircle /> {status.error}
            </div>
          )}

          <button className="primary-button" type="submit" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"} <FiSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
