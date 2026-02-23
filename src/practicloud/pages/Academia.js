import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCloud, FaChalkboardTeacher, FaUsers, FaFlask, FaAward, FaGraduationCap } from "react-icons/fa";
import "./Academia.css";

const academicPrograms = [
  {
    icon: <FaCloud />,
    title: "Free Cloud Credits",
    description: "Students get $500 in free cloud credits annually to run cryo-EM experiments and learn data analysis without financial barriers.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Live Training Sessions",
    description: "Weekly live webinars and workshops led by cryo-EM experts covering fundamentals to advanced techniques.",
  },
  {
    icon: <FaFlask />,
    title: "Hands-on Labs",
    description: "Access to curated datasets and guided experiments designed specifically for learning cryo-EM workflows.",
  },
  {
    icon: <FaUsers />,
    title: "Study Groups",
    description: "Join collaborative study groups with students worldwide. Learn together, share insights, and build your network.",
  },
];

const institutionBenefits = [
  {
    title: "Classroom Integration",
    description: "Seamlessly integrate PractiCloud into your structural biology curriculum. No IT setup required—students access everything through their browser.",
  },
  {
    title: "Bulk Licensing",
    description: "Special academic pricing for universities and research institutions. Contact us for custom packages tailored to your department's needs.",
  },
  {
    title: "Research Partnerships",
    description: "Collaborate with our team on cutting-edge research. We offer special support for PhD students and postdoctoral researchers.",
  },
  {
    title: "Publication Support",
    description: "Students and researchers using PractiCloud for publications receive extended cloud credits and priority technical support.",
  },
];

const Academia = () => {
  const navigate = useNavigate();

  return (
    <div className="academia-page">
      {/* Hero Section */}
      <div className="academia-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge"><FaGraduationCap /> Academia</span>
          <h1 className="hero-title">PractiCloud for Academia</h1>
          <p className="hero-subtitle">
            Empowering the next generation of structural biologists with free cloud access,
            expert-led training, and hands-on learning experiences.
          </p>
          <Button className="hero-btn" onClick={() => navigate("/practicloud/contactus")}>
            Apply for Academic Access
          </Button>
        </div>
      </div>

      {/* Student Programs Section */}
      <section className="student-programs">
        <Container>
          <h2 className="section-title">For Students</h2>
          <p className="section-subtitle">
            Whether you're an undergraduate exploring structural biology or a PhD candidate
            running complex experiments, PractiCloud provides the tools you need to succeed.
          </p>
          <Row className="g-4">
            {academicPrograms.map((program, idx) => (
              <Col key={idx} md={6} lg={3}>
                <Card className="program-card">
                  <Card.Body>
                    <div className="program-icon">{program.icon}</div>
                    <Card.Title>{program.title}</Card.Title>
                    <Card.Text>{program.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Institutions Section */}
      <section className="institutions-section">
        <Container>
          <h2 className="section-title">For Institutions</h2>
          <p className="section-subtitle">
            Partner with PractiCloud to bring cutting-edge cryo-EM analysis to your students
            and researchers without the infrastructure burden.
          </p>
          <Row className="g-4">
            {institutionBenefits.map((benefit, idx) => (
              <Col key={idx} md={6}>
                <div className="benefit-item">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Training Schedule */}
      <section className="training-schedule">
        <Container>
          <h2 className="section-title">Training Sessions — Dates Coming Soon</h2>
          <div className="schedule-grid">
            <div className="schedule-item">
              <div className="schedule-date">
                <span className="month">TBD</span>
                <span className="day">--</span>
              </div>
              <div className="schedule-info">
                <h4>Introduction to Cryo-EM</h4>
                <p>Fundamentals of sample preparation and data collection</p>
                <span className="badge">Beginner</span>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-date">
                <span className="month">TBD</span>
                <span className="day">--</span>
              </div>
              <div className="schedule-info">
                <h4>RELION Workflow Deep Dive</h4>
                <p>Hands-on session with real datasets</p>
                <span className="badge intermediate">Intermediate</span>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-date">
                <span className="month">TBD</span>
                <span className="day">--</span>
              </div>
              <div className="schedule-info">
                <h4>Advanced Analysis Techniques</h4>
                <p>Modern approaches to particle picking and classification</p>
                <span className="badge advanced">Advanced</span>
              </div>
            </div>
            <div className="schedule-item">
              <div className="schedule-date">
                <span className="month">TBD</span>
                <span className="day">--</span>
              </div>
              <div className="schedule-info">
                <h4>From Data to Publication</h4>
                <p>Best practices for reproducible research</p>
                <span className="badge">All Levels</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Button className="view-all-btn" onClick={() => navigate("/practicloud/contactus")}>
              Register for Sessions
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="academia-testimonials">
        <Container>
          <h2 className="section-title">What Students Say</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="testimonial-card">
                <p className="quote">
                  "PractiCloud made it possible for me to complete my thesis research without
                  waiting months for HPC queue time. The training sessions were invaluable."
                </p>
                <div className="author">
                  <FaAward className="award-icon" />
                  <div>
                    <strong>Sarah M.</strong>
                    <span>PhD Student, MIT</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <p className="quote">
                  "As an undergrad, I never thought I'd have access to real cryo-EM tools.
                  The free credits program opened doors I didn't know existed."
                </p>
                <div className="author">
                  <FaAward className="award-icon" />
                  <div>
                    <strong>James L.</strong>
                    <span>Undergraduate, Stanford</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <p className="quote">
                  "The training adapted to my learning pace perfectly.
                  I went from beginner to running my own experiments in just weeks."
                </p>
                <div className="author">
                  <FaAward className="award-icon" />
                  <div>
                    <strong>Priya K.</strong>
                    <span>Masters Student, Oxford</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="academia-cta">
        <Container>
          <div className="cta-content">
            <h2>Ready to Start Learning?</h2>
            <p>
              Apply for academic access today and get free cloud credits, training resources,
              and expert support to accelerate your research journey.
            </p>
            <div className="cta-buttons">
              <Button className="primary-btn" onClick={() => navigate("/practicloud/contactus")}>
                Apply as Student
              </Button>
              <Button className="secondary-btn" onClick={() => navigate("/practicloud/contactus")}>
                Partner as Institution
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Academia;
