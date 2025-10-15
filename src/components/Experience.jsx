// src/components/Experience.jsx
import React from "react";

const experienceData = [
  {
    role: "Data Science Intern",
    company: "AIQure, LLC",
    year: "Jan 2025 – Present",
    details: [
      "Engineered scalable data pipelines integrating BindingDB, TDC, and PubChem with automated validation in Python + SQL, improving dataset reliability by 35% and reducing ingestion time.",
      "Optimized LightGBM and Chemprop models using Optuna-based hyperparameter tuning and RDKit feature engineering, boosting R² by 14% and reducing featurization runtime by 22%.",
      "Built a Retrieval-Augmented Generation (RAGOps) framework with Hugging Face, FAISS, and PostgreSQL for biomedical search & summarization, achieving 90%+ query relevance with sub-200 ms retrieval.",
      "Automated visualization and reporting pipelines (MAE, RMSE, ROC-AUC, PRC) using Matplotlib + Tableau, improving interpretability and data-driven decision-making.",
      "Deployed ML workflows with MLOps best practices—MLflow tracking, Dockerized FastAPI services, and Jenkins CI/CD—ensuring reproducible, high-uptime model delivery.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "eSmartChip Solutions",
    year: "Aug 2022 – Dec 2023",
    details: [
      "Developed and deployed Python-based automation frameworks for firmware validation, regression testing, and sensor calibration—reducing manual QA effort by 40% across embedded devices.",
      "Built data ingestion and transformation pipelines to capture telemetry from UART, SPI, and I²C interfaces and store structured results in SQL for fast root-cause analysis.",
      "Integrated device telemetry with analytics dashboards using REST APIs and MQTT/HTTP streams, providing real-time visibility into production performance metrics.",
      "Collaborated with firmware and DevOps teams to implement CI/CD hooks (Git + Jenkins) for automated build verification and test reporting.",
      "Prototyped and validated IoT edge modules focusing on data reliability, error handling, and secure device-to-cloud connectivity via AWS IoT Core.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      className="container mx-auto px-4 py-16 text-pantherSilver"
      id="experience"
    >
      <h2 className="text-4xl font-bold text-pantherGold mb-8 text-center">
        Experience
      </h2>
      <div className="space-y-12">
        {experienceData.map((exp, i) => (
          <div
            key={i}
            className="bg-pantherBlack/40 border border-pantherGold/30 rounded-2xl p-6 shadow-lg hover:shadow-pantherPurple/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-pantherPurple">
              {exp.role}
            </h3>
            <h4 className="text-lg text-pantherGold mb-2">{exp.company}</h4>
            <p className="text-sm italic mb-4">{exp.year}</p>
            <ul className="list-disc ml-6 space-y-2 text-sm leading-relaxed">
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
