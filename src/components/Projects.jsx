import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "./data/projects";

export default function Projects() {
  return (
    <section className="projects-stack">
      {PROJECTS.map((project, i) => (
        <motion.div
          key={i}
          className={`project-row ${i % 2 === 0 ? "normal" : "reverse"}`}
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          {/* Image */}
          <div className="project-img-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="project-info">
            <h3>
              <a href={project.url} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h3>
            <p>{project.summary}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
