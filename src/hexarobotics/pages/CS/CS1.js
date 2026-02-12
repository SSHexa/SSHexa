import React from "react";
import heroImage from "../EPSON.png";        // Hero image at top
import cs1Image from "../Images/CS1.jpg";           // Figure 3 image
import "./CSdetail.css";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";  


const CS1 = () => {
  return (
    <div className="blog-wrapper">

      {/* ===== HERO SECTION ===== */}
      <div className="blog-hero">
        <div className="hero-left">

          <p className="blog-category">CASE STUDY</p>
          <div className="heading-with-back">
            <Link to="/hexarobotics/casestudies" className="back-button">←</Link>
            <h1>Performance of Automated Blot-and-Plunge and Spray-Based Grid Preparation</h1>
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
          <img src={heroImage} alt="Case Study Hero" />
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="blog-content-section">

        <aside className="blog-sidebar">
          <h3>In This Case Study</h3>
          <ul>
            <li><a href="#blot-plunge">Blot & Plunge Results</a></li>
            <li><a href="#results-fig3">Apoferritin Reconstruction</a></li>
            <li><a href="#spray-blot">Spray & Blot Improvements</a></li>
            <li><a href="#mixing">On-Grid Mixing</a></li>
            <li><a href="#challenges">System Limitations</a></li>
            <li><a href="#table3">Freezing Parameters</a></li>
          </ul>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <div className="blog-content">

          {/* SECTION 1 */}
          <h2 id="blot-plunge">Blot-and-Plunge: Evaluation of Grid Quality</h2>

          <p>
            To benchmark the automated vitrification workflow, we tested multiple grid formats—
            including UltrAuFoil, Quantifoil, HexAuFoil, and in-house gold-coated grids. Across this
            range of substrates, the instrument consistently produced grids with thin, well-distributed
            ice and minimal surface contamination. This level of reproducibility indicates that the
            automated mechanics maintain stable blotting conditions independent of grid type.
          </p>

          <p>
            Under the optimized blotting conditions summarized in Table 2, apoferritin particles
            produced a high-quality dataset. Reconstruction yielded a map at approximately 
            <strong>1.9 Å global resolution</strong>, demonstrating that the automated pipeline is
            capable of preparing grids suitable for near-atomic structure determination.
          </p>

          {/* FIGURE */}
          <h2 id="results-fig3">Figure 3: High-Resolution Apoferritin Map</h2>

          <img src={cs1Image} alt="Figure 3 Apoferritin Reconstruction" className="blog-detail-image" />

          <p className="figure-caption">
            <strong>Figure 3.</strong>  
            Cryo-EM reconstruction of apoferritin at 1.9 Å global estimated resolution.  
            Local-resolution analysis, helix visualization, side-chain interpretation using PDB 6RJH,
            and corresponding GSFSC curves from two half-maps are shown.
          </p>

          {/* SECTION 2 */}
          <h2 id="spray-blot">Spray-and-Blot: Enhancing Ice Uniformity</h2>

          <p>
            When droplets are sprayed directly onto a dry grid, the deposited liquid often spreads 
            unevenly and forms a thick central spot surrounded by only a small ring of usable squares. 
            This non-uniform wetting limits the number of areas suitable for imaging and introduces 
            variability in particle concentration across the grid.
          </p>

          <p>
            Introducing a brief pre-wetting step using a small buffer volume (typically 0.5–3 µL)
            substantially improved liquid spreading. The sprayed sample mixes with this thin buffer 
            layer during incubation, resulting in more consistent ice thickness across a larger 
            portion of the grid surface. This simple modification made the spray-based workflow 
            significantly more robust and repeatable.
          </p>

          {/* SECTION 3 */}
          <h2 id="mixing">On-Grid Mixing for Rapid Reaction Trapping</h2>

          <p>
            The spray system also supports small-volume, two-component mixing directly on the grid.
            When a ligand or small molecule is applied first and a larger biomolecule is sprayed 
            during blotting, complex formation occurs almost immediately. This rapid interaction
            minimizes unbound species and promotes a uniform particle population, which is especially 
            important for time-resolved studies.
          </p>

          <p>
            However, diffusion within the pre-applied buffer can create concentration gradients in 
            cases where one reactant is present at very high molar excess. Such gradients may lead to 
            overcrowding or non-uniform distribution in certain regions of the grid. Fine-tuning buffer 
            volumes and reactant ratios is therefore essential for maintaining consistent mixing behavior.
          </p>

          {/* SECTION 4 */}
          <h2 id="challenges">System Limitations and Ongoing Refinements</h2>

          <p>
            Although the automated workflow substantially improves reproducibility, some parameters 
            still require optimization. Spray performance, for example, can vary depending on sample 
            viscosity, droplet placement, and transducer condition. Ongoing efforts focus on reducing 
            required sample volumes—ideally to tens of nanoliters—to support high-throughput experiments 
            with limited material.
          </p>

          <p>
            To ensure reliable operation, the acoustic transducer is cleaned with ethanol after each 
            spray cycle. This prevents droplet misalignment and eliminates cross-sample carryover.
            Across hundreds of vitrified grids, we observed no detectable contamination between 
            samples, confirming the effectiveness of this maintenance step.
          </p>

          {/* SECTION 5 */}
          <h2 id="table3">Freezing Conditions (Table 3)</h2>

          <p>
            Spray-and-blot grids were prepared using the experimental conditions summarized in 
            Table 3 (attached), including sample concentrations, spray duration, blotting times, 
            and the respective grid formats used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CS1;