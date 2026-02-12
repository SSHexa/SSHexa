import { Link } from "react-router-dom";
import { FaArrowLeft, FaRobot, FaCogs, FaClock, FaFlask, FaWrench, FaShieldAlt } from "react-icons/fa";
import "./HexaRoboticsHome.css";

const services = [
  { icon: <FaCogs />, title: "Blot-and-Plunge Vitrification", desc: "Automated blotting with solenoid-actuated filter paper system for reproducible, high-quality cryo-EM grids." },
  { icon: <FaClock />, title: "Time-Resolved Cryo-EM", desc: "Rapid spray-to-plunge freezing with delays as short as ~130 ms for capturing transient reactions." },
  { icon: <FaFlask />, title: "On-Grid Mixing", desc: "Two-component mixing directly on the grid using acoustic-assisted spray delivery." },
  { icon: <FaWrench />, title: "Custom Protocol Development", desc: "Tailored freezing parameters optimized for your specific biological specimens." },
  { icon: <FaRobot />, title: "Custom Automation Solutions", desc: "Preprocessing automation, motion correction workflows, or full pipeline orchestration." },
  { icon: <FaShieldAlt />, title: "Care Service Contract", desc: "Extended uptime guarantees, priority execution, and reliability services." },
];

const HexaRoboticsHome = () => {
  return (
    <div className="hr-app">
      {/* Nav Bar */}
      <nav className="hr-navbar">
        <div className="hr-navbar-inner">
          <Link to="/services#robotics" className="hr-back-link">
            <FaArrowLeft /> Back to SS Hexa
          </Link>
          <div className="hr-brand">
            <img src="/hexarobotics-logo.png" alt="Hexa Robotics" className="hr-logo" />
            <span className="hr-brand-text">SSHexa Robotics</span>
          </div>
          <div className="hr-nav-links">
            <a href="#hr-services">Services</a>
            <a href="#hr-cta">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="hr-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.6)), url('/hexarobotics-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hr-hero-content">
          <h1 className="hr-hero-title">Hexa Robotics</h1>
          <p className="hr-hero-subtitle">
            High-precision robots engineered to accelerate innovation in cryo-EM
            sample preparation and laboratory automation.
          </p>
          <div className="hr-hero-buttons">
            <a href="#hr-services" className="hr-btn-primary">Services</a>
            <a href="#hr-cta" className="hr-btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="hr-services" id="hr-services">
        <h2 className="hr-section-title">Our Services</h2>
        <p className="hr-section-subtitle">Advanced robotics solutions for cryo-EM sample preparation</p>
        <div className="hr-services-grid">
          {services.map((s, i) => (
            <div key={i} className="hr-service-card">
              <div className="hr-service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hr-cta" id="hr-cta">
        <div className="hr-cta-content">
          <h2><em>Need Help With Cryo-EM Sample Preparation?</em></h2>
          <p>
            Small proteins, big proteins, membrane proteins, viruses, nanoparticles,
            vesicles, filaments — we've done it all.
          </p>
          <Link to="/contactus" className="hr-cta-btn">Contact Us</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="hr-footer">
        <div className="hr-footer-links">
          <a href="#hr-services">Services</a>
          <Link to="/contactus">Contact</Link>
          <Link to="/services">SS Hexa Services</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} SSHexa Robotics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HexaRoboticsHome;
