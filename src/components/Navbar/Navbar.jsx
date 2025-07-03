import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ isOnImage = true }) {
  return (
    <nav className={`navbar ${isOnImage ? "navbar-image" : ""}`}>
      <Link to="/" className="navbar-logo">
        leaflife
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          ABOUT
        </Link>
        <Link to="/services" className="navbar-link">
          SERVICES
        </Link>
        {/* <Link to="/projects" className="navbar-link">
          PROJECTS
        </Link> */}
        <Link to="/contact" className="navbar-link">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
