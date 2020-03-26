import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PrivateSettingsHome extends Component {
  render() {
    return (
      <div style={settingsStyle}>
        <center>
          <h1 style={settingsH1Style}>Settings - Home</h1>
          <div style={borderBottomStyle} />
          <NavLink
            to="settings/changeProject"
            style={settingsBtnStyle}
            className="btn btn-outline-primary"
          >
            Change Project
          </NavLink>
          <a
            className="btn btn-outline-primary"
            style={settingsBtnStyle}
            href="https://thomasmiller.info/phpmyadmin/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Database
          </a>
          <a
            className="btn btn-outline-primary"
            style={settingsBtnStyle}
            href="https://buttercms.com/blog_home/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            ButterCms
          </a>
        </center>
      </div>
    );
  }
}

// Styles
const settingsH1Style = {
  margin: "0"
};

const settingsStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px"
};

const borderBottomStyle = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)"
};

const settingsBtnStyle = { margin: "5px" };

export default PrivateSettingsHome;
