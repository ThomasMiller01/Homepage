import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="text-center py-3">
        Copyright &copy;
        <span id="yearForCopyright" />
        (2019), Thomas Miller -{" "}
        <NavLink to="/impressum" className="myimpressumlink">
          Impressum
        </NavLink>{" "}
        - <NavLink to="/login">Login</NavLink>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "rgb(39, 52, 58)",
  color: "#c6c6c6",
  minHeight: "6.5vh"
};

export default Footer;
