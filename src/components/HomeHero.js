import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaRobot, FaFlask, FaCloud } from "react-icons/fa";
import "./HomeHero.css";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="sh-hero-section">
      <div className="sh-hero-bg">
        <div className="sh-hero-gradient"></div>
        <div className="sh-hero-mesh"></div>
      </div>

      <Container className="sh-hero-container">
        <div className="sh-hero-content">
          <div className="sh-hero-badge">
            <span className="sh-badge-dot"></span>
            <span>Complete 360° Cryo-EM Solutions</span>
          </div>

          <h1 className="sh-hero-title">
            From Sample to
            <span className="sh-title-accent"> Structure</span>
          </h1>

          <p className="sh-hero-subtitle">
            SS Hexa delivers end-to-end cryo-EM services through three
            specialized divisions — robotic sample preparation, contract
            research, and cloud-powered data processing.
          </p>

          <div className="sh-hero-buttons">
            <Button
              className="sh-btn-primary"
              onClick={() => navigate("/services")}
            >
              Our Services
              <FaArrowRight className="sh-btn-arrow" />
            </Button>
            <Button
              className="sh-btn-secondary"
              onClick={() => navigate("/about")}
            >
              About SS Hexa
            </Button>
          </div>
        </div>

        <div className="sh-hero-visual">
          <div className="sh-visual-wrapper">
            <div className="sh-workflow-card">
              <div className="sh-workflow-step sh-step-1 sh-step-clickable" onClick={() => navigate("/services#robotics")}>
                <div className="sh-step-icon sh-icon-amber"><FaRobot /></div>
                <div className="sh-step-info">
                  <span className="sh-step-label">Step 1</span>
                  <span className="sh-step-name">Sample Preparation</span>
                  <span className="sh-step-desc">Automated grid preparation with precise control</span>
                </div>
                <span className="sh-step-status sh-status-active">Hexa Robotics <FaArrowRight className="sh-step-arrow" /></span>
              </div>
              <div className="sh-workflow-connector"></div>
              <div className="sh-workflow-step sh-step-2 sh-step-clickable" onClick={() => navigate("/services#cro")}>
                <div className="sh-step-icon sh-icon-green"><FaFlask /></div>
                <div className="sh-step-info">
                  <span className="sh-step-label">Step 2</span>
                  <span className="sh-step-name">EM Imaging & Analysis</span>
                  <span className="sh-step-desc">End-to-end contract research services</span>
                </div>
                <span className="sh-step-status sh-status-active">SS Hexa CRO <FaArrowRight className="sh-step-arrow" /></span>
              </div>
              <div className="sh-workflow-connector"></div>
              <div className="sh-workflow-step sh-step-3 sh-step-clickable" onClick={() => navigate("/services#practicloud")}>
                <div className="sh-step-icon sh-icon-blue"><FaCloud /></div>
                <div className="sh-step-info">
                  <span className="sh-step-label">Step 3</span>
                  <span className="sh-step-name">Data Processing</span>
                  <span className="sh-step-desc">Cloud-powered cryo-EM computing</span>
                </div>
                <span className="sh-step-status sh-status-active">PractiCloud <FaArrowRight className="sh-step-arrow" /></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
