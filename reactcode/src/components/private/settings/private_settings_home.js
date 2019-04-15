import React from "react";
import { NavLink } from "react-router-dom";

const PrivateSettingsHome = () => {
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
          href="https://mysql.uberspace.de/phpmyadmin/"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Database
        </a>
        <a
          className="btn btn-outline-primary"
          style={settingsBtnStyle}
          href="https://getbootstrap.com/docs/4.3/getting-started/introduction/"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootstrap
        </a>
        <div style={terminalsStyle}>
          <h1 style={terminalsH1Style}>Terminal</h1>
          <div style={xtermTerminalStyle}>
            <div id="terminal" />
          </div>
        </div>
      </center>
    </div>
  );
};

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

const xtermTerminalStyle = { width: "40%" };

const terminalsStyle = { width: "100%", padding: "10px" };

const terminalsH1Style = { paddingBottom: "15px" };

const borderBottomStyle = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)"
};

const settingsBtnStyle = { margin: "0 5px 0 5px" };

export default PrivateSettingsHome;
