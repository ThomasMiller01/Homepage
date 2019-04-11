import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/aboutme">AboutMe</NavLink>
      <NavLink to="/impressum">impressum</NavLink>
    </React.Fragment>
  );
};

export default NavBar;
