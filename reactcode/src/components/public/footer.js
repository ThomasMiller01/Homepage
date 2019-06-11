/* eslint-disable react/jsx-no-target-blank */
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
          <a
            href="https://buttercms.com"
            target="_blank"
            style={buttercms_linkStyle}
          >
            <img
              src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo"
              alt="loading ..."
              style={buttercms_imgStyle}
            />
          </a>
        </div>
      </footer>
    );
  }
}

// Styles
const buttercms_linkStyle = {
  float: "right"
};

const buttercms_imgStyle = {
  width: "150px"
};

const footerStyle = {
  backgroundColor: "rgb(39, 52, 58)",
  color: "#c6c6c6",
  minHeight: "6.5vh"
};

export default Footer;
