import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCogs } from "react-icons/fa";
import "./Services.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const services = [
  {
    type: "text",
    title: "Programming And Integration",
    description:
      "We program, configure, and integrate the VitriFlex robotic platform into your existing lab workflow. From robot calibration and position training to custom protocol scripting via our intuitive C# GUI, we ensure your system is ready for reproducible grid preparation from day one.",
  },
  {
    type: "image",
    image: "/grid-preparation.jpg",
  },
  {
    type: "image",
    image: "/spray-system.jpg",
  },
  {
    type: "text-dark",
    title: "Time-Resolved Cryo-EM",
    description:
      "Rapid spray-to-plunge freezing with delays as short as ~130 ms. Capture transient biochemical reactions and conformational changes at sub-second timescales prior to vitrification for time-resolved structural biology research.",
  },
  {
    type: "text",
    title: "On-Grid Mixing",
    description:
      "Two-component mixing directly on the grid using acoustic-assisted spray delivery. Ideal for studying protein-protein interactions, receptor-ligand binding, and complex formation under low sample volumes and short incubation times.",
  },
  {
    type: "image",
    image: "/protein-structure.jpg",
  },
  {
    type: "image",
    image: "/scara-robot.jpg",
  },
  {
    type: "text-dark",
    title: "Custom Protocol Development",
    description:
      "Tailored freezing parameters optimized for your specific samples. We customize blot time, spray duration, incubation time, and humidity control to achieve optimal grid quality for your unique biological specimens.",
  },
  {
    type: "text",
    title: "Care Service Contract",
    description:
      "We provide extended uptime guarantees, priority pipeline execution, and reliability services to ensure your Cryo-EM workloads never face interruptions.",
  },
  {
    type: "image",
    image: "/cryo-em-map.jpg",
  },
  {
    type: "image",
    image: "/data-processing.jpg",
  },
  {
    type: "text-dark",
    title: "Custom Automation Solution",
    description:
      "Our platform features advanced, modular automation solutions that extend well beyond cryo-EM. Each module is designed to be fully customizable to your specific workflow requirements — whether it's sample preparation, liquid handling, imaging pipelines, or lab-wide orchestration. We continuously develop and release new modules, enabling you to scale and adapt your automation as your research evolves. Every solution is tailored to your needs, ensuring seamless integration with your existing equipment and processes.",
  },
];

const otherServices = {
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
    link: "/practicloud",
  },
};

const Services = () => {
  useDocumentTitle("Services - Hexa Robotics");
  const [activeTab, setActiveTab] = useState("cro");

  return (
    <div className="hr-services-page">
      {/* HERO */}
      <div className="hr-services-hero">
        <div className="hr-page-hero-bg">
          <div className="hr-page-hero-gradient"></div>
          <div className="hr-page-hero-pattern"></div>
        </div>
        <div className="hr-page-hero-content">
          <span className="hr-page-badge"><FaCogs /> Services</span>
          <h1 className="hr-page-hero-title">Services & Solutions</h1>
          <p className="hr-page-hero-subtitle">
            End-to-end cryo-EM automation services — from grid preparation
            and vitrification to custom protocol development and care contracts.
          </p>
        </div>
      </div>

      {/* SERVICE GRID */}
      <div className="hr-service-grid">
        {services.map((item, idx) => (
          <div
            key={item.title || item.image}
            className={
              item.type === "image"
                ? "hr-service-tile hr-image-tile"
                : item.type === "text-dark"
                ? "hr-service-tile hr-text-dark-tile"
                : "hr-service-tile hr-text-tile"
            }
          >
            {item.type === "image" ? (
              <img src={item.image} alt={item.title || "Service illustration"} className="hr-service-img" />
            ) : (
              <div className="hr-service-text-box">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* OUR OTHER SERVICES */}
      <div className="hr-other-services-section">
        <h2 className="hr-other-services-title">Our Other Services</h2>

        <div className="hr-services-tabs">
          <button
            className={`hr-tab-btn ${activeTab === "cro" ? "active" : ""}`}
            onClick={() => setActiveTab("cro")}
          >
            CRO Services
          </button>
          <button
            className={`hr-tab-btn ${activeTab === "practicloud" ? "active" : ""}`}
            onClick={() => setActiveTab("practicloud")}
          >
            Practicloud
          </button>
        </div>

        <div className="hr-tab-content">
          <h3>{otherServices[activeTab].title}</h3>
          <p>{otherServices[activeTab].description}</p>
          <ul className="hr-service-features">
            {otherServices[activeTab].features.map((feature, idx) => (
              <li key={feature}>{feature}</li>
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
