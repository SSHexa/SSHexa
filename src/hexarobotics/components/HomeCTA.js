import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";
import "./HomeCTA.css";

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="hr-home-cta">
      <div className="hr-cta-background">
        <div className="hr-cta-gradient"></div>
        <div className="hr-cta-lines"></div>
      </div>

      <Container className="hr-cta-container">
        <div className="hr-cta-content">
          <span className="hr-cta-badge">Get Started</span>
          <h2 className="hr-cta-title">
            Ready to Automate Your
            <span className="hr-cta-highlight"> Grid Preparation?</span>
          </h2>
          <p className="hr-cta-description">
            Whether you're setting up a new cryo-EM lab or upgrading your
            existing workflow, VitriFlex adapts to your needs. Modular,
            customizable, and built for real research.
          </p>

          <div className="hr-cta-features">
            <div className="hr-cta-feature">
              <span className="hr-check-icon">&#10003;</span>
              <span>Free consultation</span>
            </div>
            <div className="hr-cta-feature">
              <span className="hr-check-icon">&#10003;</span>
              <span>On-site installation</span>
            </div>
            <div className="hr-cta-feature">
              <span className="hr-check-icon">&#10003;</span>
              <span>Training included</span>
            </div>
          </div>

          <div className="hr-cta-buttons">
            <Button
              className="hr-btn-cta-primary"
              onClick={() => navigate("/hexarobotics/contactus")}
            >
              Request a Quote
              <FaArrowRight className="hr-btn-icon" />
            </Button>
            <Button
              className="hr-btn-cta-secondary"
              onClick={() => navigate("/hexarobotics/blog")}
            >
              <FaFileAlt className="hr-doc-icon" />
              Read Documentation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;
