import React, { useState } from "react";
import "./Vitriflex.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaCheckCircle, FaFlask, FaSprayCan, FaClock, FaExchangeAlt, FaCubes, FaDollarSign, FaTools } from "react-icons/fa";

import img1 from "../EPSON.png";

const images = [img1];

const Vitriflex = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hr-vf-page">
      {/* Top bar */}
      <div className="hr-vf-topbar">
        <div className="hr-vf-topbar-bg">
          <div className="hr-page-hero-gradient"></div>
          <div className="hr-page-hero-pattern"></div>
        </div>
        <div className="hr-vf-topbar-content">
          <Link to="/hexarobotics/products" className="hr-vf-back">
            <FaArrowLeft /> Back to Products
          </Link>
          <h1 className="hr-vf-topbar-title">VitriFlex</h1>
          <p className="hr-vf-topbar-subtitle">
            Modular robotic platform for cryo-EM grid preparation
          </p>
        </div>
      </div>

      {/* Product content */}
      <div className="hr-vf-body">
        <div className="hr-vf-box">
          {/* Left: Image Viewer */}
          <div className="hr-vf-image-viewer">
            <button className="hr-vf-arrow hr-vf-arrow-left" onClick={prevImage}>
              <FaChevronLeft />
            </button>

            <img
              src={images[currentIndex]}
              alt="VitriFlex Robot"
              className="hr-vf-main-image"
            />

            <button className="hr-vf-arrow hr-vf-arrow-right" onClick={nextImage}>
              <FaChevronRight />
            </button>

            {/* Thumbnails */}
            <div className="hr-vf-thumbnails">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`VitriFlex ${idx}`}
                  className={`hr-vf-thumb ${idx === currentIndex ? "hr-vf-thumb-active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="hr-vf-details">
            <h2 className="hr-vf-title">
              Product <span>Description</span>
            </h2>

            <p className="hr-vf-summary">
              VitriFlex is a modular and fully customizable robotic platform for
              cryo-EM grid preparation. Built around an industrial-grade SCARA robot and 3D-printed
              components, it enables programmable control of grid handling, sample deposition,
              and blotting for both standard and time-resolved workflows.
            </p>

            <h3 className="hr-vf-section-title">Main Features</h3>
            <ul className="hr-vf-features">
              <li><FaCheckCircle className="hr-vf-check" /> Epson T3 SCARA robot with ±0.020 mm repeatability and 1 m/s vertical speed</li>
              <li><FaCheckCircle className="hr-vf-check" /> 4 degrees of freedom for precise grid handling and complex motions</li>
              <li><FaCheckCircle className="hr-vf-check" /> Automated blotting with solenoid-actuated 47mm filter paper system</li>
              <li><FaCheckCircle className="hr-vf-check" /> Ultrasonic piezoelectric transducer for non-contact aerosol spray delivery</li>
              <li><FaCheckCircle className="hr-vf-check" /> Spray-to-plunge delays as short as ~130 ms for time-resolved studies</li>
              <li><FaCheckCircle className="hr-vf-check" /> 3D-printed modular chamber with humidity control ports</li>
              <li><FaCheckCircle className="hr-vf-check" /> Intuitive C# GUI for customizable timing and protocol sequences</li>
              <li><FaCheckCircle className="hr-vf-check" /> Compatible with UltrAuFoil, Quantifoil, HexAuFoil, and gold-coated grids</li>
              <li><FaCheckCircle className="hr-vf-check" /> Supports Vitrobot ethane cups and Nanosoft cryostat configurations</li>
              <li><FaCheckCircle className="hr-vf-check" /> Automated grid transfer from ethane to LN2 with hands-free storage</li>
              <li><FaCheckCircle className="hr-vf-check" /> Digital run logging — date, time, grid ID, sample, and all timing parameters</li>
              <li><FaCheckCircle className="hr-vf-check" /> Physical emergency-stop button for operator safety</li>
            </ul>

            <h3 className="hr-vf-section-title">Supported Workflows</h3>
            <div className="hr-vf-workflows">
              <div className="hr-vf-workflow-card">
                <FaFlask className="hr-vf-workflow-icon" />
                <h4>Blot & Plunge</h4>
                <p>Conventional blotting with precise timing control for standard single-particle cryo-EM</p>
              </div>
              <div className="hr-vf-workflow-card">
                <FaSprayCan className="hr-vf-workflow-icon" />
                <h4>Fast Spray</h4>
                <p>Sample sprayed during blotting for rapid specimen application with minimal delay</p>
              </div>
              <div className="hr-vf-workflow-card">
                <FaClock className="hr-vf-workflow-icon" />
                <h4>Delayed Spray</h4>
                <p>Incubation period before blotting for controlled reaction timing</p>
              </div>
              <div className="hr-vf-workflow-card">
                <FaExchangeAlt className="hr-vf-workflow-icon" />
                <h4>On-Grid Mixing</h4>
                <p>Two-component mixing directly on the grid for protein-protein interaction studies</p>
              </div>
            </div>

            <h3 className="hr-vf-section-title">Validated Results</h3>
            <div className="hr-vf-results">
              <div className="hr-vf-result-item">
                <span className="hr-vf-result-label">Apoferritin</span>
                <span className="hr-vf-result-value">1.9 Å</span>
              </div>
              <div className="hr-vf-result-item">
                <span className="hr-vf-result-label">E. coli dGTPase</span>
                <span className="hr-vf-result-value">2.8 Å</span>
              </div>
              <div className="hr-vf-result-item">
                <span className="hr-vf-result-label">Spike-ACE2 complex</span>
                <span className="hr-vf-result-value">3.2 Å</span>
              </div>
              <div className="hr-vf-result-item">
                <span className="hr-vf-result-label">Alpha7-Bungarotoxin</span>
                <span className="hr-vf-result-value">2.9 Å</span>
              </div>
            </div>

            <h3 className="hr-vf-section-title">Ideal For</h3>
            <div className="hr-vf-tags">
              <span className="hr-vf-tag">Cryo-EM Sample Preparation Labs</span>
              <span className="hr-vf-tag">Time-Resolved Structural Biology</span>
              <span className="hr-vf-tag">Protein-Protein Interaction Studies</span>
              <span className="hr-vf-tag">University & Government Research</span>
              <span className="hr-vf-tag">Drug Discovery & Biopharma</span>
            </div>

            <h3 className="hr-vf-section-title">Key Advantages</h3>
            <div className="hr-vf-advantages">
              <div className="hr-vf-advantage">
                <FaCubes className="hr-vf-advantage-icon" />
                <div>
                  <strong>Complete Turnkey Package</strong>
                  <p>Fully assembled system with CAD-designed components, 3D-printed parts, wiring, and pre-configured software — ready to deploy</p>
                </div>
              </div>
              <div className="hr-vf-advantage">
                <FaDollarSign className="hr-vf-advantage-icon" />
                <div>
                  <strong>Significant Cost Savings</strong>
                  <p>Substantially lower cost compared to commercial systems like Vitrobot, Chameleon, and VitroJet</p>
                </div>
              </div>
              <div className="hr-vf-advantage">
                <FaTools className="hr-vf-advantage-icon" />
                <div>
                  <strong>Easy Setup & Operation</strong>
                  <p>Minimal technical expertise required — 3D-printed components, plug-and-play SCARA robot, and intuitive GUI</p>
                </div>
              </div>
            </div>

            <Link to="/hexarobotics/contactus" className="hr-vf-cta">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitriflex;
