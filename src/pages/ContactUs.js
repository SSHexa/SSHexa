import { useState } from "react";
import "./ContactUs.css";
import backgroundImage from "./background.png";
import { FaUsers, FaBuilding, FaHeadset, FaCheckCircle } from "react-icons/fa";

const ContactUs = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="contact-page">
      {/* Hero Section */}
      <div
        className="contact-hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries, support, or partnership opportunities</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="contact-form-section">
        <div className="contact-form-container">
          <h2>Send us a message</h2>
          <p className="form-subtitle">Have questions? We'd love to hear from you.</p>

          {status === "success" ? (
            <div className="form-success">
              <FaCheckCircle className="success-icon" />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will get back to you shortly.</p>
              <button
                type="button"
                className="submit-btn"
                onClick={() => setStatus("")}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name *</label>
                  <input type="text" id="first_name" name="first_name" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input type="text" id="last_name" name="last_name" placeholder="Doe" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Institution or Company</label>
                <input type="text" id="company" name="company" placeholder="University / Research Lab" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="form-group">
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
                <div className="form-error">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="contact-info">
          <h3>Other Ways to Reach Us</h3>
          <div className="info-item">
            <FaHeadset className="info-icon" />
            <div>
              <strong>Support</strong>
              <p>support@sshexa.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaUsers className="info-icon" />
            <div>
              <strong>Sales</strong>
              <p>sales@sshexa.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaBuilding className="info-icon" />
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
