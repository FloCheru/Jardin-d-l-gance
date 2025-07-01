import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center pt-[var(--padding-m)]">
      {/* link accueil */}
      <Link to="/">
        <span className="logo">leaflife</span>
      </Link>
      <div className="flex gap-[40px]">
        <Link to="/about">A PROPOS</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
}
