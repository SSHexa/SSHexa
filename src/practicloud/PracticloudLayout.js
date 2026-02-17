import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";

const PracticloudLayout = () => (
  <div className="app-container">
    <NavBar />
    <div className="page-content">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default PracticloudLayout;
