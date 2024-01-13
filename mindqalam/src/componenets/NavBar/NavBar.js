import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <button className="thought-btn">I have a thought</button>
      </Link>
      <Link to="/BrowseThoughts">
        <button className="browse-btn">Browse my Thoughts</button>
      </Link>

      <Link to="/Visualize">
        <button className="visualize-btn">Visualize my Thoughts</button>
      </Link>

      <Link to="/AnalyzeMood">
        <button className="analyze-btn">Analyze my Mood</button>
      </Link>
    </div>
  );
}

export default NavBar;