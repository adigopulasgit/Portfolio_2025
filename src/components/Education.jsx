// src/components/Education.jsx
import React from "react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    school: "Texas A&M University–Corpus Christi, USA",
    year: "2023 – 2025 (Expected)",
    details: [
      "Focus on Artificial Intelligence, Deep Learning, and Software Engineering",
      "Research and coursework in Machine Learning, Parallel Computing, and DevOps",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    school: "Jawaharlal Nehru Technological University, India",
    year: "2019 – 2023",
    details: [
      "Graduated with strong foundation in programming, algorithms, and systems",
      "Active in projects involving Data Science and Cloud Computing",
    ],
  },
];

export default function Education() {
  return (
    <section className="container" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, i) => (
          <div key={i} className="timeline-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.school}</h4>
            <span className="year">{edu.year}</span>
            <ul>
              {edu.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
