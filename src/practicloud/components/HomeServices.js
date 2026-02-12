import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMicroscope, FaExchangeAlt, FaBrain, FaServer } from "react-icons/fa";
import "./HomeServices.css";

const services = [
  {
    icon: <FaMicroscope />,
    title: "Cryo-EM & Tomography",
    description: "Complete support for single particle analysis and cryo-electron tomography, with more techniques coming soon.",
    color: "#3b82f6",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Automated Interoperability",
    description: "Seamless data transitions between RELION, CryoSPARC, EMAN2, and IMOD with lossless conversion.",
    color: "#8b5cf6",
  },
  {
    icon: <FaBrain />,
    title: "AI-Powered Training",
    description: "Self-learning modules that adapt to your skill level for both Cryo-EM and tomography workflows.",
    color: "#06b6d4",
  },
  {
    icon: <FaServer />,
    title: "Cost-Optimized Computing",
    description: "Pay-as-you-go model with intelligent GPU selection optimized for your analysis type.",
    color: "#10b981",
  },
];

const HomeServices = () => {
  return (
    <section className="services-section">
      <Container>
        <div className="section-header">
          <span className="section-badge">Platform Capabilities</span>
          <h2 className="section-title">Everything You Need for Structural Biology</h2>
          <p className="section-subtitle">
            From data collection to publication, PractiCloud provides a complete suite of tools
            designed to accelerate your research workflow.
          </p>
        </div>

        <Row className="services-grid">
          {services.map((service, idx) => (
            <Col key={idx} md={6} lg={3}>
              <Link to="/practicloud/services" className="service-card-link">
                <div className="service-card">
                  <div className="service-icon" style={{ background: `${service.color}15`, color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <span className="service-link">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeServices;
