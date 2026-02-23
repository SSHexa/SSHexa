import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCogs,
  FaThermometerHalf,
  FaCubes,
  FaCode,
  FaTachometerAlt,
  FaShieldAlt
} from "react-icons/fa";
import "./HomeFeatures.css";

const features = [
  {
    icon: <FaCogs />,
    title: "Automated Vitrification",
    desc: "Fully automated blot-and-plunge workflow with programmable parameters for consistent, hands-free cryo-EM grid preparation.",
    color: "#f59e0b"
  },
  {
    icon: <FaThermometerHalf />,
    title: "Environmental Control",
    desc: "Precise humidity and temperature regulation in an enclosed chamber ensures optimal conditions for sensitive biological samples.",
    color: "#ef4444"
  },
  {
    icon: <FaCubes />,
    title: "Modular Architecture",
    desc: "Swap and upgrade components independently. From blotting heads to plunging mechanisms, customize the system for your workflow.",
    color: "#8b5cf6"
  },
  {
    icon: <FaCode />,
    title: "Customizable Platform",
    desc: "Fully configurable hardware and software tailored to your lab's needs. Extend, adapt, and optimize workflows with ease.",
    color: "#22c55e"
  },
  {
    icon: <FaTachometerAlt />,
    title: "Rapid Grid Prep",
    desc: "Complete grid preparation in under 3 minutes. High-throughput screening capability for testing multiple conditions quickly.",
    color: "#3b82f6"
  },
  {
    icon: <FaShieldAlt />,
    title: "Reproducible Results",
    desc: "Eliminate human variability with robotic precision. Achieve 99.5% reproducibility across experiments with logged parameters.",
    color: "#06b6d4"
  }
];

export default function HomeFeatures() {
  return (
    <section className="hr-home-features">
      <Container>
        <div className="hr-features-header">
          <span className="hr-features-badge">Why VitriFlex</span>
          <h2 className="hr-features-title">Engineered for Precision</h2>
          <p className="hr-features-subtitle">
            Purpose-built robotics that eliminate variability and put you in full
            control of your cryo-EM sample preparation workflow.
          </p>
        </div>

        <Row className="hr-features-grid">
          {features.map((feature, idx) => (
            <Col key={idx} sm={6} lg={4} className="hr-feature-col">
              <div className="hr-feature-card">
                <div
                  className="hr-feature-icon"
                  style={{
                    background: `${feature.color}15`,
                    color: feature.color,
                    borderColor: `${feature.color}30`
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="hr-feature-title">{feature.title}</h3>
                <p className="hr-feature-desc">{feature.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
