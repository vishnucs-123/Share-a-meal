import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        🍽️ <span>Share-a-Meal</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/donate">Donate Food</Link>
        </li>
        <li>
          <Link to="/donations">Donation List</Link>
        </li>
        <li>
          <Link to="/find">Find Needy People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
