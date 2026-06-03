import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaCog } from "react-icons/fa";
import "./HomeHero.css";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="hr-hero-section">
      <div className="hr-hero-background">
        <div className="hr-hero-gradient"></div>
        <div className="hr-hero-grid-pattern"></div>
      </div>

      <Container className="hr-hero-container">
        <div className="hr-hero-content">
          <div className="hr-hero-badge">
            <FaCog className="hr-badge-spin" />
            <span>Precision Robotics for Cryo-EM</span>
          </div>

          <h1 className="hr-hero-title">
            Automated Sample
            <span className="hr-title-highlight"> Preparation</span>
            <span className="hr-title-sub">Redefined.</span>
          </h1>

          <p className="hr-hero-subtitle">
            Automated cryo-EM grid prep, with our platform based on the VitriFlex system.
          </p>

          <div className="hr-hero-buttons">
            <Button
              className="hr-btn-primary-hero"
              onClick={() => navigate("/hexarobotics/products")}
            >
              View Products
              <FaArrowRight className="hr-btn-icon" />
            </Button>
            <Button
              className="hr-btn-secondary-hero"
              onClick={() => navigate("/hexarobotics/contactus")}
            >
              Request a Demo
            </Button>
          </div>

        </div>

        <div className="hr-hero-visual">
          <div className="hr-product-showcase">
            <div className="hr-product-glow"></div>
            <img
              src="/Images/vitriflex_full_system.jpg"
              alt="VitriFlex Cryo-EM Robot"
              className="hr-product-image"
            />
          </div>
          <div className="hr-floating-tag hr-tag-1">
            <span className="hr-tag-dot hr-dot-green"></span>
            <span>Automated Vitrification</span>
          </div>
          <div className="hr-floating-tag hr-tag-2">
            <span className="hr-tag-dot hr-dot-amber"></span>
            <span>Modular Hardware</span>
          </div>
          <div className="hr-floating-tag hr-tag-3">
            <span className="hr-tag-dot hr-dot-blue"></span>
            <span>Precision Control</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
