import "./TrustedBy.css";

const institutions = [
  "Harvard Medical School",
  "Stanford Cryo-EM Center",
  "NIH National Cryo-EM Facility",
  "Pfizer Structural Biology",
  "AstraZeneca R&D",
  "Genentech",
  "Merck Research Labs",
  "UCSF QB3 Institute",
  "Johns Hopkins University",
  "Sanofi Biotech",
];

const TrustedBy = () => (
  <section className="tb-section">
    <div className="tb-label">Trusted by leading institutions</div>
    <div className="tb-track-wrap">
      <div className="tb-track" aria-hidden="true">
        {[...institutions, ...institutions].map((name, i) => (
          <span key={i} className="tb-item">
            {name}
            <span className="tb-dot" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
