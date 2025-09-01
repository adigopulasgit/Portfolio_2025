import React from "react";
import { motion } from "framer-motion";
import Projects from "../components/Projects";

export default function Work() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h1 style={{ margin: 0 }}>My Work</h1>
      <p className="lead">
        A showcase of selected projects demonstrating my skills in Data Science,
        Machine Learning, UX Design, and Full-Stack Development.
      </p>
      <Projects />
    </motion.section>
  );
}
