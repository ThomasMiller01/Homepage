import React, { Component } from "react";

import PrivateSettingsChangeProjectContent from "./private_settings_changeProjectContent";
import PrivateSettingsChangeProfileContent from "./private_settings_changeProfile";

class PrivateSettingsHome extends Component {
  render() {
    return (
      <div style={settingsStyle}>
        <title>Private Settings Home</title>
        <center>
          <a
            className="btn btn-outline-primary"
            style={settingsBtnStyle}
            href="https://api.thomasmiller.info/phpmyadmin/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Database
          </a>
          <a
            className="btn btn-outline-primary"
            style={settingsBtnStyle}
            href="http://thomasmiller.info:9040"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seq
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
          <div style={borderBottomStyle} />
          <PrivateSettingsChangeProfileContent />
          <PrivateSettingsChangeProjectContent />
        </center>
      </div>
    );
  }
}

// Styles
const settingsH1Style = {
  margin: "0",
};

const settingsStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px",
};

const borderBottomStyle = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)",
};

const settingsBtnStyle = { margin: "5px" };

export default PrivateSettingsHome;
