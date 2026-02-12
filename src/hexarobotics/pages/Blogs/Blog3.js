import React from "react";
import heroImage from "../EPSON.png";
import robotImage from "../robot.jpg";
import "./BlogDetail.css";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog3 = () => {
  return (
    <div className="blog-wrapper">
      {/* ===== HERO SECTION ===== */}
      <div className="blog-hero">
        <div className="hero-left">
          <p className="blog-category">BLOGS</p>
          <div className="heading-with-back">
            <Link to="/hexarobotics/blog" className="back-button">←</Link>
            <h1>Inside VitriFlex: System Overview and Design of an Open-Source Cryo-EM Preparation Platform</h1>
          </div>

          <div className="blog-meta">
            <div className="author"></div>

            <div className="share">
              <span>SHARE</span>
              <FaTwitter />
              <FaLinkedin />
              <FaFacebook />
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="VitriFlex" />
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="blog-content-section">
        
        {/* SIDEBAR */}
        <aside className="blog-sidebar">
          <h3>In This Article</h3>
          <ul>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#platform">Modularity & Precision</a></li>
            <li><a href="#robot-specs">Robot Specifications</a></li>
            <li><a href="#prep-chamber">3D-Printed Chamber</a></li>
            <li><a href="#workflow">Workflow Design</a></li>
            <li><a href="#importance">Why This Matters</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <div className="blog-content">

          {/* INTRO SECTION */}
          <h2 id="intro">Inside VitriFlex: System Overview and Design</h2>

          <p>
            Modern cryo-EM demands increasingly precise and flexible specimen preparation—but 
            most existing solutions remain expensive, closed, or difficult to modify. VitriFlex 
            was built to challenge this paradigm. Designed as an open-source, modular, and 
            robotics-driven system, VitriFlex empowers researchers to adapt sample-preparation 
            workflows to a wide range of experimental needs.
          </p>

          <p>
            This article walks through the system overview and engineering design behind 
            VitriFlex, explaining how the robot, software, mechanics, and auxiliary modules 
            integrate into a unified, high-performance platform for cryo-EM grid preparation.
          </p>

          {/* PLATFORM SECTION */}
          <h2 id="platform">A Platform Built for Modularity and Precision</h2>

          {/* Robot Image */}
          <img src={robotImage} alt="VitriFlex Robot" className="blog-detail-image" />

          <p>
            At the heart of VitriFlex is a SCARA robotic arm, an industrial-grade manipulator 
            known for repeatability, robustness, and fast vertical motion. Unlike DIY single-axis 
            plungers or proprietary commercial systems, the SCARA robot gives VitriFlex the ability 
            to execute complex, programmable motions with sub-millimeter accuracy—critical for both 
            standard blot-and-plunge workflows and advanced time-resolved applications.
          </p>

          {/* ROBOT SPECS */}
          <h2 id="robot-specs">Core Robot Specifications</h2>

          <ul>
            <li>Model: Epson T3 SCARA</li>
            <li>Repeatability: ±0.020 mm</li>
            <li>Degrees of Freedom: 4</li>
            <li>Vertical Speed: Up to 1 m/s</li>
            <li>Connectivity: USB interface with PC-based control</li>
          </ul>

          <p>
            The robot is mounted on a rigid optical breadboard using a 3D-printed spacer. This 
            setup ensures precise alignment, low vibration, and seamless integration of additional 
            modules. The breadboard acts as a mechanical backbone, allowing researchers to mount 
            custom tools, sensors, and environmental components with complete freedom.
          </p>

          {/* PREP CHAMBER */}
          <h2 id="prep-chamber">A 3D-Printed Specimen Preparation Chamber</h2>

          <p>
            One of the system's most distinctive elements is its custom-designed 3D-printed 
            preparation chamber, engineered for ease of manufacturing and modular expansion. 
            This chamber houses all essential functions required during grid preparation.
          </p>

          <h3>1. Automated Blotting System</h3>
          <ul>
            <li>Holds standard 47 mm filter papers (Whatman 40)</li>
            <li>Push-type solenoid actuation</li>
            <li>Programmable blot duration and timing</li>
            <li>Orientation control for consistent ice thickness</li>
          </ul>

          <h3>2. Non-Contact Sample Application (Ultrasonic Sprayer)</h3>
          <p>
            The onboard piezoelectric transducer delivers a fine aerosol mist—ideal for 
            low-volume delivery, time-resolved mixing, and eliminating nozzle clogging. 
            A removable silicone ring ensures easy cleaning between grids.
          </p>

          <h3>3. Cryogen Holder</h3>
          <p>
            Supports standard Vitrobot cups, custom ethane holders, and Nanosoft cryostats. 
            The plunge path is optimized to prevent sloshing and enable consistent cooling.
          </p>

          <h3>4. Integrated Humidity Control</h3>
          <p>
            Two lateral inlet ports allow humidifiers to maintain ideal humidity—protecting 
            delicate samples from drying or denaturation.
          </p>

          {/* WORKFLOW SECTION */}
          <h2 id="workflow">Workflow-Friendly Design</h2>

          <h3>Load Tweezers Position</h3>
          <p>A wide-open, obstruction-free space ensures safe operator access.</p>

          <h3>Prep Position</h3>
          <p>
            The robot positions the grid for pipetting, aerosol spraying, or hybrid deposition 
            workflows.
          </p>

          <h3>Blot and Plunge</h3>
          <p>
            Once started, VitriFlex autonomously controls blot time, blot force, spray activation, 
            and plunge trajectory—ensuring highly reproducible results.
          </p>

          <h3>Storage Handling</h3>
          <p>
            After vitrification, the robot transfers the grid into a liquid nitrogen storage slot 
            with precise clearance and collision avoidance.
          </p>

          {/* WHY THIS MATTERS */}
          <h2 id="importance">Why This Design Matters</h2>

          <ul>
            <li>✔ Precision without proprietary limitations</li>
            <li>✔ Easy modular expansion</li>
            <li>✔ Lower cost than commercial systems</li>
            <li>✔ Fast assembly and simple repairability</li>
            <li>✔ Fully open-source hardware and software</li>
          </ul>

          {/* CONCLUSION */}
          <h2 id="conclusion">Conclusion</h2>

          <p>
            The Materials and Methods behind VitriFlex reveal a system built from the ground up 
            for accessibility, innovation, and scientific rigor. By combining open-source 
            engineering, high-precision robotics, and a modular design philosophy, VitriFlex sets 
            a new standard for cryo-EM specimen preparation—empowering laboratories to explore new 
            workflows, automate complex protocols, and accelerate structural biology research.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Blog3;
