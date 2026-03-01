import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Footer from "../components/Footer";

const HexaRoboticsLayout = () => (
  <div className="app-container">
    <NavBar />
    <div className="page-content">
      <Outlet />
    </div>
    <Footer brandName="SSHexa Robotics" className="hr-footer" />
  </div>
);

export default HexaRoboticsLayout;
