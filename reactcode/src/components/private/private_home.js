import React, { Component } from "react";

import AuthService from "../authService";

import PrivateStatistics from "./statistics/private_statistics";
import ColorThemePicker from "../color-theme/color_theme_picker";

class PrivateHome extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  handleLogout = () => {
    this.props.history.replace("/home");
    this.Auth.logout();
  };

  render() {
    return (
      <div style={privateHomeStyle} className="private-home-main">
        <title>Private Home</title>
        <center>
          <button
            type="button"
            className="btn btn-outline-primary logout-btn"
            style={logoutBtnStyle}
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </center>
        <center>
          <ColorThemePicker />
        </center>
        <PrivateStatistics />
      </div>
    );
  }
}

// Styles

const logoutBtnStyle = {
  position: "absolute",
  margin: "10px",
  top: "0",
  right: "0",
};

const privateHomeStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px",
};

export default PrivateHome;
