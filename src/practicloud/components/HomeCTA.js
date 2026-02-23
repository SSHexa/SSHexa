import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import "./HomeCTA.css";

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="home-cta">
      <div className="cta-background">
        <div className="cta-gradient"></div>
        <div className="cta-pattern"></div>
      </div>

      <Container className="cta-container">
        <div className="cta-content">
          <span className="cta-badge">Get Started Today</span>
          <h2 className="cta-title">
            Democratizing Structural Biology
            <span className="cta-highlight"> for Every Lab</span>
          </h2>
          <p className="cta-description">
            Scientific progress should be limited only by curiosity, not resources.
            With PractiCloud's pay-as-you-go model, professional-grade Cryo-EM and
            tomography analysis is now accessible to labs of all sizes.
          </p>

          <div className="cta-features">
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>30-day free trial</span>
            </div>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>Full platform access</span>
            </div>
          </div>

          <div className="cta-buttons">
            <Button
              className="btn-cta-primary"
              onClick={() => navigate("/practicloud/contactus")}
            >
              Start Free Trial
              <FaArrowRight className="btn-icon" />
            </Button>
            <Button
              className="btn-cta-secondary"
              onClick={() => navigate("/practicloud/services")}
            >
              <FaPlay className="play-icon" />
              See Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;
