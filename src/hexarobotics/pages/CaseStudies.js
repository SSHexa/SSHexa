import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import "./CaseStudies.css";
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

const filtersList = ["ALL", "MANUFACTURING", "RESEARCH"];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredStudies = activeFilter === "ALL"
    ? caseStudies
    : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <div className="hr-case-page">
      {/* Hero */}
      <div className="hr-case-hero">
        <div className="hr-page-hero-bg">
          <div className="hr-page-hero-gradient"></div>
          <div className="hr-page-hero-pattern"></div>
        </div>
        <div className="hr-page-hero-content">
          <span className="hr-page-badge"><FaChartBar /> Case Studies</span>
          <h1 className="hr-page-hero-title">Case Studies</h1>
          <p className="hr-page-hero-subtitle">
            Explore real-world examples of how SSHexa Robotics has helped clients
            improve efficiency, automate workflows, and accelerate scientific breakthroughs.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="hr-case-body">
        {/* Filters + Sorting */}
        <div className="hr-case-toolbar">
          <div className="hr-case-filters">
            {filtersList.map((filter) => (
              <button
                key={filter}
                className={`hr-filter-btn${activeFilter === filter ? " active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="hr-case-sort">
            <select>
              <option>Sort by: Latest</option>
              <option>Sort by: Oldest</option>
            </select>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="hr-case-grid">
          {filteredStudies.map((study, idx) => (
            <Link to={study.link} key={idx} className="hr-case-card">
              <img src={study.image} alt={study.title} className="hr-case-image" />
              <div className="hr-case-content">
                <p className="hr-case-category">{study.category}</p>
                <h3 className="hr-case-heading">{study.title}</h3>
                <p className="hr-case-description">{study.description}</p>
                <p className="hr-case-readtime">{study.readTime}</p>
                <span className="hr-case-readmore">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
