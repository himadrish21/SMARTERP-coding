import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [searchVal, setsearchVal] = useState("");
  return (
    <nav className="nav-post">
      <div className="search-container">
          <Link to={`search${searchVal}`}>
            <button> &#128269; </button>
          </Link>
        <input
          type="search"
          value={searchVal}
          onChange={(e) => {
            setsearchVal(e.target.value);
          }}
         placeholder=" Search Post....."/>
        <button className="clear-button" onClick={() => {setsearchVal("")}}>
          {" "}
          clear{" "}
        </button>
      </div>
      <div className="post-publish">
      <Link to="newpost">NewPost</Link>
      <Link to="published">Published</Link>
      </div>
    </nav>
  );
}

export default Navbar;
