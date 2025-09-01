// src/components/Skills.jsx
import React from "react";
import {
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaLinux,
} from "react-icons/fa";
import {
  SiC, SiJavascript, SiBootstrap, SiPostgresql, SiMysql, SiMongodb, SiJson, SiJupyter,
  SiScikitlearn, SiTensorflow, SiOpencv, SiNumpy, SiPandas,SiTailwindcss, SiFigma, 
} from "react-icons/si";

// ✅ Use react-icons where available, Shields.io badges where missing
const skills = [
  // Programming
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "C", icon: <SiC color="#A8B9CC" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },


  // Web Development
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },

  // Databases
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "JSON", icon: <SiJson color="#000000" /> },
  { name: "DBeaver", icon: <img src="https://img.shields.io/badge/DBeaver-372923?style=for-the-badge&logo=dbeaver&logoColor=white" alt="DBeaver" style={{height:"22px"}} /> },

  // Data Science Tools
  { name: "KNIME", icon: <img src="https://img.shields.io/badge/KNIME-FFC000?style=for-the-badge&logo=knime&logoColor=black" alt="KNIME" style={{height:"22px"}} /> },

  // ML / AI
  { name: "Scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
  { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
  { name: "NumPy", icon: <SiNumpy color="#013243" /> },
  { name: "Pandas", icon: <SiPandas color="#150458" /> },
  { name: "Matplotlib", icon: <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=plotly&logoColor=white" alt="Matplotlib" style={{height:"22px"}} /> },

  // Tools & Technologies
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#181717" /> },
  { name: "Linux", icon: <FaLinux color="#FCC624" /> },
  { name: "VS Code", icon: <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VS Code" style={{height:"22px"}} /> },
  { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },

  // Cloud & Design
  { name: "AWS", icon: <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" style={{height:"22px"}} /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },

];

export default function Skills() {
  return (
    <section className="container">
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill">
            <div className="icon">{s.icon}</div>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
