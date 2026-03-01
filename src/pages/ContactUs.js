import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ContactUs.css";
import { FaUsers, FaBuilding, FaHeadset, FaCheckCircle, FaEnvelope } from "react-icons/fa";
import backgroundImage from "./background.png";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ContactUs = () => {
  useDocumentTitle("Contact Us");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  const isHR = location.pathname.startsWith("/hexarobotics");
  const isPC = location.pathname.startsWith("/practicloud");
  const accentColor = isHR ? "#f59e0b" : isPC ? "#3b82f6" : "#14b8a6";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgopqdv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="ct-page">
      {/* Hero Section */}
      {isPC ? (
        <div className="ct-hero-pc">
          <div className="ct-hero-pc-bg">
            <div className="ct-hero-pc-gradient"></div>
            <div className="ct-hero-pc-pattern"></div>
          </div>
          <div className="ct-hero-pc-content">
            <span className="ct-hero-pc-badge">Contact Us</span>
            <h1 className="ct-hero-pc-title">Get In Touch</h1>
            <p className="ct-hero-pc-subtitle">
              Have questions? Reach out to our team for inquiries, support, or partnership opportunities.
            </p>
          </div>
        </div>
      ) : isHR ? (
        <div className="ct-hero">
          <div className="ct-hero-bg">
            <div className="ct-hero-gradient"></div>
            <div className="ct-hero-pattern"></div>
          </div>
          <div className="ct-hero-content">
            <span className="ct-badge" style={{ background: `${accentColor}1f`, borderColor: `${accentColor}4d`, color: accentColor }}>
              <FaEnvelope /> Contact Us
            </span>
            <h1 className="ct-hero-title">Get In Touch</h1>
            <p className="ct-hero-subtitle">
              Have questions? Reach out to our team for inquiries, support, or partnership opportunities.
            </p>
          </div>
        </div>
      ) : (
        <div
          className="ct-hero-img"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          }}
        >
          <h1 className="ct-hero-img-title">Contact Us</h1>
          <p className="ct-hero-img-subtitle">
            Get in touch with our team for inquiries, support, or partnership opportunities
          </p>
        </div>
      )}

      {/* Form Section */}
      <div className="ct-form-section">
        <div className="ct-form-container">
          <h2>Send us a message</h2>
          <p className="ct-form-subtitle">Have questions? We'd love to hear from you.</p>

          {status === "success" ? (
            <div className="ct-success">
              <FaCheckCircle className="ct-success-icon" style={{ color: accentColor }} />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will get back to you shortly.</p>
              <button
                type="button"
                className="ct-submit-btn"
                style={{ background: accentColor }}
                onClick={() => setStatus("")}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-form-row">
                <div className="ct-form-group">
                  <label htmlFor="first_name">First Name *</label>
                  <input type="text" id="first_name" name="first_name" placeholder="John" required />
                </div>
                <div className="ct-form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input type="text" id="last_name" name="last_name" placeholder="Doe" />
                </div>
              </div>

              <div className="ct-form-group">
                <label htmlFor="company">Institution or Company</label>
                <input type="text" id="company" name="company" placeholder="University / Research Lab" />
              </div>

              <div className="ct-form-row">
                <div className="ct-form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="ct-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="ct-form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your research needs..."
                  required
                ></textarea>
              </div>

              {status === "error" && (
                <div className="ct-form-error">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button type="submit" className="ct-submit-btn" style={{ background: accentColor }} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="ct-info">
          <h3>Other Ways to Reach Us</h3>
          <div className="ct-info-item">
            <FaHeadset className="ct-info-icon" style={{ color: accentColor }} />
            <div>
              <strong>Support</strong>
              <p>support@sshexa.com</p>
            </div>
          </div>
          <div className="ct-info-item">
            <FaUsers className="ct-info-icon" style={{ color: accentColor }} />
            <div>
              <strong>Sales</strong>
              <p>sales@sshexa.com</p>
            </div>
          </div>
          <div className="ct-info-item">
            <FaBuilding className="ct-info-icon" style={{ color: accentColor }} />
            <div>
              <strong>Enterprise</strong>
              <p>enterprise@sshexa.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
