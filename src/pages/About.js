import { Container } from "react-bootstrap";
import "./About.css";
import backgroundImage from "./background.png";
import useDocumentTitle from "../hooks/useDocumentTitle";

const About = () => {
  useDocumentTitle("About");
  return (
    <div className="about-page">
      {/* Hero section with background image */}
      <div
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        }}
      >
        <h1 className="about-hero-title">About SS Hexa</h1>
      </div>

      <div className="about-logo" style={{ textAlign: "center" }}>
        <img
          src="/SSHexaLogo.png"
          alt="SS Hexa Logo"
        />
      </div>

      {/* Content section */}
      <Container fluid className="about-content">
        <h2>Our Mission</h2>
        <p>
          SS Hexa is a comprehensive cryo-EM solutions provider, offering end-to-end services from sample preparation to final structure determination. Our integrated approach combines cutting-edge robotics, expert research services, and powerful cloud computing to accelerate your structural biology research. Whether you're a small research lab or a large institution, our platform is engineered to enhance your productivity, streamline your workflows, and help you achieve breakthrough results in the study of molecular structures.
        </p>

        <h2 className="section-title">Meet our Team</h2>
        <div className="team-section">
          <div className="team-member">
            <h4>Venkata Dandey</h4>
            <p>
              With 13 years of experience in Cryo-EM, Venkata serves as the
              Cryo-EM Core Director at the Department of Molecular Biology and
              Biophysics at UConn. His extensive expertise in cryo-electron
              microscopy and structural biology brings invaluable scientific
              leadership to SS Hexa, ensuring our services meet the highest
              standards of quality and scientific rigor.
            </p>
            <p>
              <strong>Contact:</strong> venkat.d@sshexa.com
            </p>
          </div>

          <div className="team-member">
            <h4>Lakshmi Narasimhan Y</h4>
            <p>
              Holding a Master's degree in Computer Science with 5 years of
              experience in full-stack development and cloud technologies.
              He has developed applications using C/C++, Java, Angular, Spring
              Framework, and Spring Boot. He is skilled in building microservices
              with Spring Boot, REST APIs, and Apache Tomcat, along with experience
              in CI/CD implementation using Jenkins, Docker, and Terraform.
              Additionally, he has expertise in containerization with AWS and
              Kubernetes, and working with messaging systems like Apache Kafka.
            </p>
            <p>
              <strong>Contact:</strong> lakshmi.n@sshexa.com
            </p>
          </div>

          <div className="team-member">
            <h4>Sreeya Gutta</h4>
            <p>
              Software Developer specializing in building scalable microservices
              for enterprise applications. Experienced in Java, Spring Boot,
              Microservices, AWS, and Kafka, developing high-performance backend
              solutions. Skilled in ReactJS, NodeJS, and database optimization,
              ensuring seamless integrations and robust system architectures.
              Passionate about cloud computing and DevOps, leveraging CI/CD
              pipelines and monitoring tools to enhance efficiency.
            </p>
            <p>
              <strong>Contact:</strong> sreeya.g@sshexa.com
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
