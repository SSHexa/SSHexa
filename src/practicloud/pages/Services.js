import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaMicroscope,
  FaBrain,
  FaUsers,
  FaExchangeAlt,
  FaCloud,
  FaDollarSign,
  FaArrowRight,
  FaCogs
} from "react-icons/fa";
import "./Services.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const services = [
  {
    icon: <FaMicroscope />,
    title: "Cryo-EM Data Analysis",
    description:
      "PractiCloud provides comprehensive support for both single particle analysis (SPA) and cryo-electron tomography (cryo-ET). Whether you're determining high-resolution structures or studying cellular architecture in situ, our platform handles the complete workflow. From tilt series acquisition to subtomogram averaging, we support IMOD, EMAN2 tomo, and other leading tomography tools.",
    color: "#3b82f6",
  },
  {
    icon: <FaBrain />,
    title: "Adaptive Training",
    description:
      "PractiCloud's self-paced training modules dramatically outperform conventional solutions. Unlike competitors offering only static documentation, our platform delivers adaptive, context-aware guidance that evolves with user progress for both SPA and tomography workflows. This reduces skill acquisition time from months to weeks.",
    color: "#8b5cf6",
  },
  {
    icon: <FaUsers />,
    title: "Expert-Led Training",
    description:
      "Beyond self-paced modules, PractiCloud combines expert-led e-training through live advisory sessions, modular e-learning, and automated data migration support. This unique hybrid approach ensures researchers successfully navigate complex SPA and tomography workflows.",
    color: "#06b6d4",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Automated Cross-Software Interoperability",
    description:
      "A critical innovation lies in PractiCloud's automated interoperability. Our platform intelligently manages transitions between popular packages like RELION, CryoSPARC, EMAN2, and IMOD. Our lossless conversion algorithms preserve metadata integrity during transitions while maintaining compatibility.",
    color: "#10b981",
  },
  {
    icon: <FaCloud />,
    title: "Cloud-Native Platform",
    description:
      "PractiCloud redefines ease of use through its ready-to-use, cloud-native platform that eliminates complex installations and HPC setup. Our single intuitive interface combines SPA processing, tomography reconstruction, analysis, and expert-guided training in one place.",
    color: "#f59e0b",
  },
  {
    icon: <FaDollarSign />,
    title: "Cost-Optimized Computing",
    description:
      "Our pay-as-you-go model makes advanced cryo-EM data analysis accessible to all researchers without infrastructure burdens. PractiCloud guides users on cost-effective usage with intelligent GPU selection. Accessible to small labs (<$10K/year) yet powerful enough for high-throughput centers.",
    color: "#ec4899",
  },
];

const otherServices = {
  hexarobotics: {
    title: "Hexa Robotics",
    description:
      "High-precision robots engineered to accelerate innovation in cryo-EM sample preparation and laboratory automation. From blot-and-plunge vitrification to time-resolved cryo-EM and on-grid mixing, our robotic systems deliver reproducible, high-quality grids with minimal human intervention.",
    features: [
      "Automated grid preparation",
      "Time-resolved cryo-EM",
      "On-grid mixing systems",
      "Custom protocol development",
    ],
    link: "/hexarobotics",
  },
  cro: {
    title: "CRO Services",
    description:
      "Our in-house capabilities span the entire cryo-EM workflow — from specimen preparation using Vitriflex, developed by our founder, to large-scale data analysis on our own cloud platform. We partner with various agencies to deliver cost-effective Contract Research Organization services, and our capabilities keep evolving from specimen prep to advanced data analysis.",
    features: [
      "Vitriflex-powered specimen preparation",
      "In-house tomography pipeline",
      "RELION Web platform for data analysis",
      "Agency tie-ups for cost-effective CRO",
    ],
    link: "/services#cro",
  },
};

const Services = () => {
  useDocumentTitle("Features - PractiCloud");
  const [activeTab, setActiveTab] = useState("hexarobotics");

  return (
    <div className="services-page">
      {/* Hero section */}
      <div className="services-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge"><FaCogs /> Platform Features</span>
          <h1 className="hero-title">
            Powerful Tools for Structural Biology
          </h1>
          <p className="hero-subtitle">
            Everything you need to accelerate your cryo-EM data analysis research,
            from data processing to publication-ready results.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <section className="services-section">
        <Container>
          <Row className="services-grid">
            {services.map((service, idx) => (
              <Col key={service.title} md={6} className="service-col">
                <div className="service-card">
                  <div
                    className="service-icon"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Platform Showcase */}
      <section className="pc-platform-showcase">
        <Container>
          <h2 className="pc-showcase-title">See the Platform in Action</h2>
          <p className="pc-showcase-subtitle">
            A single intuitive interface for cloud computing, data analysis, and expert-guided training.
          </p>
          <div className="pc-showcase-grid">
            <div className="pc-showcase-item">
              <div className="pc-showcase-img-wrapper">
                <img src="/Practicloudweb.png" alt="PractiCloud Dashboard" />
              </div>
              <h4>PractiCloud Dashboard</h4>
              <p>HPC resources, pinned applications, and quick access tools — all in one place.</p>
            </div>
            <div className="pc-showcase-item">
              <div className="pc-showcase-img-wrapper">
                <img src="/Relionweb.png" alt="RELION Web Platform" />
              </div>
              <h4>RELION Web Platform</h4>
              <p>Run RELION 5 directly in your browser with full project management and job tracking.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Services Section */}
      <section className="pc-other-services-section">
        <h2 className="pc-other-services-title">Our Other Services</h2>

        <div className="pc-services-tabs">
          <button
            className={`pc-tab-btn ${activeTab === "hexarobotics" ? "active" : ""}`}
            onClick={() => setActiveTab("hexarobotics")}
          >
            Hexa Robotics
          </button>
          <button
            className={`pc-tab-btn ${activeTab === "cro" ? "active" : ""}`}
            onClick={() => setActiveTab("cro")}
          >
            CRO Services
          </button>
        </div>

        <div className="pc-tab-content">
          <h3>{otherServices[activeTab].title}</h3>
          <p>{otherServices[activeTab].description}</p>
          <ul className="pc-service-features">
            {otherServices[activeTab].features.map((feature, idx) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Link to={otherServices[activeTab].link} className="pc-explore-link">
            Explore {otherServices[activeTab].title} <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
