import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaFlask, FaCloud, FaArrowRight } from "react-icons/fa";
import "./HomeServices.css";

const divisions = [
  {
    id: "robotics",
    title: "Hexa Robotics",
    tagline: "Automated Sample Preparation",
    description: "Advanced robotics for consistent, high-quality cryo-EM grid preparation with minimal human intervention.",
    icon: <FaRobot />,
    color: "#f59e0b",
    link: "/services#robotics",
  },
  {
    id: "cro",
    title: "SS Hexa CRO",
    tagline: "Contract Research Services",
    description: "Full-service CRO handling samples from receipt to final EM imaging with publication-ready results.",
    icon: <FaFlask />,
    color: "#10b981",
    link: "/services#cro",
  },
  {
    id: "practicloud",
    title: "PractiCloud",
    tagline: "Cloud-Based Processing",
    description: "Powerful cloud platform for running cryo-EM algorithms with scalable computing resources.",
    icon: <FaCloud />,
    color: "#3b82f6",
    link: "/services#practicloud",
  },
];

const HomeServices = () => {
  const navigate = useNavigate();

  return (
    <div className="services-section">
      <Container>
        <h2 className="services-heading">Our Three Pillars</h2>
        <p className="services-subheading">Together, we deliver a complete cryo-EM workflow solution</p>
        <Row className="g-4 justify-content-center">
          {divisions.map((division, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card
                className="service-card division-card division-card-link"
                style={{ borderTopColor: division.color, cursor: "pointer" }}
                onClick={() => navigate(division.link)}
              >
                <Card.Body>
                  <div className="division-icon" style={{ backgroundColor: division.color }}>
                    {division.icon}
                  </div>
                  <Card.Title>{division.title}</Card.Title>
                  <span className="division-tagline">{division.tagline}</span>
                  <Card.Text>{division.description}</Card.Text>
                  <span className="visit-link" style={{ color: division.color }}>
                    Explore {division.title} <FaArrowRight />
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeServices;
