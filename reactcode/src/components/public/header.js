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

const set_color_theme = (theme) => {
  let root = document.documentElement;
  root.style.setProperty("--c1", "var(--" + theme + "_c1)");
  root.style.setProperty("--c2", "var(--" + theme + "_c2)");
  root.style.setProperty("--c3", "var(--" + theme + "_c3)");
  root.style.setProperty("--c4", "var(--" + theme + "_c4)");
  root.style.setProperty("--c5", "var(--" + theme + "_c5)");
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-main">
      <button
        className="navbar-toggler"
        id="navbartogglebtn"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <button onClick={() => set_color_theme("dark_grey")}>dark_grey</button>
        <button onClick={() => set_color_theme("dark_blue")}>dark_blue</button>
        <button onClick={() => set_color_theme("dark_green")}>
          dark_green
        </button>
        <button onClick={() => set_color_theme("light_green")}>
          light_green
        </button>
        <button onClick={() => set_color_theme("light_pink")}>
          light_pink
        </button>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={ulListStyle}>
          <li className="nav-item" style={liItemStyle}>
            <NavLink to="/home" style={headerLink} className="nav-link">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item" style={liItemStyle}>
            <NavLink to="/projects" className="nav-link">
              Projects <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item" style={liItemStyle}>
            <NavLink to="/blog" className="nav-link">
              Blog <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item" style={liItemStyle}>
            <NavLink to="/about" className="nav-link">
              About Me <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item" style={liItemStyle}>
            <a
              className="nav-link"
              href="https://github.com/ThomasMiller01"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Styles
const headerStyle = {
  width: "100%",
  fontSize: "20px",
  backgroundColor: "#242424",
  minHeight: "6.5vh",
};

const headerLink = {
  color: "green !important",
};

const ulListStyle = { margin: "0 auto" };

const liItemStyle = { margin: "0 15px 0 15px" };

export default Header;
