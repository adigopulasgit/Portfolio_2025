// src/components/Experience.jsx
import React from "react";

const experienceData = [
  {
    role: "Data Science Intern",
    company: "Machine Learning Research Projects",
    year: "2024",
    details: [
      "Applied Python, Pandas, and Matplotlib to analyze large datasets",
      "Experimented with ML tools such as Scikit-learn and TensorFlow",
    ],
  },
];

export default function Experience() {
  return (
    <section className="container" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, i) => (
          <div key={i} className="timeline-item">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="year">{exp.year}</span>
            <ul>
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
