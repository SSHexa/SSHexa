import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // ✅ import navigation hook
import "./HomeHero.css";

const HomeHero = () => {
  const navigate = useNavigate(); // initialize navigation

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Main_Bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container fluid className="text-center hero-content">
        <h1 className="hero-title">SS Hexa</h1>
        <p className="hero-subtext">
          Complete 360° Cryo-EM Solutions — From sample preparation to final structure, we deliver end-to-end services through our three specialized divisions.
        </p>
        <div className="hero-buttons">
          <Button
            variant="secondary"
            className="me-3"
            onClick={() => navigate("/services")}
          >
            OUR SERVICES
          </Button>
          <Button
            variant="outline-light"
            onClick={() => navigate("/about")}
          >
            ABOUT SS HEXA
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
