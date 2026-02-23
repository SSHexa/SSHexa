import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCloud,
  FaDollarSign,
  FaBolt,
  FaExchangeAlt,
  FaUserGraduate,
  FaLock,
  FaMicroscope,
  FaRocket
} from "react-icons/fa";
import "./HomeFeatures.css";

const features = [
  {
    icon: <FaMicroscope />,
    title: "Cryo-EM & Tomography",
    desc: "Full support for single particle analysis and cryo-electron tomography, with more structural biology techniques on the horizon.",
    color: "#3b82f6"
  },
  {
    icon: <FaExchangeAlt />,
    title: "Multi-Package Support",
    desc: "Seamlessly work with RELION, CryoSPARC, EMAN2, and IMOD. Automated data conversion preserves metadata integrity.",
    color: "#8b5cf6"
  },
  {
    icon: <FaCloud />,
    title: "Single Intuitive Interface",
    desc: "One platform combining processing, analysis, and training—no complex installations or HPC setup required.",
    color: "#06b6d4"
  },
  {
    icon: <FaDollarSign />,
    title: "Cost-Optimized Computing",
    desc: "Pay-as-you-go pricing with intelligent GPU guidance. Accessible for small labs, powerful for high-throughput centers.",
    color: "#10b981"
  },
  {
    icon: <FaUserGraduate />,
    title: "Expert Support",
    desc: "Live expert advisory sessions combined with hands-on guidance for both Cryo-EM and tomography workflows.",
    color: "#f59e0b"
  },
  {
    icon: <FaRocket />,
    title: "Adaptive Learning",
    desc: "Self-paced training that evolves with your progress. Reduce skill acquisition time from months to weeks.",
    color: "#ec4899"
  },
  {
    icon: <FaLock />,
    title: "Enterprise Security",
    desc: "End-to-end encryption, automated backups, MFA, and continuous expert oversight for scientifically valid results.",
    color: "#6366f1"
  },
  {
    icon: <FaBolt />,
    title: "Instant Processing",
    desc: "No queues or downtimes. Jobs start immediately with dynamic resource allocation optimized for your analysis type.",
    color: "#14b8a6"
  }
];

export default function HomeFeatures() {
  return (
    <section className="home-features">
      <Container>
        <div className="features-header">
          <span className="features-badge">Why PractiCloud</span>
          <h2 className="features-title">Built for Modern Structural Biology</h2>
          <p className="features-subtitle">
            Unlike competitors offering static documentation and fragmented workflows,
            PractiCloud delivers adaptive, context-aware guidance that evolves with you.
          </p>
        </div>

        <Row className="features-grid">
          {features.map((feature, idx) => (
            <Col key={idx} sm={6} lg={3} className="feature-col">
              <div className="feature-card">
                <div
                  className="feature-icon"
                  style={{
                    background: `${feature.color}15`,
                    color: feature.color
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
