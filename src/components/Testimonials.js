import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "SS Hexa's end-to-end cryo-EM pipeline reduced our structure determination time from 6 months to 3 weeks. The integration between sample prep and data processing is seamless.",
    name: "Dr. Ananya Mehta",
    role: "Principal Investigator, Structural Biology",
    org: "Stanford University",
    initials: "AM",
    color: "#14b8a6",
  },
  {
    quote:
      "Our cloud platform's AI-accelerated processing gave us publication-quality maps on our first attempt. The cloud infrastructure handles our high-throughput projects without any bottlenecks.",
    name: "Dr. Rajiv Krishnan",
    role: "Senior Scientist, Structural Biology",
    org: "AstraZeneca R&D",
    initials: "RK",
    color: "#3b82f6",
  },
  {
    quote:
      "The Vitriflex robot from Hexa Robotics eliminated sample preparation variability completely. Our success rate went from 60% to over 95% within the first month.",
    name: "Dr. Priya Nair",
    role: "Cryo-EM Facility Director",
    org: "NIH",
    initials: "PN",
    color: "#8b5cf6",
  },
  {
    quote:
      "From sample submission to deposited structure in 18 days. SS Hexa operates like a true partner — responsive, rigorous, and genuinely invested in our research outcomes.",
    name: "Dr. Michael Torres",
    role: "Director of Protein Sciences",
    org: "Genentech",
    initials: "MT",
    color: "#f59e0b",
  },
];

const INTERVAL = 5500;

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState(null); // "left" | "right" | null
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const go = (idx, dir) => {
    setAnimDir(dir);
    setActive(idx);
    resetTimer();
  };

  const prev = () => {
    const idx = (active - 1 + testimonials.length) % testimonials.length;
    go(idx, "right");
  };

  const next = () => {
    const idx = (active + 1) % testimonials.length;
    go(idx, "left");
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
      setAnimDir("left");
    }, INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  // Clear animDir after transition ends
  useEffect(() => {
    const t = setTimeout(() => setAnimDir(null), 400);
    return () => clearTimeout(t);
  }, [active]);

  const t = testimonials[active];

  return (
    <section className="tm-section">
      <div className="tm-header">
        <span className="tm-badge">Client Stories</span>
        <h2 className="tm-title">What researchers say</h2>
        <p className="tm-subtitle">
          Trusted by scientists at leading institutions worldwide.
        </p>
      </div>

      <div className="tm-card-wrap">
        {/* Progress bar */}
        <div className="tm-progress-bar" key={active}>
          <div className="tm-progress-fill"></div>
        </div>

        <div
          className={`tm-card ${animDir ? `tm-slide-${animDir}` : ""}`}
          key={active}
        >
          <FaQuoteLeft className="tm-quote-icon" aria-hidden="true" />
          <blockquote className="tm-quote">"{t.quote}"</blockquote>
          <div className="tm-author">
            <div className="tm-avatar" style={{ background: t.color }}>
              {t.initials}
            </div>
            <div className="tm-author-info">
              <span className="tm-author-name">{t.name}</span>
              <span className="tm-author-role">{t.role}</span>
              <span className="tm-author-org">{t.org}</span>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button className="tm-arrow tm-arrow-prev" onClick={prev} aria-label="Previous testimonial">
          <FaChevronLeft />
        </button>
        <button className="tm-arrow tm-arrow-next" onClick={next} aria-label="Next testimonial">
          <FaChevronRight />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="tm-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`tm-dot ${i === active ? "active" : ""}`}
            onClick={() => go(i, i > active ? "left" : "right")}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
