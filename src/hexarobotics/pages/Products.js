import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import product1 from "./EPSON.png";

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="products-title">Robots</h1>
      <p className="products-subtitle">
        SSHexa Robotics offers a series of fast, accurate, and agile robots that
        are ideal for flexible and tabletop automation.
      </p>

      <div className="product-grid">

        {/* === VITRIFLEX CARD === */}
        <Link to="/hexarobotics/products/vitriflex" className="product-card">
          <img src={product1} alt="Vitriflex" className="product-image" />
          <div className="product-info">
            <h3 className="product-name">Vitriflex</h3>
            <p className="product-price">$5,990.00</p>
            <p className="product-desc">
              Open-source, modular cryo-EM grid preparation platform with SCARA
              robot, supporting blot-and-plunge and time-resolved workflows.
            </p>
            <p className="know-more">Know More →</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Products;
