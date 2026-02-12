import React from "react";
import "./Services.css";
import backgroundImage from "./background.png";
import { Link } from "react-router-dom";
import { FaRobot, FaFlask, FaCloud, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

import ProteinTetramer from "./ProteinTetramer";
import ProteinDensity from "./ProteinDensity";
import ProteinCapsid from "./ProteinCapsid";
import ConsultationVisual from "./ConsultationVisual";
import SecurityVisual from "./SecurityVisual";
import PricingVisual from "./PricingVisual";
import CollaborationVisual from "./CollaborationVisual";

// SS Hexa Divisions
const divisions = [
  {
    id: "robotics",
    name: "Hexa Robotics",
    tagline: "Automated Sample Preparation",
    description: "Advanced robotics for cryo-EM sample preparation. Our automated solutions ensure consistent, high-quality grid preparation with minimal human intervention.",
    icon: <FaRobot />,
    color: "#f59e0b",
    link: "/hexarobotics",
  },
  {
    id: "cro",
    name: "SS Hexa CRO",
    tagline: "Contract Research Services",
    description: "Full-service Contract Research Organization for cryo-EM. We handle your samples from receipt to final EM imaging, delivering publication-ready results with expert analysis.",
    icon: <FaFlask />,
    color: "#10b981",
  },
  {
    id: "practicloud",
    name: "PractiCloud",
    tagline: "Cloud-Based Processing",
    description: "Powerful cloud platform for running cryo-EM algorithms. Process your data with scalable computing resources, advanced analysis tools, and seamless collaboration features.",
    icon: <FaCloud />,
    color: "#3b82f6",
    link: "/practicloud",
  },
];

// Services organized by division
const services = {
  robotics: [
    {
      title: "Automated Grid Preparation",
      description:
        "Our Hexa Robotics systems automate the entire grid preparation process. From sample application to vitrification, our robots ensure reproducible results with precise control over blotting time, humidity, and temperature—eliminating human variability and maximizing your success rate.",
      component: <ConsultationVisual />,
    },
    {
      title: "Sample Optimization",
      description:
        "Not sure about the best conditions for your sample? Our robotic screening platform can test multiple conditions in parallel, helping you identify optimal buffer compositions, concentrations, and grid types for your specific protein or complex.",
      component: <ProteinDensity />,
    },
  ],
  cro: [
    {
      title: "End-to-End CRO Services",
      description:
        "From sample receipt to final structure, SS Hexa CRO handles it all. Our experienced team works with small proteins, membrane proteins, viruses, nanoparticles, and more. We provide feasibility assessments, data collection, and complete single-particle analysis with publication-quality results.",
      component: <ProteinCapsid />,
    },
    {
      title: "Feasibility Consultation",
      description:
        "A feasibility consultation is always free! If you're new to cryo-EM, we'll gladly walk you through the basics and determine if single particle analysis is the right method for your sample. We also provide expert-guided learning on the platform, workflow, and core concepts of cryo-EM analysis.",
      component: <CollaborationVisual />,
    },
  ],
  practicloud: [
    {
      title: "Scalable Cloud Computing",
      description:
        "PractiCloud is designed to meet the evolving demands of structural biology research. Built on a highly scalable infrastructure, it offers dynamic resource allocation that adjusts seamlessly to your project's complexity. Process small datasets or large-scale cryo-EM data with the computational power you need.",
      component: <ProteinTetramer />,
    },
    {
      title: "Advanced Data Management",
      description:
        "Managing large volumes of cryo-EM data can be challenging, but PractiCloud makes it simple. With intuitive data management tools, you can easily organize, access, and share your datasets. Our platform supports a wide range of data formats and integrates seamlessly with existing repositories.",
      component: <SecurityVisual />,
    },
    {
      title: "Flexible Pricing & Support",
      description:
        "We understand that every research project is unique. Choose from pay-as-you-go options for occasional use or subscribe to our monthly or annual plans for continuous access. Our dedicated support team is available 24/7 to assist with any technical issues, ensuring your research is never interrupted.",
      component: <PricingVisual />,
    },
  ],
};

const Services = () => {
  React.useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div
        className="services-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Complete 360° Cryo-EM Solutions</h1>
          <p className="hero-subtitle">
            From sample preparation to final structure — SS Hexa provides end-to-end services
            through our three specialized divisions
          </p>
        </div>
      </div>

      {/* Divisions Overview */}
      <div className="divisions-section">
        <div className="divisions-header">
          <h2>Our Three Pillars</h2>
          <p>Together, we deliver a complete cryo-EM workflow solution</p>
        </div>

        <div className="divisions-flow">
          {divisions.map((div, idx) => (
            <div key={div.id} className="division-flow-item">
              <div
                className="division-card"
                style={{ borderColor: div.color, cursor: "pointer" }}
                onClick={() => {
                  document.getElementById(div.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="division-icon" style={{ backgroundColor: div.color }}>
                  {div.icon}
                </div>
                <h3>{div.name}</h3>
                <span className="division-tagline">{div.tagline}</span>
                <p>{div.description}</p>
                <span
                    className="division-card-link"
                    style={{ color: div.color, cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById(div.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Explore {div.name} <FaArrowRight style={{ fontSize: "0.8em" }} />
                  </span>
              </div>
              {idx < divisions.length - 1 && (
                <div className="flow-arrow">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Services by Division */}
      {divisions.map((division) => (
        <div key={division.id} className="division-services" id={division.id}>
          <div className="division-services-header" style={{ backgroundColor: division.color }}>
            <div className="division-services-icon">{division.icon}</div>
            <h2>{division.name}</h2>
            <p>{division.tagline}</p>
            {division.link && (
              <Link to={division.link} className="division-header-link">
                Visit {division.name} <FaExternalLinkAlt style={{ fontSize: "0.75em", marginLeft: "0.4rem" }} />
              </Link>
            )}
          </div>

          <div className="services-list">
            {services[division.id].map((service, idx) => (
              <div key={idx} className="service-block">
                <div className="service-text">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <div className="service-image-wrapper">
                  <div style={{ width: "100%", height: "100%" }}>
                    {service.component}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {division.link && (
            <div className="division-visit-cta">
              <Link
                to={division.link}
                className="division-visit-btn"
                style={{ backgroundColor: division.color }}
              >
                Visit {division.name} <FaExternalLinkAlt style={{ marginLeft: "0.5rem", fontSize: "0.85em" }} />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;
