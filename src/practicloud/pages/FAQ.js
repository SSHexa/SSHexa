import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQ.css";
import backgroundImage from "./background.png";

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What do I need to use PractiCloud?",
        a: "Just a computer with internet access and a web browser. PractiCloud is a fully cloud-native platform—no installations, HPC setup, or specialized hardware required. Create an account and start analyzing immediately."
      },
      {
        q: "How do I start my free trial?",
        a: "Click 'Start Free Trial' and create an account. You'll get 30 days of full access to all features including both Cryo-EM and tomography tools, with no credit card required."
      },
      {
        q: "What file formats does PractiCloud support?",
        a: "PractiCloud supports all major file formats including MRC, TIFF, EER for Cryo-EM, and tilt series formats for tomography. Our automated interoperability handles data transitions between RELION, CryoSPARC, EMAN2, and IMOD seamlessly."
      },
    ]
  },
  {
    category: "Cryo-EM & Tomography",
    questions: [
      {
        q: "Does PractiCloud support cryo-electron tomography?",
        a: "Yes! PractiCloud provides full support for cryo-electron tomography (cryo-ET) alongside single particle analysis. From tilt series acquisition to subtomogram averaging, we support complete tomography workflows using IMOD, EMAN2 tomo, and other leading tools."
      },
      {
        q: "Can I do both SPA and tomography in one project?",
        a: "Absolutely. PractiCloud's unified interface allows you to work on both single particle analysis (SPA) and tomography projects. Switch between techniques seamlessly while maintaining all your data in one organized workspace."
      },
      {
        q: "What tomography tools are available?",
        a: "We currently support IMOD for tilt series alignment and reconstruction, EMAN2 for subtomogram averaging, and integration with other popular tomography pipelines. More tools are being added based on community feedback."
      },
      {
        q: "Are more techniques coming to PractiCloud?",
        a: "Yes! We're committed to expanding PractiCloud into a comprehensive structural biology platform. Additional imaging and analysis techniques are on our roadmap. Stay tuned for announcements about new capabilities."
      },
    ]
  },
  {
    category: "Platform & Features",
    questions: [
      {
        q: "Which analysis packages are available?",
        a: "PractiCloud provides access to RELION, CryoSPARC, EMAN2 for Cryo-EM, and IMOD, EMAN2 tomo for tomography. Our platform intelligently manages transitions between these tools, preserving metadata integrity during conversions."
      },
      {
        q: "How does the AI-powered training work?",
        a: "Our AI/LLM-powered training modules adapt to your skill level for both Cryo-EM and tomography workflows. Unlike static documentation, PractiCloud delivers context-aware guidance that evolves with your behavior, reducing skill acquisition time from months to weeks."
      },
      {
        q: "What is Human + AI hybrid support?",
        a: "Beyond AI automation, PractiCloud offers live expert advisory sessions with specialists in both Cryo-EM and tomography, modular e-learning, and automated data migration support. This unique combination ensures you successfully navigate complex workflows."
      },
      {
        q: "How fast is the processing?",
        a: "With cloud resources, there are no queues or downtimes. Jobs start immediately on fast cloud resources, with dynamic resource allocation optimized for your specific analysis type—whether it's particle picking or tilt series reconstruction."
      },
    ]
  },
  {
    category: "Pricing & Billing",
    questions: [
      {
        q: "How does pay-as-you-go pricing work?",
        a: "You only pay for the compute and storage resources you actually use. No idle uptime charges, no long-term commitments. Our platform provides intelligent GPU guidance optimized for both Cryo-EM and tomography workloads."
      },
      {
        q: "Is PractiCloud affordable for small labs?",
        a: "Yes! Our pricing model is designed to be accessible to labs of all sizes, with costs starting under $10K/year for small labs. The pay-as-you-go model means you can start small and scale as needed."
      },
      {
        q: "Can I get a custom enterprise plan?",
        a: "Absolutely. For high-throughput centers and institutions, we offer custom enterprise plans with unlimited storage, SLA guarantees, dedicated account managers, and custom integrations. Contact our sales team for details."
      },
    ]
  },
  {
    category: "Security & Data",
    questions: [
      {
        q: "How secure is my data?",
        a: "PractiCloud uses end-to-end encryption for all data transfers and storage. We maintain automated backups, MFA authentication, and follow industry best practices for data security. Your research data is protected at every step."
      },
      {
        q: "Where is my data stored?",
        a: "Data is stored on secure cloud infrastructure with redundant backups. You maintain full ownership of your data and can export or delete it at any time."
      },
      {
        q: "Can I collaborate with my team?",
        a: "Yes! PractiCloud is built for collaboration. Share Cryo-EM and tomography projects, results, and reports with colleagues. View 3D reconstructions together right in the browser with our integrated visualization tools."
      },
    ]
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-page">
      {/* Hero section */}
      <div
        className="faq-hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <p className="hero-subtitle">
            Everything you need to know about PractiCloud
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <Container className="faq-container">
        {faqData.map((section, idx) => (
          <div key={idx} className="faq-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="faq-list">
              {section.questions.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>Our team is here to help. Reach out and we'll get back to you within 24 hours.</p>
          <a href="/practicloud/contactus" className="contact-button">Contact Support</a>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
