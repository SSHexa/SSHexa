import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaCog, FaThermometerHalf, FaMicrochip, FaFlask } from "react-icons/fa";
import productImage from "../pages/EPSON.png";
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
            Purpose-built robotic systems for cryo-EM grid preparation.
            Achieve reproducible, high-quality vitrification with our
            open-source VitriFlex platform.
          </p>

          <div className="hr-hero-buttons">
            <Button
              className="hr-btn-primary-hero"
              onClick={() => navigate("/hexarobotics/products")}
            >
              View VitriFlex
              <FaArrowRight className="hr-btn-icon" />
            </Button>
            <Button
              className="hr-btn-secondary-hero"
              onClick={() => navigate("/hexarobotics/contactus")}
            >
              Request a Demo
            </Button>
          </div>

          <div className="hr-hero-specs">
            <div className="hr-spec-item">
              <FaThermometerHalf className="hr-spec-icon" />
              <div className="hr-spec-text">
                <span className="hr-spec-value">&plusmn;0.1&deg;C</span>
                <span className="hr-spec-label">Temperature Control</span>
              </div>
            </div>
            <div className="hr-spec-divider"></div>
            <div className="hr-spec-item">
              <FaMicrochip className="hr-spec-icon" />
              <div className="hr-spec-text">
                <span className="hr-spec-value">&lt;3 min</span>
                <span className="hr-spec-label">Grid Prep Time</span>
              </div>
            </div>
            <div className="hr-spec-divider"></div>
            <div className="hr-spec-item">
              <FaFlask className="hr-spec-icon" />
              <div className="hr-spec-text">
                <span className="hr-spec-value">99.5%</span>
                <span className="hr-spec-label">Reproducibility</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hr-hero-visual">
          <div className="hr-product-showcase">
            <div className="hr-product-glow"></div>
            <img
              src={productImage}
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
            <span>Open Source Hardware</span>
          </div>
          <div className="hr-floating-tag hr-tag-3">
            <span className="hr-tag-dot hr-dot-blue"></span>
            <span>Modular Design</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
