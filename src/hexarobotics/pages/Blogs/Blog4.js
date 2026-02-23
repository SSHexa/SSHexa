import React from "react";
import heroImage from "../background.png";
import "./BlogDetail.css";

import { Link } from "react-router-dom";

const Blog4 = () => {
  return (
    <div className="blog-wrapper">
      {/* ====== HERO SECTION ====== */}
      <div className="blog-hero">
        <div className="hero-left">
          <p className="blog-category">BLOGS</p>
          <div className="heading-with-back">
            <Link to="/hexarobotics/blog" className="back-button">←</Link>
            <h1>The Air-Water Interface Problem in Cryo-EM and How to Solve It</h1>
          </div>

          <div className="blog-meta">
            <div className="author">
              <div className="author-icon">👤</div>
              <p>JANUARY 2026 • SSHexa Robotics</p>
            </div>



          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Air-Water Interface" />
        </div>
      </div>

      {/* ====== CONTENT BELOW HERO ====== */}
      <div className="blog-content-section">

        {/* SIDEBAR */}
        <aside className="blog-sidebar">
          <h3>In This Article</h3>
          <ul>
            <li><a href="#the-problem">The Problem</a></li>
            <li><a href="#why-it-matters">Why It Matters</a></li>
            <li><a href="#solutions">Solutions</a></li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <div className="blog-content">
          <h2 id="the-problem">The Problem</h2>
          <p>
            When preparing cryo-EM samples, proteins suspended in thin aqueous films
            are exposed to the air-water interface (AWI). This interface acts like a
            sticky surface where particles accumulate and often denature. Within
            milliseconds of sample application, proteins migrate to this boundary and
            may adopt preferred orientations or unfold entirely.
          </p>

          <h2 id="why-it-matters">Why It Matters</h2>
          <p>
            AWI damage leads to several problems: loss of particle integrity, preferred
            orientation bias limiting 3D reconstruction quality, and reduced particle
            density in usable areas. Studies show that even robust proteins like
            apoferritin can be affected, while fragile complexes may be completely
            destroyed at the interface.
          </p>

          <h2 id="solutions">Solutions</h2>
          <p>
            Several strategies help minimize AWI effects:
          </p>
          <ul>
            <li><strong>Rapid freezing:</strong> Spray-to-plunge times under 200 ms reduce interface exposure</li>
            <li><strong>Surfactants:</strong> Low concentrations of detergents can protect particles</li>
            <li><strong>Graphene oxide grids:</strong> Provide a supporting surface away from the interface</li>
            <li><strong>Thicker ice:</strong> Particles in the middle experience less AWI contact</li>
          </ul>
          <p>
            VitriFlex enables spray-to-plunge delays as short as ~130 ms, significantly
            reducing the time particles spend at the damaging air-water interface before
            vitrification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
