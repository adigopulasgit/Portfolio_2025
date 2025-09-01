import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "./Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <Experience />

      {/* Skills Section */}
      <section className="container" aria-labelledby="skills">
        <h2 id="skills" style={{ margin: "0 0 20px" }}>Skills & Tools</h2>
        <Skills />
      </section>

      {/* Projects Section */}
      <Projects />
     
      <Education />
        {/* Contact Section */}
        <Contact />
    


    </>
  );
}
