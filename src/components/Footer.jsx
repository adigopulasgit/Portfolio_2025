import React from "react";

export default function Footer(){
  return (
    <footer>
      <div style={{fontSize:13}}>© {new Date().getFullYear()} Guru Ganesh</div>
      <div style={{display:"flex",gap:12}}>
        <a className="btn-link" href="/contact">Contact</a>
        <a className="btn-link" href="https://github.com/adigopulasgit" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}
