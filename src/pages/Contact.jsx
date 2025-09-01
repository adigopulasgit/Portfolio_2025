
// src/components/Contact.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaUserCircle } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section container" id="contact">
      <h2 className="contact-title">Contact</h2>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <textarea placeholder="Message" name="message" rows="6" required></textarea>
        <button type="submit" className="contact-btn">Let's Collaborate</button>
      </form>

      {/* Social Icons */}
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/guru-ganesh-adigopula-083805211/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/adigopulasgit" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:adigopulaguruganesh02@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://docs.google.com/document/d/1aYxIAS7MB4wGc7TeJ-yKFpHaym2Q0Q7V/edit?tab=t.0" target="_blank" rel="noreferrer">
          <FaUserCircle />
        </a>
      </div>
    </section>
  );
}
