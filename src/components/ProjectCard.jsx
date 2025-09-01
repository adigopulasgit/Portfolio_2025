// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, reverse }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="project-row"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`project-content ${reverse ? "reverse" : ""}`}>
        {/* Image */}
        <div className="project-image">
          <img src={project.image} alt={project.title} className="project-img" />
        </div>
        {/* Text */}
        <div className="project-text">
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
          <span className="cta">View on GitHub →</span>
        </div>
      </div>
    </motion.a>
  );
}
