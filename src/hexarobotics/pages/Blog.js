import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      " System Overview and Design of an Cryo-EM Preparation Platform",
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
    title: "Open-Source vs Commercial Plungers: Making the Right Choice",
    description:
      "Comparing Vitrobot, Chameleon, and VitroJet with open-source alternatives like VitriFlex to help you choose the right system for your lab.",
    readTime: "5 minute read",
    image: product1,
    link: "/hexarobotics/blogs/blog5",
  },
];

const filters = ["ALL", "BLOGS", "NEWS", "PRODUCTS"];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredBlogs = activeFilter === "ALL"
    ? blogs
    : blogs.filter((blog) => blog.category === activeFilter);

  return (
    <div className="blog-page">

      {/* Heading */}
      <h1 className="blog-title">Blog</h1>
      <p className="blog-subtitle">
        You will find SSHexa news, product launch announcements, and general discussions
        on robotics on this page.
      </p>

      {/* Filters + Sorting */}
      <div className="blog-toolbar">
        <div className="blog-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn${activeFilter === filter ? " active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="blog-sort">
          <select>
            <option>Sort by: Latest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="blog-grid">
        {filteredBlogs.map((blog, idx) => (
          <Link to={blog.link} key={idx} className="blog-card">

            <img src={blog.image} alt={blog.title} className="blog-image" />

            <div className="blog-content">
              <p className="blog-category">{blog.category}</p>
              <h3 className="blog-heading">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-readtime">{blog.readTime}</p>

              <button className="blog-readmore">Read More</button>
            </div>

          </Link>
        ))}
      </div>

    </div>
  );
};

export default Blog;
