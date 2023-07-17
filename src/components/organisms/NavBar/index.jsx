import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ margin: "0px" }}>
      <ul className="row" style={{ listStyle: "none" }}>
        <li>
          <button>
            <Link to="/">Home</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/categorieList">Categories</Link>
          </button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
