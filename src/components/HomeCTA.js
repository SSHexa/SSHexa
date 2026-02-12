import { useNavigate } from "react-router-dom";
import "./HomeCTA.css";
import backgroundImage from "./background.png"; 

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <div
      className="home-cta"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="cta-box">
        <h2><em>Ready to Accelerate Your Cryo-EM Research?</em></h2>
        <p>
          From sample preparation to final structure — small proteins, membrane proteins,
          viruses, nanoparticles, and more. Let SS Hexa handle it all.
        </p>
        <button onClick={() => navigate("/contactus")}>GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default HomeCTA;
