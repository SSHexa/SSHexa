import React, { useState } from "react";
import "./CaseStudies.css";
import { Link } from "react-router-dom";
import product1 from "./EPSON.png";

const caseStudies = [
  {
    category: "MANUFACTURING",
    title: "Performance of Automated Blot-and-Plunge and Spray-Based Grid Preparation",
    description:
      "This study evaluates how automated blot-and-plunge and spray-based workflows produce consistent, high-quality cryo-EM grids across diverse specimens.",
    readTime: "12 minute read",
    image: product1,
    link: "/hexarobotics/CS/CS1"
  },
  {
    category: "RESEARCH",
    title: "On-Grid Mixing for Rapid Protein–Protein Complex Formation",
    description:
      "A fast, low-volume mixing strategy that drives protein interactions directly on the cryo-EM grid. Ideal for trapping short-lived complexes with high structural precision.",
    readTime: "14 minute read",
    image: product1,
    link: "/hexarobotics/CS/CS2"
  },
];

const filters = ["ALL", "MANUFACTURING", "RESEARCH", "HEALTHCARE"];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredStudies = activeFilter === "ALL"
    ? caseStudies
    : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <div className="case-page">

      <h1 className="case-title">Case Studies</h1>
      <p className="case-subtitle">
        Explore real-world examples of how SSHexa Robotics has helped clients improve efficiency,
        automate workflows, and accelerate scientific breakthroughs.
      </p>

      <div className="case-toolbar">
        <div className="case-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn${activeFilter === filter ? " active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="case-sort">
          <select>
            <option>Sort by: Latest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      <div className="case-grid">
        {filteredStudies.map((study, idx) => (
          <Link to={study.link} key={idx} className="case-card">
            <img src={study.image} alt={study.title} className="case-image" />

            <div className="case-content">
              <p className="case-category">{study.category}</p>
              <h3 className="case-heading">{study.title}</h3>
              <p className="case-description">{study.description}</p>
              <p className="case-readtime">{study.readTime}</p>

              <button className="case-readmore">Read More</button>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default CaseStudies;
