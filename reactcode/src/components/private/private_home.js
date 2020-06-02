import React, { Component } from "react";

import AuthService from "../authService";

import PrivateStatistics from "./statistics/private_statistics";

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
      <div style={privateHomeStyle}>
        <center>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={logoutBtnStyle}
            onClick={this.handleLogout}
          >
            Logout
          </button>
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
