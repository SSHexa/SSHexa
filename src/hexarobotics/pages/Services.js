import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Services.css";
import backgroundImage from "./background.png";

const services = [
  {
    type: "text",
    title: "Programming And Integration",
    description:
      "Our Cryo-EM Cloud Application is designed to meet the evolving demands of structural biology research. Built on a highly scalable infrastructure, it offers dynamic resource allocation that adjusts effortlessly to your project's complexity.",
  },
  {
    type: "image",
    image: "/grid-preparation.jpg", // Add: Image of cryo-EM grid preparation
  },
  {
    type: "image",
    image: "/vitrification.jpg", // Add: Image of vitrification process
  },
  {
    type: "text-dark",
    title: "Blot-and-Plunge Vitrification",
    description:
      "Standard cryo-EM grid preparation with automated blotting using solenoid-actuated 47mm filter paper system. Achieve reproducible, high-quality grids with thin ice and minimal contamination for near-atomic resolution structures.",
  },
  {
    type: "text",
    title: "Time-Resolved Cryo-EM",
    description:
      "Rapid spray-to-plunge freezing with delays as short as ~130 ms. Capture transient biochemical reactions and conformational changes at sub-second timescales prior to vitrification for time-resolved structural biology research.",
  },
  {
    type: "image",
    image: "/spray-system.jpg", // Add: Image of acoustic spray system
  },
  {
    type: "image",
    image: "/protein-structure.jpg", // Add: Image of 3D protein reconstruction
  },
  {
    type: "text-dark",
    title: "On-Grid Mixing",
    description:
      "Two-component mixing directly on the grid using acoustic-assisted spray delivery. Ideal for studying protein-protein interactions, receptor-ligand binding, and complex formation under low sample volumes and short incubation times.",
  },
  {
    type: "text",
    title: "Custom Protocol Development",
    description:
      "Tailored freezing parameters optimized for your specific samples. We customize blot time, spray duration, incubation time, and humidity control to achieve optimal grid quality for your unique biological specimens.",
  },
  {
    type: "image",
    image: "/scara-robot.jpg", // Add: Image of SCARA robot arm
  },
  {
    type: "image",
    image: "/cryo-em-map.jpg", // Add: Image of cryo-EM density map
  },
  {
    type: "text-dark",
    title: "Care Service Contract",
    description:
      "We provide extended uptime guarantees, priority pipeline execution, and reliability services to ensure your Cryo-EM workloads never face interruptions.",
  },
  {
    type: "text",
    title: "Custom Automation Solution",
    description:
      "Whether you need preprocessing automation, motion correction workflows, or full pipeline orchestration, our solutions are fast, scalable, and cost-efficient.",
  },
  {
    type: "image",
    image: "/data-processing.jpg", // Add: Image of data processing/pipeline
  },
];

const otherServices = {
  practicloud: {
    title: "Practicloud",
    description:
      "Our cloud-based platform designed for structural biologists to run compute-intensive cryo-EM algorithms without local infrastructure. Access powerful GPU clusters for motion correction, CTF estimation, particle picking, 2D/3D classification, and refinement workflows. Scale your processing on-demand with pay-as-you-go pricing and eliminate hardware maintenance overhead.",
    features: [
      "Motion correction & CTF estimation",
      "Particle picking & 2D classification",
      "3D reconstruction & refinement",
      "On-demand GPU scaling",
    ],
    link: "/practicloud/services",
  },
  cro: {
    title: "CRO Services",
    description:
      "End-to-end cryo-EM data processing services handled by our expert team. From raw micrographs to publication-ready density maps and atomic models, we provide comprehensive Contract Research Organization support. Ideal for labs without dedicated computational staff or those seeking faster turnaround on critical projects.",
    features: [
      "Full data processing pipeline",
      "Expert analysis & interpretation",
      "Publication-ready deliverables",
      "Flexible turnaround options",
    ],
    link: "/hexarobotics/contactus",
  },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("practicloud");

  return (
    <div className="services-page">
      {/* HERO */}
      <div
        className="services-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay">
          <h1 className="hero-title">
            SSHexa Services And <span>Solutions</span>
          </h1>
        </div>
      </div>

      {/* SERVICE GRID */}
      <div className="service-grid">
        {services.map((item, idx) => (
          <div
            key={idx}
            className={
              item.type === "image"
                ? "service-tile image-tile"
                : item.type === "text-dark"
                ? "service-tile text-dark-tile"
                : "service-tile text-tile"
            }
          >
            {item.type === "image" ? (
              <img src={item.image} alt="" className="service-img" />
            ) : (
              <div className="service-text-box">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* OUR OTHER SERVICES */}
      <div className="other-services-section">
        <h2 className="other-services-title">Our Other Services</h2>

        <div className="services-tabs">
          <button
            className={`tab-btn ${activeTab === "practicloud" ? "active" : ""}`}
            onClick={() => setActiveTab("practicloud")}
          >
            Practicloud
          </button>
          <button
            className={`tab-btn ${activeTab === "cro" ? "active" : ""}`}
            onClick={() => setActiveTab("cro")}
          >
            CRO Services
          </button>
        </div>

        <div className="tab-content">
          <h3>{otherServices[activeTab].title}</h3>
          <p>{otherServices[activeTab].description}</p>
          <ul className="service-features">
            {otherServices[activeTab].features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <Link to={otherServices[activeTab].link} className="hr-explore-link">
            Explore {otherServices[activeTab].title} <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
