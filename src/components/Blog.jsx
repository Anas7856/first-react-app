import React from "react";
import "./blog.css";
import blog1 from "../imgs/preview.0c16d81f.png";
import blog2 from "../imgs/preview.6ebd08bf.png";
import blog3 from "../imgs/preview.2dccd3dc.png";
const Blog = () => {
  return (
    <section className="blog">
      <h1>OUR BLOG.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt <br />
        ut labore et dolore magna aliqua. blog story READ
      </p>
      <div className="blog-main">
        <div className="blog-cards">
          <img src={blog1} alt="" />
          <div className="blog-content">
            <h4>Super Blog Article</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              quia! adipisicing elit. Facere, quia!
            </p>
          </div>
        </div>
        <div className="blog-cards">
          <img src={blog2} alt="" />
          <div className="blog-content">
            <h4>Super Blog Article</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              quia! adipisicing elit. Facere, quia!
            </p>
          </div>
        </div>
        <div className="blog-cards">
          <img src={blog3} alt="" />
          <div className="blog-content">
            <h4>Super Blog Article</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              quia! adipisicing elit. Facere, quia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
