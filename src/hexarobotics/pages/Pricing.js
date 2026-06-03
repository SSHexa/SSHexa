import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
import { FaRobot, FaLaptopCode, FaGraduationCap, FaTag } from "react-icons/fa";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const pricingPlans = [
  {
    id: 1,
    name: "Silver",
    price: "$27,500",
    promo: "2026 Introductory Pricing — For Customers and Collaborators Interested in Our Prototype System",
    description: "Complete robot with basic installation to get you started",
    icon: FaRobot,
    features: [
      "Epson T3 SCARA Robot Arm",
      "3D-Printed Specimen Chamber",
      "Blotting Solenoid System",
      "Cryogen Holder (Vitrobot compatible)",
      "Emergency Stop Button",
      "Basic Software Installation",
      "Hardware Documentation",
      "Open platform for early adopters to add and customize modules",
    ],
    highlight: false,
  },
  {
    id: 2,
    name: "Gold",
    price: "$35,000",
    promo: "Early Beta Release — Launching May 2027",
    description: "Everything in Silver plus 3 days of dedicated support",
    icon: FaLaptopCode,
    features: [
      "Everything in Silver Plan",
      "3 Days On-Site Support",
      "System Configuration & Calibration",
      "Protocol Setup & Testing",
      "Hands-On Training Sessions",
      "Troubleshooting Assistance",
      "Remote Support Access",
      "Quick Start Guide Walkthrough",
    ],
    highlight: true,
  },
  {
    id: 3,
    name: "Platinum",
    price: "$60,000",
    promo: "Fully Commercialized Release — Available Q4 2027",
    description: "Everything in Gold plus 1 year of training, consulting & support",
    icon: FaGraduationCap,
    features: [
      "Everything in Gold Plan",
      "1 Year Priority Support",
      "Ongoing Training Sessions",
      "Custom Protocol Development",
      "Quarterly System Check-ups",
      "Protocol Optimization Consulting",
      "Direct Access to Engineers",
      "All Future Software Updates",
      "2 Hardware Upgrades",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  useDocumentTitle("Pricing - Hexa Robotics");

  return (
    <div className="hr-pricing-page">
      {/* Hero */}
      <div className="hr-pricing-hero">
        <div className="hr-page-hero-bg">
          <div className="hr-page-hero-gradient"></div>
          <div className="hr-page-hero-pattern"></div>
        </div>
        <div className="hr-page-hero-content">
          <span className="hr-page-badge"><FaTag /> Pricing</span>
          <h1 className="hr-page-hero-title">Pricing Plans</h1>
          <p className="hr-page-hero-subtitle">
            Choose the package that best fits your laboratory's needs. All plans include
            our VitriFlex platform for cryo-EM grid preparation.
          </p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="hr-pricing-body">
        <div className="hr-pricing-grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`hr-pricing-card ${plan.highlight ? "hr-highlighted" : ""}`}
            >
              {plan.promo && <div className="hr-promo-banner">{plan.promo}</div>}

              {plan.price && (
                <div className="hr-plan-price">
                  <span className="hr-price-currency">$</span>
                  <span className="hr-price-amount">{plan.price.replace("$", "")}</span>
                </div>
              )}

              <ul className="hr-plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={feature}>
                    <span className={`hr-check-icon ${plan.highlight ? "hr-check-gold" : ""}`}>&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/hexarobotics/contactus" className={`hr-plan-cta ${plan.highlight ? "hr-cta-gold" : ""}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="hr-pricing-footer">
          <h3>Need a Custom Solution?</h3>
          <p>
            Contact us for enterprise pricing, bulk orders, or specialized configurations
            tailored to your research requirements.
          </p>
          <Link to="/hexarobotics/contactus" className="hr-custom-cta">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
