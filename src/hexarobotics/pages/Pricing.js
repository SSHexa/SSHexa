import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
import { FaRobot, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const pricingPlans = [
  {
    id: 1,
    name: "Silver",
    price: "$15,000",
    description: "Complete robot with basic installation to get you started",
    icon: FaRobot,
    features: [
      "Epson T3 SCARA Robot Arm",
      "3D-Printed Specimen Chamber",
      "Blotting Solenoid System",
      "Acoustic Transducer Sprayer",
      "Cryogen Holder (Vitrobot compatible)",
      "Emergency Stop Button",
      "Basic Software Installation",
      "Hardware Documentation",
    ],
    highlight: false,
  },
  {
    id: 2,
    name: "Gold",
    price: "$22,500",
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
    price: "$30,000",
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
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1 className="pricing-title">
          Pricing <span>Plans</span>
        </h1>
        <p className="pricing-subtitle">
          Choose the package that best fits your laboratory's needs. All plans include
          our open-source VitriFlex platform for cryo-EM grid preparation.
        </p>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.highlight ? "highlighted" : ""}`}
          >
            {plan.highlight && <div className="popular-badge">Most Popular</div>}

            <div className="pricing-icon">
              <plan.icon size={48} />
            </div>

            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-description">{plan.description}</p>

            <div className="plan-price">
              <span className="price">{plan.price}</span>
              <span className="price-period">one-time</span>
            </div>

            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link to="/hexarobotics/contactus" className="plan-cta">
              Get Started
            </Link>
          </div>
        ))}
      </div>

      <div className="pricing-footer">
        <h3>Need a Custom Solution?</h3>
        <p>
          Contact us for enterprise pricing, bulk orders, or specialized configurations
          tailored to your research requirements.
        </p>
        <Link to="/hexarobotics/contactus" className="custom-cta">
          Contact Sales
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
