import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
export default function index() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>A&G</h1>
      </div>
      <div className="navbar-buttons-container">
        <div className="navbar-buttons">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/about">About</Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}
