import React from "react";
import product2 from "../background.png";
import "./BlogDetail.css";
import videoFile from "./EPSON.mp4";
import { HashLink as Link } from "react-router-hash-link";

const Blog2 = () => {
  return (
    <div className="blog-wrapper">
      {/* HERO */}
      <div className="blog-hero">
        <div className="hero-left">
          <p className="blog-category">BLOGS</p>
          <div className="heading-with-back">
            <Link to="/hexarobotics/blog" className="back-button">←</Link>
            <h1>Designing a Flexible Robotic Platform for Cryo-EM Sample Preparation</h1>
          </div>

          <div className="blog-meta">
            <div className="author"></div>



          </div>
        </div>

        <div className="hero-right">
          <img src={product2} alt="Cryo-EM Robot" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="blog-content-section">
        <aside className="blog-sidebar">
          <h3>In This Article</h3>
          <ul>
            <li><Link smooth to="#what-we-developed">What We Developed</Link></li>
            <li><Link smooth to="#scara-arm">SCARA Robotic Arm</Link></li>
            <li><Link smooth to="#software-framework">Software Framework</Link></li>
            <li><Link smooth to="#modular-hardware">Modular Hardware</Link></li>
            <li><Link smooth to="#time-resolved">Time-Resolved Experiments</Link></li>
            <li><Link smooth to="#our-vision">Our Vision</Link></li>
          </ul>
        </aside>

        <div className="blog-content">
          <p>
            Cryo-EM sample preparation remains one of the most challenging steps in the
            workflow—often requiring expensive, proprietary systems that limit customization
            and innovation. Our goal was to design a robotic platform that is affordable,
            easy to assemble, and flexible enough for the community to extend.
          </p>

          <h2 id="what-we-developed">What We Developed</h2>

          <h3 id="scara-arm">1. SCARA Robotic Arm for Precision Grid Handling</h3>
          <p>
            We adopted a commercial SCARA robotic arm due to its reliability, excellent
            precision, and affordability. This robot provides repeatable grid handling and
            delicate motion control, making it ideal for cryo-EM sample workflows.
          </p>

          <video controls className="blog-detail-video">
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h3 id="software-framework">2. Robotic Software Framework</h3>
          <p>
            We built a modular software framework that enables researchers to customize,
            automate, and streamline protocols with ease. The system supports plug-and-play
            components and allows rapid adaptation of new methods.
          </p>

          <h3 id="modular-hardware">3. Modular, Plug-and-Play Hardware Platform</h3>
          <p>
            The entire platform can be assembled in just a few hours once components are
            sourced. Its modular design allows easy integration of new sensors, freezing
            units, humidity controls, and other experimental hardware.
          </p>

          <h3 id="time-resolved">4. Time-Resolved Robotic Experiments (~150 ms Precision)</h3>
          <p>
            The robotic system supports advanced time-resolved experiments, offering
            high-precision timing and the ability to freeze thin samples suitable for FIB-SEM
            workflows. This enables cutting-edge research at a fraction of traditional cost.
          </p>

          <h2 id="our-vision">Our Vision</h2>
          <p>
            Our mission is to drastically lower the barrier to building high-performance,
            customizable cryo-EM freezing systems. By leveraging widely accessible robotics
            and advanced tools, we aim to empower labs worldwide to innovate, collaborate,
            and push the boundaries of structural biology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
