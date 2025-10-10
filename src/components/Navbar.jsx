import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="container navbar">
      {/* Brand */}
      <div className="brand">
        <img
          src="/profile-2025.jpeg"
          alt="Guru Ganesh"
          className="brand-img"
        />
        <div>
          <div style={{ fontWeight: 700 }}>Guru Ganesh</div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            Data Science Intern
          </div>
        </div>
      </div>

      {/* Hamburger button (only visible on mobile) */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Nav Links */}
      <div className={`nav-links ${open ? "show" : ""}`}>
        <Link to="/" className="btn-link" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link
          to="/Experience"
          className="btn-link"
          onClick={() => setOpen(false)}
        >
          Experience
        </Link>
        <Link
          to="/work"
          className="btn-link"
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/Education"
          className="btn-link"
          onClick={() => setOpen(false)}
        >
          Education
        </Link>
        <Link
          to="/contact"
          className="btn-link"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
        <a
          className="btn-primary"
          href="https://docs.google.com/document/d/1YiQPO4FqGniNc0Vr0_qsyiVJN7TgPtBYcf4YJsFcC54/edit?tab=t.0"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
