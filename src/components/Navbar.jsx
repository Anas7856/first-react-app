import React from "react";
import "./navbar.css";

import brand from "../imgs/logo.39c5f3c6.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation().pathname;

  console.log(path);

  return (
    <div className="navbar">
      <img src={brand} alt="" />
      <ul>
        <li className={`nav-item ${path === "/" ? "active" : ""}`}>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className={`nav-item ${path === "/work" ? "active" : ""}`}>
          <Link className="nav-link" to="/work">
            Work
          </Link>
        </li>
        <li className={`nav-item ${path === "/products" ? "active" : ""}`}>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className={`nav-item ${path === "/about" ? "active" : ""}`}>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className={`nav-item ${path === "/blog" ? "active" : ""}`}>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </li>
        <li className={`nav-item ${path === "/contact" ? "active" : ""}`}>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
