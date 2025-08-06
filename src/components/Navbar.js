import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand neon-glow" to="/">Nityasri</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link nav-glow" style={{ cursor: "pointer" }} onClick={() => handleSectionClick("home")}>Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link nav-glow" style={{ cursor: "pointer" }} onClick={() => handleSectionClick("about")}>About</span>
            </li>
             <li className="nav-item">
              <span className="nav-link nav-glow" style={{ cursor: "pointer" }} onClick={() => handleSectionClick("education")}>Education</span>
            </li>
            <li className="nav-item">
              <span className="nav-link nav-glow" style={{ cursor: "pointer" }} onClick={() => handleSectionClick("experience")}>Experience</span>
            </li>
            <li className="nav-item">
              <span className="nav-link nav-glow" style={{ cursor: "pointer" }} onClick={() => handleSectionClick("skills")}>Skills</span>
            </li>
            <li className="nav-item">
              <span className="nav-link nav-glow" style={{ cursor: "pointer" }} onClick={() => handleSectionClick("projects")}>Projects</span>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link nav-glow" to="/tips">Tips</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow" to="/certifications">Certifications</Link>
            </li>
            <li className="nav-item">
              <span className="nav-link nav-glow" style={{ cursor: "pointer" }} onClick={() => handleSectionClick("contact")}>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
