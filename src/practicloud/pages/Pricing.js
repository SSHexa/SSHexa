import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaRocket, FaDollarSign, FaChartLine, FaTag } from "react-icons/fa";
import "./Pricing.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const pricingPlans = [
  {
    name: "Starter",
    price: "Pay-as-you-go",
    priceSubtext: "Only pay for what you use",
    description: "Perfect for small labs and individual researchers",
    features: [
      "Cloud-based processing",
      "RELION & CryoSPARC access",
      "Interactive training modules",
      "Email support",
      "5 TB storage included",
      "Standard GPU access",
    ],
    highlighted: false,
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$499",
    priceSubtext: "per month",
    description: "For growing research teams needing more power",
    features: [
      "Everything in Starter",
      "Priority GPU allocation",
      "Advanced hands-on training",
      "Live expert advisory sessions",
      "25 TB storage included",
      "EMAN2 & IMOD integration",
      "Dedicated support",
    ],
    highlighted: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSubtext: "Contact us for pricing",
    description: "For high-throughput centers and institutions",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "Custom workflow automation",
      "On-demand expert consultation",
      "SLA guarantees",
      "SSO & advanced security",
      "Dedicated account manager",
      "Custom integrations",
    ],
    highlighted: false,
    buttonText: "Contact Sales",
  },
];

const benefits = [
  {
    icon: <FaDollarSign />,
    title: "No Upfront Costs",
    description: "Start analyzing immediately without expensive hardware investments or setup fees.",
    color: "#3b82f6"
  },
  {
    icon: <FaChartLine />,
    title: "Cost Optimization",
    description: "Smart GPU selection guidance to balance speed and cost for your specific needs.",
    color: "#8b5cf6"
  },
  {
    icon: <FaRocket />,
    title: "Scale On Demand",
    description: "Access more resources when you need them, scale down when you don't.",
    color: "#06b6d4"
  },
];

const Pricing = () => {
  useDocumentTitle("Pricing - PractiCloud");
  const navigate = useNavigate();

  return (
    <div className="pricing-page">
      {/* Hero section */}
      <div className="pricing-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge"><FaTag /> Pricing</span>
          <h1 className="hero-title">Simple, Transparent Pricing</h1>
          <p className="hero-subtitle">
            Pay only for what you use. No hidden fees, no long-term commitments.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="pricing-section">
        <Container>
          <Row className="pricing-grid justify-content-center">
            {pricingPlans.map((plan, idx) => (
              <Col key={plan.name} md={6} lg={4} className="pricing-col">
                <div className={`pricing-card ${plan.highlighted ? "highlighted" : ""}`}>
                  {plan.highlighted && <div className="popular-badge">Most Popular</div>}
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-price-subtext">{plan.priceSubtext}</div>
                  <p className="plan-description">{plan.description}</p>
                  <ul className="feature-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <span className="check-icon"><FaCheck /></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`plan-button ${plan.highlighted ? "primary" : "secondary"}`}
                    onClick={() => navigate("/practicloud/contactus")}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <Container>
          <div className="benefits-header">
            <span className="benefits-badge">Why Pay-as-You-Go</span>
            <h2 className="benefits-title">Flexible Pricing That Works for You</h2>
          </div>
          <Row className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <Col key={idx} md={4} className="benefit-col">
                <div className="benefit-card">
                  <div
                    className="benefit-icon"
                    style={{ background: `${benefit.color}15`, color: benefit.color }}
                  >
                    {benefit.icon}
                  </div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="pricing-cta">
        <Container>
          <div className="cta-card">
            <h3 className="cta-title">Try PractiCloud Free for 30 Days</h3>
            <p className="cta-description">No credit card required. Full access to all features.</p>
            <Button className="cta-button" onClick={() => navigate("/practicloud/contactus")}>
              Start Your Free Trial
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Pricing;
