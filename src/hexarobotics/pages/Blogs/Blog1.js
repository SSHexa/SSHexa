import React from "react";
import heroImage from "../EPSON.png";
import "./BlogDetail.css";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const Blog1 = () => {
  return (
    <div className="blog-wrapper">
      {/* ====== HERO SECTION ====== */}
      <div className="blog-hero">
        <div className="hero-left">
          <p className="blog-category">BLOGS</p>
          <div className="heading-with-back">
            <Link to="/hexarobotics/blog" className="back-button">←</Link>
            <h1>Introducing VitriFlex: A Modular, Affordable Cryo-EM Grid Freezing Platform</h1>
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

      {/* ====== CONTENT BELOW HERO ====== */}
      <div className="blog-content-section">

        {/* SIDEBAR */}
        <aside className="blog-sidebar">
          <h3>In This Article</h3>
          <ul>
            <li><Link smooth to="#why-we-built-vitriflex">Why We Built VitriFlex</Link></li>
            <li><Link smooth to="#modular-system">A Modular System for Innovation</Link></li>
            <li><Link smooth to="#flexible-sample-delivery">Flexible Sample Delivery</Link></li>
            <li><Link smooth to="#time-resolved">Time-Resolved Cryo-EM</Link></li>
            <li><Link smooth to="#high-resolution-results">High-Resolution Results</Link></li>
            <li><Link smooth to="#conclusion">Conclusion</Link></li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <div className="blog-content">
          <p>
            Cryo-electron microscopy (cryo-EM) has transformed our ability to visualize biological
            molecules in exquisite detail. But despite remarkable advances in microscopes,
            detectors, and software, specimen preparation remains the most difficult and
            least automated part of the workflow.
          </p>

          <p>
            Generating thin, consistent vitreous ice without damaging samples is challenging.
            Researchers have had to choose between expensive commercial systems with limited
            flexibility or DIY devices that lack reproducibility.
          </p>

          <p><strong>VitriFlex was created to change that.</strong></p>

          <h2 id="why-we-built-vitriflex">Why We Built VitriFlex</h2>

          <p>
            Plunge-freezing systems range from fully manual to fully automated designs. Manual
            plungers are simple and inexpensive but require considerable operator skill. Commercial
            systems like Vitrobot Mark IV offer automation but limit customization. More recent
            systems like Chameleon and VitroJet provide full automation but remain expensive and
            lack modularity. VitriFlex fills the gap by offering:
          </p>

          <ul>
            <li>Industrial-grade Epson T3 SCARA robot (±0.020 mm repeatability)</li>
            <li>Open-source hardware, software, and CAD designs</li>
            <li>3D-printed components (PA6 nylon, ABS, or PETG compatible)</li>
            <li>Full protocol customization via C# GUI</li>
            <li>Accessible price point compared to commercial systems</li>
          </ul>

          <h2 id="modular-system">A Modular System Built for Innovation</h2>
          <p>
            VitriFlex uses an Epson T3 SCARA robot (4 degrees of freedom, 1 m/s vertical speed)
            mounted to an optical breadboard via a 3D-printed spacer. The 3D-printed specimen
            preparation chamber integrates three core components: a blotting device with
            solenoid-actuated filter paper, an ultrasonic piezoelectric transducer for aerosol
            spray delivery, and a cryogen holder compatible with Vitrobot ethane cups.
          </p>

          <h2 id="flexible-sample-delivery">Flexible Sample Delivery</h2>
          <p>
            The platform supports multiple sample application modes:
          </p>

          <h3 id="time-resolved" className="subsection">Time-Resolved Cryo-EM</h3>

          <ul>
            <li><strong>Standard blot-and-plunge:</strong> Pipette application with automated blotting</li>
            <li><strong>Pre-mixing on acoustic transducer:</strong> Sample mixed before spray</li>
            <li><strong>On-grid mixing:</strong> Two-component reactions directly on the grid</li>
            <li><strong>Rapid spray-to-plunge:</strong> ~130 ms delays for time-resolved studies</li>
          </ul>

          <h2 id="high-resolution-results">Validated High-Resolution Results</h2>

          <p>
            All datasets were acquired on a Titan Krios G4 at 300 kV with K3 detector:
          </p>

          <ul>
            <li>Apoferritin: 1.9 Å (octahedral symmetry, 86,387 particles)</li>
            <li>E. coli dGTPase: 2.8 Å (D3 symmetry, 139,988 particles)</li>
            <li>Spike-ACE2 Complex: 3.7 Å (C1 symmetry, on-grid mixing)</li>
            <li>Alpha7-Bungarotoxin: 2.9 Å (C5 symmetry, 246,001 particles)</li>
          </ul>

          <h2 id="conclusion">Conclusion</h2>
          <p>
            VitriFlex combines precision robotics, modular design, and open-source engineering to
            create a powerful, affordable cryo-EM specimen preparation system. It empowers labs to
            explore new workflows while keeping costs low and flexibility high.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
