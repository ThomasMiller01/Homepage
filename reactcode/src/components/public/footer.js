import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  state = { year: "" };

  componentDidMount = () => {
    var currentYear = new Date().getFullYear();
    this.setState({ year: currentYear });
  };

  render() {
    return (
      <footer style={footerStyle}>
        <div className="text-center py-3">
          Copyright &copy; <span id="yearForCopyright" />
          {this.state.year}, Thomas Miller -{" "}
          <NavLink to="/impressum" className="myimpressumlink">
            Impressum
          </NavLink>{" "}
          - <NavLink to="/login">Login</NavLink>
        </div>
      </footer>
    );
  }
}

// Styles

const footerStyle = {
  backgroundColor: "rgb(39, 52, 58)",
  color: "#c6c6c6",
  minHeight: "6.5vh"
};

export default Footer;
