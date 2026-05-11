import { Link } from "react-router-dom";
import {
  FaFlask, FaRobot, FaMicroscope, FaCloud, FaArrowRight,
} from "react-icons/fa";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "./Services1.css";

const Services1 = () => {
  useDocumentTitle("CRO Services - SS Hexa");

  return (
    <div className="s1-page">
      {/* HERO */}
      <div className="s1-hero">
        <div className="s1-hero-bg">
          <div className="s1-hero-gradient"></div>
          <div className="s1-hero-mesh"></div>
        </div>
        <div className="s1-hero-content">
          <span className="s1-badge"><FaFlask /> End-to-End CRO Services</span>
          <h1 className="s1-hero-title">
            Full-Service Cryo-EM, Handled <span className="s1-title-accent">End-to-End</span>
          </h1>
          <p className="s1-hero-subtitle">
            Send us your sample. Receive a structure. We own every step in between —
            preparation, imaging, and analysis — so you can focus on the science.
          </p>
          <div className="s1-hero-stats">
            <div className="s1-hero-stat">
              <span className="s1-stat-value">1.9 Å</span>
              <span className="s1-stat-label">Best Resolution</span>
            </div>
            <div className="s1-hero-stat-divider"></div>
            <div className="s1-hero-stat">
              <span className="s1-stat-value">~130 ms</span>
              <span className="s1-stat-label">Spray-to-Plunge</span>
            </div>
            <div className="s1-hero-stat-divider"></div>
            <div className="s1-hero-stat">
              <span className="s1-stat-value">300 kV</span>
              <span className="s1-stat-label">Titan Krios</span>
            </div>
            <div className="s1-hero-stat-divider"></div>
            <div className="s1-hero-stat">
              <span className="s1-stat-value">100%</span>
              <span className="s1-stat-label">In-House</span>
            </div>
          </div>
        </div>
      </div>

      {/* PIPELINE OVERVIEW — at-a-glance only */}
      <section className="s1-pipeline-section">
        <div className="s1-section-head">
          <span className="s1-section-tag">At a Glance</span>
          <h2 className="s1-section-title">A Single Pipeline. Three Stages.</h2>
          <p className="s1-section-sub">
            Everything happens under one roof, with one team accountable from start to finish.
          </p>
        </div>

        <div className="s1-workflow-card">
          {/* STAGE 01 — HEXA ROBOTICS */}
          <div className="s1-workflow-step s1-step-amber">
            <div className="s1-step-number">01</div>
            <div className="s1-step-icon s1-icon-amber"><FaRobot /></div>
            <div className="s1-step-info">
              <span className="s1-step-label">Sample Preparation</span>
              <h3 className="s1-step-name">Hexa Robotics</h3>
              <p className="s1-step-desc">
                Automated, reproducible cryo-EM grid preparation on our in-house VitriFlex platform —
                purpose-built to eliminate the variability that plagues manual and closed commercial systems.
              </p>

              <div className="s1-step-subtiles">
                <div className="s1-subtile">
                  <h4>Precision & Reproducibility</h4>
                  <p>
                    SCARA robotics with ±0.020 mm repeatability, automated blotting, and digital run
                    logging. Every grid is handled identically — operator variability engineered out.
                  </p>
                </div>
                <div className="s1-subtile">
                  <h4>Advanced Workflows</h4>
                  <p>
                    Time-resolved spray-to-plunge as fast as ~130 ms and two-component on-grid mixing
                    for receptor-ligand and protein-protein studies. Modular hardware adapts to any specimen.
                  </p>
                </div>
              </div>

              <Link to="/hexarobotics" className="s1-step-cta s1-cta-amber">
                Hexa Robotics <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="s1-workflow-connector"></div>

          {/* STAGE 02 — IN-HOUSE EM IMAGING */}
          <div className="s1-workflow-step s1-step-green">
            <div className="s1-step-number">02</div>
            <div className="s1-step-icon s1-icon-green"><FaMicroscope /></div>
            <div className="s1-step-info">
              <span className="s1-step-label">EM Imaging</span>
              <h3 className="s1-step-name">In-House Microscopy</h3>
              <p className="s1-step-desc">
                High-resolution data acquisition on our in-house Titan Krios G4, paired with smart
                screening and real-time processing for fast, consistent datasets.
              </p>

              <div className="s1-step-subtiles">
                <div className="s1-subtile">
                  <h4>Titan Krios G4</h4>
                  <p>
                    300 kV TEM with Gatan K3 direct electron detector and BioContinuum energy filter.
                    Counted dose-fractionation for radiation-sensitive specimens — the current gold
                    standard for single-particle work.
                  </p>
                </div>
                <div className="s1-subtile">
                  <h4>Smart Collection</h4>
                  <p>
                    SmartScope automated grid screening for rapid quality assessment, real-time motion
                    correction in CryoSPARC Live, and overnight runs of 4,000–30,000+ movies with
                    consistent quality.
                  </p>
                </div>
              </div>

              <span className="s1-step-tag">In-House Facility</span>
            </div>
          </div>

          <div className="s1-workflow-connector"></div>

          {/* STAGE 03 — PRACTICLOUD */}
          <div className="s1-workflow-step s1-step-blue">
            <div className="s1-step-number">03</div>
            <div className="s1-step-icon s1-icon-blue"><FaCloud /></div>
            <div className="s1-step-info">
              <span className="s1-step-label">Data Processing</span>
              <h3 className="s1-step-name">PractiCloud</h3>
              <p className="s1-step-desc">
                GPU-accelerated processing on our PractiCloud platform, guided by experts from raw
                micrographs to publication-ready structures.
              </p>

              <div className="s1-step-subtiles">
                <div className="s1-subtile">
                  <h4>GPU-Accelerated Compute</h4>
                  <p>
                    On-demand H100/A100 GPU clusters. Real-time motion correction, CTF estimation,
                    and AI particle picking with Topaz and crYOLO. Scale up on demand — no hardware
                    to manage.
                  </p>
                </div>
                <div className="s1-subtile">
                  <h4>Expert Analysis</h4>
                  <p>
                    Heterogeneous and non-uniform refinement, symmetry expansion, focused
                    classification, and reference-based motion correction. Atomic model building
                    in Phenix, Coot, and ISOLDE — logged, versioned, audit-ready.
                  </p>
                </div>
              </div>

              <Link to="/practicloud" className="s1-step-cta s1-cta-blue">
                PractiCloud <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW TIMELINE — engagement model */}
      <section className="s1-timeline-section">
        <div className="s1-section-head">
          <span className="s1-section-tag">Engagement Model</span>
          <h2 className="s1-section-title">From First Call to Final Structure</h2>
          <p className="s1-section-sub">
            What working with SS Hexa actually looks like.
          </p>
        </div>
        <div className="s1-timeline">
          <div className="s1-timeline-item">
            <div className="s1-timeline-marker">1</div>
            <div className="s1-timeline-content">
              <h4>Discovery Call</h4>
              <p>We discuss your sample, goals, and timeline. No commitment — just an honest assessment of feasibility and approach.</p>
            </div>
          </div>
          <div className="s1-timeline-item">
            <div className="s1-timeline-marker">2</div>
            <div className="s1-timeline-content">
              <h4>NDA & Project Plan</h4>
              <p>We finalize confidentiality and a clear plan with milestones, deliverables, and pricing.</p>
            </div>
          </div>
          <div className="s1-timeline-item">
            <div className="s1-timeline-marker">3</div>
            <div className="s1-timeline-content">
              <h4>Sample Receipt & QC</h4>
              <p>Your sample arrives at our facility. We assess quality, document conditions, and begin protocol optimization.</p>
            </div>
          </div>
          <div className="s1-timeline-item">
            <div className="s1-timeline-marker">4</div>
            <div className="s1-timeline-content">
              <h4>Grids, Screening, Collection</h4>
              <p>VitriFlex prepares grids, SmartScope screens them, and overnight Titan Krios runs collect the dataset.</p>
            </div>
          </div>
          <div className="s1-timeline-item">
            <div className="s1-timeline-marker">5</div>
            <div className="s1-timeline-content">
              <h4>Processing & Analysis</h4>
              <p>PractiCloud processing — particle picking, classification, refinement, and atomic model building.</p>
            </div>
          </div>
          <div className="s1-timeline-item">
            <div className="s1-timeline-marker">6</div>
            <div className="s1-timeline-content">
              <h4>Final Delivery</h4>
              <p>Publication-ready maps, atomic models, raw and processed data, and a detailed report covering every parameter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="s1-cta-section">
        <h2 className="s1-cta-title">Ready to start your project?</h2>
        <p className="s1-cta-sub">
          Tell us about your sample and your goals. We'll respond within one business day with a
          feasibility assessment and next steps.
        </p>
        <Link to="/contactus" className="s1-cta-btn">
          Contact Us <FaArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default Services1;
