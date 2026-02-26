import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { FaCubes } from "react-icons/fa";
import product1 from "./EPSON.png";

const Products = () => {
  return (
    <div className="hr-products-page">
      {/* Hero */}
      <div className="hr-products-hero">
        <div className="hr-page-hero-bg">
          <div className="hr-page-hero-gradient"></div>
          <div className="hr-page-hero-pattern"></div>
        </div>
        <div className="hr-page-hero-content">
          <span className="hr-page-badge"><FaCubes /> Products</span>
          <h1 className="hr-page-hero-title">Our Robots</h1>
          <p className="hr-page-hero-subtitle">
            SSHexa Robotics offers a series of fast, accurate, and agile robots
            that are ideal for flexible and tabletop automation.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="hr-products-body">
        <div className="hr-product-grid">
          <Link to="/hexarobotics/products/vitriflex" className="hr-product-card">
            <img src={product1} alt="Vitriflex" className="hr-product-image" />
            <div className="hr-product-info">
              <h3 className="hr-product-name">Vitriflex</h3>
              <p className="hr-product-desc">
                Modular cryo-EM grid preparation platform with SCARA
                robot, supporting blot-and-plunge and time-resolved workflows.
              </p>
              <span className="hr-know-more">Know More →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
