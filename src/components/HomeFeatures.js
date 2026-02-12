import {
  FaRobot,
  FaFlask,
  FaCloud,
  FaBolt,
  FaHandshake,
  FaLock,
  FaHeadset
} from "react-icons/fa";
import "./HomeFeatures.css";

const features = [
  {
    icon: <FaRobot />,
    title: "Automated Sample Preparation",
    desc: "Hexa Robotics ensures consistent, high-quality grid preparation with precise control over all parameters."
  },
  {
    icon: <FaFlask />,
    title: "Expert CRO Services",
    desc: "SS Hexa CRO handles your samples from receipt to final structure with publication-ready results."
  },
  {
    icon: <FaCloud />,
    title: "Cloud-Powered Processing",
    desc: "PractiCloud offers scalable computing resources for running cryo-EM algorithms without hardware hassles."
  },
  {
    icon: <FaBolt />,
    title: "Fast Turnaround",
    desc: "With cloud resources and automated workflows, enjoy faster results without queue delays."
  },
  {
    icon: <FaHandshake />,
    title: "End-to-End Partnership",
    desc: "From feasibility consultation to final delivery, we're with you at every step of the cryo-EM journey."
  },
  {
    icon: <FaLock />,
    title: "Secure & Reliable",
    desc: "Built on encrypted infrastructure with backups, ensuring your research data is always protected."
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    desc: "Our expert team is available to assist with technical issues and guide you through the process."
  },
];

export default function HomeFeatures() {
  return (
    <section className="home-features">
      <div className="hf-container">
        <h2 className="hf-title">Why Choose SS Hexa?</h2>
        <p className="hf-subtext">
          SS Hexa provides a complete 360° cryo-EM solution—from sample preparation to final structure—
          eliminating bottlenecks and accelerating your research.
        </p>

        <div className="hf-column">
          {features.map((f, idx) => (
            <div className="hf-item" key={idx}>
              <div className="hf-icon">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
