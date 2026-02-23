import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import "./HomeHero.css";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <Container className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>Cloud-Powered Structural Biology</span>
          </div>

          <h1 className="hero-title">
            Cryo-EM & Tomography
            <span className="title-highlight"> Made Simple</span>
          </h1>

          <p className="hero-subtitle">
            The field's first comprehensive cloud platform that seamlessly integrates
            parallel processing, expert-guided adaptive training, and cross-package
            interoperability through a single intuitive interface.
          </p>

          <div className="hero-buttons">
            <Button
              className="btn-primary-hero"
              onClick={() => navigate("/practicloud/contactus")}
            >
              Get Started Free
              <FaArrowRight className="btn-icon" />
            </Button>
            <Button
              className="btn-secondary-hero"
              onClick={() => navigate("/practicloud/services")}
            >
              <FaPlay className="play-icon" />
              See How It Works
            </Button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Integrated Packages</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10x</span>
              <span className="stat-label">Faster Processing</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime SLA</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-header">
              <div className="visual-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="visual-title">PractiCloud Dashboard</span>
            </div>
            <div className="visual-content">
              <div className="visual-sidebar">
                <div className="sidebar-item active"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <div className="visual-main">
                <div className="visual-chart"></div>
                <div className="visual-grid">
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-card card-1">
            <span className="floating-icon">🔬</span>
            <span>RELION Ready</span>
          </div>
          <div className="floating-card card-2">
            <span className="floating-icon">⚡</span>
            <span>GPU Optimized</span>
          </div>
          <div className="floating-card card-3">
            <span className="floating-icon">🔒</span>
            <span>Secure</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
