import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";
import "./Blog.css";

import product1 from "./EPSON.png";
import product2 from "./background.png";

const blogs = [
  {
    category: "NEWS",
    title: "Introducing VitriFlex: A Modular, Affordable Cryo-EM Grid Freezing Platform",
    description:
      "Robotic automation is emerging as a transformative force that can revolutionize processes, optimize resources, and drive growth. However…",
    readTime: "32 minute read",
    image: product1,
    link: "/hexarobotics/blogs/blog1#why-we-built-vitriflex",
  },
  {
    category: "PRODUCTS",
    title: "Vitriflex Quick Start",
    description:
      "Robot joints are the movable connections between different parts of a robot's body, much like the joints in humans. These…",
    readTime: "39 minute read",
    image: product2,
    link: "/hexarobotics/blogs/blog2",
  },
  {
    category: "PRODUCTS",
    title: "Inside VitriFlex",
    description:
      "System Overview and Design of a Cryo-EM Preparation Platform",
    readTime: "15 minute read",
    image: product2,
    link: "/hexarobotics/blogs/blog3",
  },
  {
    category: "BLOGS",
    title: "The Air-Water Interface Problem in Cryo-EM",
    description:
      "Understanding why proteins denature at the air-water interface and practical solutions to minimize sample damage during grid preparation.",
    readTime: "5 minute read",
    image: product2,
    link: "/hexarobotics/blogs/blog4",
  },
  {
    category: "BLOGS",
    title: "VitriFlex vs Commercial Plungers: Making the Right Choice",
    description:
      "Comparing Vitrobot, Chameleon, and VitroJet with VitriFlex to help you choose the right cryo-EM grid preparation system for your lab.",
    readTime: "5 minute read",
    image: product1,
    link: "/hexarobotics/blogs/blog5",
  },
];

const filtersList = ["ALL", "BLOGS", "NEWS", "PRODUCTS"];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredBlogs = activeFilter === "ALL"
    ? blogs
    : blogs.filter((blog) => blog.category === activeFilter);

  return (
    <div className="hr-blog-page">
      {/* Hero */}
      <div className="hr-blog-hero">
        <div className="hr-page-hero-bg">
          <div className="hr-page-hero-gradient"></div>
          <div className="hr-page-hero-pattern"></div>
        </div>
        <div className="hr-page-hero-content">
          <span className="hr-page-badge"><FaNewspaper /> Blog</span>
          <h1 className="hr-page-hero-title">Blog</h1>
          <p className="hr-page-hero-subtitle">
            SSHexa news, product launch announcements, and general discussions
            on robotics and cryo-EM technology.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="hr-blog-body">
        {/* Filters + Sorting */}
        <div className="hr-blog-toolbar">
          <div className="hr-blog-filters">
            {filtersList.map((filter) => (
              <button
                key={filter}
                className={`hr-filter-btn${activeFilter === filter ? " active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="hr-blog-sort">
            <select>
              <option>Sort by: Latest</option>
              <option>Sort by: Oldest</option>
            </select>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="hr-blog-grid">
          {filteredBlogs.map((blog, idx) => (
            <Link to={blog.link} key={idx} className="hr-blog-card">
              <img src={blog.image} alt={blog.title} className="hr-blog-image" />
              <div className="hr-blog-content">
                <p className="hr-blog-category">{blog.category}</p>
                <h3 className="hr-blog-heading">{blog.title}</h3>
                <p className="hr-blog-description">{blog.description}</p>
                <p className="hr-blog-readtime">{blog.readTime}</p>
                <span className="hr-blog-readmore">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
