import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./HomeCTA.css";

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="sh-cta">
      <div className="sh-cta-bg">
        <div className="sh-cta-gradient"></div>
      </div>

      <Container className="sh-cta-container">
        <div className="sh-cta-content">
          <span className="sh-cta-badge">Get In Touch</span>
          <h2 className="sh-cta-title">
            Ready to Accelerate Your
            <span className="sh-cta-accent"> Cryo-EM Research?</span>
          </h2>
          <p className="sh-cta-description">
            From sample preparation to final structure — small proteins,
            membrane proteins, viruses, nanoparticles, and more. Let SS Hexa
            handle it all.
          </p>

          <div className="sh-cta-features">
            <div className="sh-cta-feature">
              <span className="sh-cta-check">&#10003;</span>
              <span>Free feasibility consultation</span>
            </div>
            <div className="sh-cta-feature">
              <span className="sh-cta-check">&#10003;</span>
              <span>End-to-end workflow</span>
            </div>
            <div className="sh-cta-feature">
              <span className="sh-cta-check">&#10003;</span>
              <span>Expert team support</span>
            </div>
          </div>

          <div className="sh-cta-buttons">
            <Button
              className="sh-btn-cta-primary"
              onClick={() => navigate("/contactus")}
            >
              Contact Us
              <FaArrowRight className="sh-btn-arrow" />
            </Button>
            <Button
              className="sh-btn-cta-secondary"
              onClick={() => navigate("/services")}
            >
              View Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;
