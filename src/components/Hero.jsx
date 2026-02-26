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
          A dedicated Computer Science graduate with hands-on experience in data engineering, scalable ETL pipelines, 
          and machine learning systems. Skilled in Python, SQL, and data modeling, with experience building high-volume 
          data ingestion workflows and optimizing PostgreSQL databases. Proven ability to design and deploy 
          production-ready ML applications, implement performance tuning strategies, and integrate CI/CD pipelines 
          using modern DevOps practices. Adept at solving complex analytical problems, collaborating in fast-paced environments,
          and delivering reliable, high-impact data-driven solutions.
        </motion.p>

        <div>
          <a
          className="btn-primary"
          href="https://docs.google.com/document/d/1YiQPO4FqGniNc0Vr0_qsyiVJN7TgPtBYcf4YJsFcC54/edit?tab=t.0"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
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
            src="/profile-2026.jpeg"
            alt="Guru Ganesh"
            className="hero-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
