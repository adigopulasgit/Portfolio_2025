import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="container">
      <div className="brand">
        <img src="/IMG_6134 Large.jpeg" alt="Guru Ganesh" className="brand-img" />
        <div>
          <div style={{fontWeight:700}}>Guru Ganesh</div>
          <div style={{fontSize:12,color:"var(--muted)"}}>Data Science Intern</div>
        </div>
      </div>

      <div className="nav-links">
        <Link to="/" className="btn-link">Home</Link>
        <Link to ="/Experience" className="btn-link">Experience</Link>

 
        <Link to="/work" className="btn-link">Projects</Link>
        <Link to ="/Education" className="btn-link">Education</Link>
        <Link to="/contact" className="btn-link">Contact</Link>
        <a className="btn-primary" href="https://docs.google.com/document/d/1aYxIAS7MB4wGc7TeJ-yKFpHaym2Q0Q7V/edit?tab=t.0" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </nav>
  );
}
