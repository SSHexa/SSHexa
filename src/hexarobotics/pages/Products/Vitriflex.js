import React, { useState } from "react";
import "./Vitriflex.css";
import { Link } from "react-router-dom";

import img1 from "../EPSON.png";   // Main VitriFlex image


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
    <div className="vitriflex-container">

      <Link to="/hexarobotics/products" className="back-button">←</Link>

      <div className="vitriflex-box">

        {/* ==== LEFT: IMAGE VIEWER ==== */}
        <div className="vitriflex-image-viewer">

          <button className="nav-arrow left" onClick={prevImage}>❮</button>

          <img
            src={images[currentIndex]}
            alt="VitriFlex Robot"
            className="vitriflex-main-image"
          />

          <button className="nav-arrow right" onClick={nextImage}>❯</button>

          {/* Thumbnail carousel */}
          <div className="vitriflex-thumbnails">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`VitriFlex ${idx}`}
                className={`thumbnail ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* ==== RIGHT: PRODUCT DETAILS ==== */}
        <div className="vitriflex-details">

          <h1 className="product-title">
            Product <span>Description</span>
          </h1>

          <p className="product-summary">
            VitriFlex is an open-source, modular, and customizable robotic platform for
            cryo-EM grid preparation developed at the National Institute of Environmental
            Health Sciences (NIH). Built around an industrial-grade SCARA robot and 3D-printed
            components, it enables programmable control of grid handling, sample deposition,
            and blotting for both standard and time-resolved workflows.
          </p>

          <h2 className="section-title">Main Features</h2>

          <ul className="feature-list">
            <li>Epson T3 SCARA robot with ±0.020 mm repeatability and 1 m/s vertical speed</li>
            <li>4 degrees of freedom for precise grid handling and complex motions</li>
            <li>Automated blotting with solenoid-actuated 47mm filter paper system</li>
            <li>Ultrasonic piezoelectric transducer for non-contact aerosol spray delivery</li>
            <li>Spray-to-plunge delays as short as ~130 ms for time-resolved studies</li>
            <li>3D-printed modular chamber with humidity control ports</li>
            <li>Open-source C# GUI for customizable timing and protocol sequences</li>
            <li>Compatible with UltrAuFoil, Quantifoil, HexAuFoil, and gold-coated grids</li>
            <li>Supports Vitrobot ethane cups and Nanosoft cryostat configurations</li>
          </ul>

          <h2 className="section-title">Validated Results</h2>

          <div className="ideal-for">
            <p>• Apoferritin: 1.9 Å resolution</p>
            <p>• E. coli dGTPase: 2.8 Å resolution</p>
            <p>• Spike-ACE2 complex: 3.2 Å resolution</p>
            <p>• Alpha7-Bungarotoxin: 2.9 Å resolution</p>
          </div>

          <h2 className="section-title">Ideal For</h2>

          <div className="ideal-for">
            <p>• Cryo-EM Sample Preparation Labs</p>
            <p>• Time-Resolved Structural Biology Research</p>
            <p>• Protein-Protein Interaction Studies</p>
            <p>• University & Government Research Facilities</p>
            <p>• Drug Discovery & Biopharma</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vitriflex;
