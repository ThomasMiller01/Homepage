import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header style={headerStyle} className="header">
        <NavBar />
      </header>
    </React.Fragment>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-main" style={navStyle}>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={ulStyle}>
        <li className="nav-item" style={liStyle}>
          <NavLink to="/private/home" className="nav-link">
            Home<span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item" style={liStyle}>
          <NavLink to="/private/projects" className="nav-link">
            All Projects<span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item" style={liStyle}>
          <NavLink to="/private/events" className="nav-link">
            Events<span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item" style={liStyle}>
          <NavLink to="/private/settings" className="nav-link">
            Settings<span className="sr-only">(current)</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

// Styles
const headerStyle = {
  width: "100%",
  fontSize: "20px",
  minHeight: "6.5vh",
};

const navStyle = {
  minHeight: "6.5vh",
};

const ulStyle = {
  display: "block",
  marginLeft: "auto",
};

const liStyle = {
  display: "inline-block",
  margin: "0 15px 0 15px",
};

export default Header;
