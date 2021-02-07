import React from "react";
import "../../src/App.css";
import {Link} from "react-router-dom";

function Nav() {

    const navStyle = {
        color: "white"
    };
 //returns the navigation menu for the application.
  return (
    <nav>
        <ul className="nav-Links">
            <Link to="/" style={navStyle}>
                <li>Search</li>
            </Link>
            <Link to="/searchhistory" style={navStyle}>
                <li>Search History</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav