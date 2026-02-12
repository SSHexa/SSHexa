import { Link } from "react-router-dom";
import { FaArrowLeft, FaCloud, FaMicrochip, FaBrain, FaServer, FaShieldAlt, FaBolt, FaUsers, FaLaptopCode, FaCheckCircle } from "react-icons/fa";
import "./PracticloudHome.css";

const features = [
  { icon: <FaMicrochip />, title: "Cryo-EM & Tomography", desc: "Full support for SPA and cryo-ET workflows including IMOD and EMAN2 tomo support.", color: "#3b82f6" },
  { icon: <FaServer />, title: "Multi-Package Support", desc: "Seamless interoperability between RELION, CryoSPARC, EMAN2, and IMOD.", color: "#8b5cf6" },
  { icon: <FaLaptopCode />, title: "Single Intuitive Interface", desc: "One platform for all your cryo-EM workflows — no complex installations needed.", color: "#06b6d4" },
  { icon: <FaBolt />, title: "Cost-Optimized Computing", desc: "Pay-as-you-go with intelligent GPU selection. Accessible to labs of all sizes.", color: "#10b981" },
  { icon: <FaUsers />, title: "Human + AI Support", desc: "Live expert sessions combined with AI-powered guidance for optimal results.", color: "#f59e0b" },
  { icon: <FaBrain />, title: "Adaptive AI Learning", desc: "Self-learning modules that reduce skill acquisition from months to weeks.", color: "#ef4444" },
  { icon: <FaShieldAlt />, title: "Enterprise Security", desc: "Your data is encrypted, private, and compliant with institutional standards.", color: "#6366f1" },
  { icon: <FaCloud />, title: "Instant Processing", desc: "Dynamic resource allocation — process small datasets or large-scale cryo-EM data instantly.", color: "#0ea5e9" },
];

const PracticloudHome = () => {
  return (
    <div className="pc-app">
      {/* Nav Bar */}
      <nav className="pc-navbar">
        <div className="pc-navbar-inner">
          <Link to="/services#practicloud" className="pc-back-link">
            <FaArrowLeft /> Back to SS Hexa
          </Link>
          <div className="pc-brand">
            <img src="/practicloud-logo.png" alt="PractiCloud" className="pc-logo" />
            <span className="pc-brand-text">PractiCloud</span>
          </div>
          <div className="pc-nav-links">
            <a href="#pc-features">Features</a>
            <a href="#pc-cta">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pc-hero">
        <div className="pc-hero-content">
          <span className="pc-badge">Cloud-Powered Structural Biology</span>
          <h1 className="pc-hero-title">
            Cryo-EM & Tomography<br />Made <span className="pc-gradient-text">Simple</span>
          </h1>
          <p className="pc-hero-subtitle">
            The field's first comprehensive cloud platform that seamlessly integrates
            parallel processing, AI-driven adaptive training, and cross-package
            interoperability — making advanced cryo-EM accessible to every lab.
          </p>
          <div className="pc-hero-stats">
            <div className="pc-stat"><span className="pc-stat-num">500+</span><span className="pc-stat-label">Researchers</span></div>
            <div className="pc-stat"><span className="pc-stat-num">50+</span><span className="pc-stat-label">Institutions</span></div>
            <div className="pc-stat"><span className="pc-stat-num">10x</span><span className="pc-stat-label">Faster Analysis</span></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pc-features" id="pc-features">
        <h2 className="pc-section-title">Platform Capabilities</h2>
        <p className="pc-section-subtitle">Everything you need for structural biology</p>
        <div className="pc-features-grid">
          {features.map((f, i) => (
            <div key={i} className="pc-feature-card">
              <div className="pc-feature-icon" style={{ backgroundColor: f.color }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pc-cta" id="pc-cta">
        <div className="pc-cta-content">
          <h2>Democratizing Structural Biology for Every Lab</h2>
          <p>
            Whether you're a small academic lab or a large pharmaceutical company,
            PractiCloud gives you the tools to accelerate your cryo-EM research.
          </p>
          <div className="pc-cta-checks">
            <span><FaCheckCircle /> 30-day free trial</span>
            <span><FaCheckCircle /> No credit card required</span>
            <span><FaCheckCircle /> Full platform access</span>
          </div>
          <div className="pc-cta-buttons">
            <Link to="/contactus" className="pc-btn-primary">Get Started Free</Link>
            <Link to="/services#practicloud" className="pc-btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pc-footer">
        <p>&copy; {new Date().getFullYear()} PractiCloud | Powered by SS Hexa</p>
      </footer>
    </div>
  );
};

export default PracticloudHome;
