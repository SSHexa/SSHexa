import { Container, Row, Col } from "react-bootstrap";
import {
  FaRobot,
  FaFlask,
  FaCloud,
  FaBolt,
  FaHandshake,
  FaLock,
  FaHeadset,
  FaMicroscope
} from "react-icons/fa";
import "./HomeFeatures.css";

const features = [
  {
    icon: <FaRobot />,
    title: "Automated Sample Preparation",
    desc: "Hexa Robotics ensures consistent, high-quality grid preparation with precise control over all parameters.",
    color: "#f59e0b"
  },
  {
    icon: <FaFlask />,
    title: "Expert CRO Services",
    desc: "SS Hexa CRO handles your samples from receipt to final structure with publication-ready results.",
    color: "#10b981"
  },
  {
    icon: <FaCloud />,
    title: "Cloud-Powered Processing",
    desc: "PractiCloud offers scalable computing resources for running cryo-EM algorithms without hardware hassles.",
    color: "#3b82f6"
  },
  {
    icon: <FaBolt />,
    title: "Fast Turnaround",
    desc: "With cloud resources and automated workflows, enjoy faster results without queue delays.",
    color: "#8b5cf6"
  },
  {
    icon: <FaMicroscope />,
    title: "Publication-Ready Results",
    desc: "From data collection to 3D reconstruction, we deliver results ready for peer-reviewed publications.",
    color: "#0d9488"
  },
  {
    icon: <FaHandshake />,
    title: "End-to-End Partnership",
    desc: "From feasibility consultation to final delivery, we're with you at every step of the cryo-EM journey.",
    color: "#ec4899"
  },
  {
    icon: <FaLock />,
    title: "Secure & Reliable",
    desc: "Built on encrypted infrastructure with backups, ensuring your research data is always protected.",
    color: "#6366f1"
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    desc: "Our expert team is available to assist with technical issues and guide you through the process.",
    color: "#14b8a6"
  },
];

export default function HomeFeatures() {
  return (
    <section className="sh-features">
      <Container>
        <div className="sh-features-header">
          <span className="sh-features-badge">Why SS Hexa</span>
          <h2 className="sh-features-title">Why Choose SS Hexa?</h2>
          <p className="sh-features-subtitle">
            A complete 360° cryo-EM solution — from sample preparation to final
            structure — eliminating bottlenecks and accelerating your research.
          </p>
        </div>

        <Row className="sh-features-grid">
          {features.map((f, idx) => (
            <Col key={f.title} sm={6} lg={3} className="sh-feature-col">
              <div className="sh-feature-card">
                <div
                  className="sh-feature-icon"
                  style={{ background: `${f.color}12`, color: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="sh-feature-name">{f.title}</h3>
                <p className="sh-feature-desc">{f.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
