import React, { useState } from "react";
import "./Vitriflex.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaCheckCircle, FaExchangeAlt, FaSprayCan, FaClock, FaCubes, FaDollarSign, FaTools } from "react-icons/fa";

import useDocumentTitle from "../../../hooks/useDocumentTitle";

const images = [
  "/Images/vitriflex_spray_action.jpg",
  "/Images/vitriflex_full_system.jpg",
  "/Images/vitriflex_chamber_closeup.jpg",
  "/Images/vitriflex_grid_prep.jpg",
];

const OnGridMixing = () => {
  useDocumentTitle("On-Grid Mixing Module - Hexa Robotics");
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
          <h1 className="hr-vf-topbar-title">On-Grid Mixing Module</h1>
          <p className="hr-vf-topbar-subtitle">
            Two-component mixing directly on the grid for time-resolved cryo-EM
          </p>
        </div>
      </div>

      {/* Product content */}
      <div className="hr-vf-body">
        <div className="hr-vf-box">
          {/* Left: Image Viewer */}
          <div className="hr-vf-image-viewer">
            <button className="hr-vf-arrow hr-vf-arrow-left" onClick={prevImage} aria-label="Previous image">
              <FaChevronLeft />
            </button>

            <img
              src={images[currentIndex]}
              alt="On-Grid Mixing Module"
              className="hr-vf-main-image"
            />

            <button className="hr-vf-arrow hr-vf-arrow-right" onClick={nextImage} aria-label="Next image">
              <FaChevronRight />
            </button>

            {/* Thumbnails */}
            <div className="hr-vf-thumbnails">
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`On-Grid Mixing ${idx}`}
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
              The On-Grid Mixing Module enables efficient two-component reactions
              directly on the cryo-EM grid using minimal sample volumes. A smaller ligand
              is pre-applied to the grid in molar excess, and a larger biomolecule is sprayed
              during the blotting cycle via acoustic-assisted delivery. The interaction occurs
              almost immediately upon contact, outpacing diffusion for higher binding efficiency.
              This approach minimizes unbound particles and reduces background noise, improving
              particle homogeneity for more reliable data collection.
            </p>

            <h3 className="hr-vf-section-title">Main Features</h3>
            <ul className="hr-vf-features">
              <li><FaCheckCircle className="hr-vf-check" /> Acoustic-assisted spray delivery via ultrasonic piezoelectric transducer</li>
              <li><FaCheckCircle className="hr-vf-check" /> Spray-to-plunge delays as short as ~130 ms for sub-second reaction trapping</li>
              <li><FaCheckCircle className="hr-vf-check" /> Pre-wetting with 0.5–3 µL buffer for improved sample distribution and ice uniformity</li>
              <li><FaCheckCircle className="hr-vf-check" /> Two-component mixing directly on grid during blotting cycle</li>
              <li><FaCheckCircle className="hr-vf-check" /> Fast spray mode: sample sprayed during first 0.5s of blotting sequence</li>
              <li><FaCheckCircle className="hr-vf-check" /> Delayed spray mode: incubation period before blotting for controlled reaction timing</li>
              <li><FaCheckCircle className="hr-vf-check" /> Localized binding minimizes unbound particles and background noise</li>
              <li><FaCheckCircle className="hr-vf-check" /> Compatible with standard Vitrobot ethane cups and Nanosoft cryostat</li>
              <li><FaCheckCircle className="hr-vf-check" /> Ethanol cleaning between sprays prevents cross-contamination</li>
              <li><FaCheckCircle className="hr-vf-check" /> Seamless integration with the VitriFlex platform</li>
            </ul>

            <h3 className="hr-vf-section-title">Supported Workflows</h3>
            <div className="hr-vf-workflows">
              <div className="hr-vf-workflow-card">
                <FaExchangeAlt className="hr-vf-workflow-icon" />
                <h4>On-Grid Mixing</h4>
                <p>Pipette one component onto the grid, spray the second during blotting for rapid complex formation</p>
              </div>
              <div className="hr-vf-workflow-card">
                <FaSprayCan className="hr-vf-workflow-icon" />
                <h4>Spray & Pre-Wet</h4>
                <p>Pre-wet the grid with buffer before spraying sample for improved spreading and ice uniformity</p>
              </div>
              <div className="hr-vf-workflow-card">
                <FaClock className="hr-vf-workflow-icon" />
                <h4>Time-Resolved Mixing</h4>
                <p>Capture transient biochemical reactions at sub-second timescales prior to vitrification</p>
              </div>
            </div>

            <h3 className="hr-vf-section-title">Validated Results</h3>
            <div className="hr-vf-results">
              <div className="hr-vf-result-item">
                <span className="hr-vf-result-label">Spike-ACE2 complex</span>
                <span className="hr-vf-result-value">3.7 Å</span>
              </div>
              <div className="hr-vf-result-item">
                <span className="hr-vf-result-label">Alpha7-Bungarotoxin</span>
                <span className="hr-vf-result-value">2.6 Å</span>
              </div>
            </div>

            <h3 className="hr-vf-section-title">Ideal For</h3>
            <div className="hr-vf-tags">
              <span className="hr-vf-tag">Time-Resolved Structural Biology</span>
              <span className="hr-vf-tag">Protein-Protein Interaction Studies</span>
              <span className="hr-vf-tag">Receptor-Ligand Binding Studies</span>
              <span className="hr-vf-tag">Drug Discovery & Biopharma</span>
            </div>

            <h3 className="hr-vf-section-title">Key Advantages</h3>
            <div className="hr-vf-advantages">
              <div className="hr-vf-advantage">
                <FaCubes className="hr-vf-advantage-icon" />
                <div>
                  <strong>Modular Add-On</strong>
                  <p>Integrates seamlessly with the VitriFlex platform — add on-grid mixing capability to your existing setup</p>
                </div>
              </div>
              <div className="hr-vf-advantage">
                <FaDollarSign className="hr-vf-advantage-icon" />
                <div>
                  <strong>Minimal Sample Consumption</strong>
                  <p>Only 1–3 µL per component — enables multiple experiments from limited biological material</p>
                </div>
              </div>
              <div className="hr-vf-advantage">
                <FaTools className="hr-vf-advantage-icon" />
                <div>
                  <strong>No Cross-Contamination</strong>
                  <p>Simple ethanol cleaning between sprays — verified across hundreds of frozen grids with zero carryover</p>
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

export default OnGridMixing;
