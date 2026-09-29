import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiMail,
  FiPhone,
  FiTerminal,
  FiLock,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const contactLinks = [
  { label: "LINKEDIN", icon: FaLinkedin, href: "https://www.linkedin.com/in/ujjwal-anand63/" },
  { label: "GITHUB", icon: FaGithub, href: "https://github.com/Ujjwal-anand00" },
  { label: "LEETCODE", icon: SiLeetcode, href: "https://leetcode.com/u/ujjwal_anand_7170/" },
  { label: "INSTAGRAM", icon: FaInstagram, href: "https://www.instagram.com/_ujjwal.anand_/" },
];

export default function Contact() {
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
      }, 6000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      try {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        setStatus({ loading: false, success: true, error: null });
        form.current.reset();
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 6000);
      } catch (fallbackErr) {
        console.error("EmailJS Fallback Error:", fallbackErr);
        setStatus({
          loading: false,
          success: false,
          error: "TRANSMISSION_FAILED: Packet could not be delivered. Please direct connect via email or phone.",
        });
      }
    }
  };

  return (
    <div className="contact-section">
      {/* Section Terminal Header */}
      <div className="section-heading">
        <span className="section-kicker">
          // SECTION: 05 &bull; SENDMAIL --PROTOCOL TCP/TLS
        </span>
        <h2>TRANSMISSION &amp; COMMUNICATION CONSOLE</h2>
        <p>
          Initiate direct communication, discuss engineering contracts, request architectural reviews, or connect for full-time software engineering roles.
        </p>
      </div>

      <div className="contact-card">
        {/* LEFT: System Communication Endpoints */}
        <div className="contact-copy">
          <div className="text-xs text-[#ffb000] mb-2 font-mono uppercase">
            // STATUS: LISTENING ON PORT 443 (SECURE)
          </div>

          <h2>CONNECT WITH UJJWAL</h2>
          <p>
            I am actively seeking full-time software engineering and systems development roles.
            Transmit a packet using the console or connect directly through verified endpoints.
          </p>

          {/* Direct Contact Endpoint Cards */}
          <div className="direct-contact-details">
            <a href="mailto:ujjwal.anand6376@gmail.com" className="direct-contact-card">
              <div className="contact-icon-bubble">
                <FiMail />
              </div>
              <div className="contact-info-text">
                <span>[ENDPOINT: EMAIL / SMTP]</span>
                <strong>ujjwal.anand6376@gmail.com</strong>
              </div>
            </a>

            <a href="tel:+916376747170" className="direct-contact-card">
              <div className="contact-icon-bubble">
                <FiPhone />
              </div>
              <div className="contact-info-text">
                <span>[ENDPOINT: DIRECT TELEPHONY]</span>
                <strong>+91 6376747170</strong>
              </div>
            </a>
          </div>

          {/* Social Network Terminal Links */}
          <div className="flex flex-wrap gap-2">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-bracket-link flex-1 text-center justify-center"
                >
                  <Icon />
                  <span>[{link.label}]</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Packet Transmission Form */}
        <div className="border border-[#1f521f] bg-[#0a0a0a] p-3 sm:p-5 w-full overflow-hidden">
          <div className="flex items-center justify-between text-xs text-[#ffb000] pb-2 border-b border-[#1f521f] mb-4 uppercase font-mono">
            <span>+--- [PACKET_DISPATCHER] ---+</span>
            <span className="flex items-center gap-1 text-[#33ff00]">
              <FiLock size={12} /> TLS_1.3
            </span>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">
                guest@client:~$ input --sender-name:
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="e.g. Alex Morgan / Lead Architect"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">
                guest@client:~$ input --sender-email:
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="alex@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                guest@client:~$ input --payload-message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter packet message body here..."
                required
              />
            </div>

            {/* Status Feedback */}
            {status.success && (
              <div className="form-feedback success">
                <FiCheckCircle className="shrink-0" />
                <span>[200 OK]: Message transmitted successfully to ujjwal@station.</span>
              </div>
            )}

            {status.error && (
              <div className="form-feedback error">
                <FiAlertCircle className="shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="submit-btn"
            >
              <FiSend className="shrink-0" />
              <span className="whitespace-nowrap">
                {status.loading
                  ? "[ TRANSMITTING_PACKET... ]"
                  : "[ TRANSMIT_PACKET --SECURE ]"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
