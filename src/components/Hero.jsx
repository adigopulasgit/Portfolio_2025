import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero container" role="region" aria-label="Intro">
      <div className="hero-left">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Guru Ganesh Adigopula - Data Science Intern
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
        >
          A dedicated Computer Science graduate with hands-on experience in
          software development, web technologies, and machine learning. Skilled
          in Python, Java, and modern frameworks like React.js. Proven ability
          to design and deploy full-stack applications, optimize databases, and
          implement machine learning models. Adept at collaborating in
          fast-paced environments, solving complex problems, and delivering
          high-quality solutions on time.
        </motion.p>

        <div className="hero-ctas">
          <a className="btn-primary" href="/work">
            See case studies
          </a>
          <a
            className="btn-link"
            href="https://docs.google.com/document/d/1YiQPO4FqGniNc0Vr0_qsyiVJN7TgPtBYcf4YJsFcC54/edit?tab=t.0"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="kicker" style={{ marginTop: 18 }}></div>
      </div>

      <div className="hero-right">
        <motion.div
          className="hero-visual"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Full Hero Image */}
          <img
            src="/profile-2025.jpeg"
            alt="Guru Ganesh"
            className="hero-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
