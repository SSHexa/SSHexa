import React from "react";
import "./Pricing.css";
import "./AcademicPricing.css";
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const academicPlans = [
  {
    id: 1,
    name: "DIY",
    price: "Free",
    description:
      "Build it yourself using our open-source CAD, STL files and control software.",
    features: [
      "Full open-source designs",
      "CAD & STL files",
      "Community documentation",
      "Open platform for module customization",
    ],
    highlight: false,
  },
  {
    id: 2,
    name: "Remote",
    price: "$3–7k",
    description:
      "We help you source all the parts and guide assembly — remotely.",
    features: [
      "Parts sourcing support",
      "Remote build guidance",
      "Basic software installation",
      "Remote support access",
      "Quick start guide walkthrough",
    ],
    highlight: false,
  },
  {
    id: 3,
    name: "Remote + 1-Year Support",
    price: "$5–8k",
    description:
      "Remote setup with a full year of ongoing support.",
    features: [
      "Remote commissioning",
      "1 year of remote support",
      "Troubleshooting assistance",
      "Protocol setup & testing",
      "Software updates during support period",
    ],
    highlight: true,
  },
  {
    id: 4,
    name: "Full Onsite Support",
    price: "$15k",
    description:
      "On-site installation plus two days of hands-on training.",
    features: [
      "On-site installation",
      "2 days of hands-on training",
      "System configuration & calibration",
      "Protocol setup & testing",
      "Troubleshooting assistance",
    ],
    highlight: false,
  },
];

const AcademicPricing = () => {
  useDocumentTitle("Academic Pricing - Hexa Robotics");

  return (
    <div className="hr-pricing-page">
      {/* Hero */}
      <div className="hr-pricing-hero">
        <div className="hr-page-hero-bg">
          <div className="hr-page-hero-gradient"></div>
          <div className="hr-page-hero-pattern"></div>
        </div>
        <div className="hr-page-hero-content">
          <span className="hr-page-badge"><FaTag /> Academic Pricing</span>
          <h1 className="hr-page-hero-title">Service Tiers to Fit Your Lab</h1>
          <p className="hr-page-hero-subtitle">
            Pricing shown is for educational institutions & universities and covers
            our service tiers only. The EPSON SCARA robotic arm and other hardware
            are not included. They can be sourced directly from our recommended vendors,
            and we're happy to coordinate the logistics on your behalf.
          </p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="hr-pricing-body">
        <div className="hr-pricing-grid hr-pricing-grid--academic">
          {academicPlans.map((plan) => (
            <div
              key={plan.id}
              className={`hr-pricing-card ${plan.highlight ? "hr-highlighted" : ""}`}
            >
              <div className="hr-academic-name">{plan.name}</div>

              <div className="hr-plan-price">
                <span className="hr-price-amount">{plan.price}</span>
              </div>

              <p className="hr-academic-desc">{plan.description}</p>

              <ul className="hr-plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className={`hr-check-icon ${plan.highlight ? "hr-check-gold" : ""}`}>&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/hexarobotics/contactus"
                className={`hr-plan-cta ${plan.highlight ? "hr-cta-gold" : ""}`}
              >
                Request Quote
              </Link>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="hr-pricing-footer-row">
          <div className="hr-pricing-footer">
            <h3>Not Sure Which Tier Fits?</h3>
            <p>
              Contact us and we'll help you pick the right level of support for
              your lab and budget.
            </p>
            <Link to="/hexarobotics/contactus" className="hr-custom-cta">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPricing;
