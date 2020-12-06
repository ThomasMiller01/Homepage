import React, { Component } from "react";

import PrivateSettingsChangeProjectContent from "./private_settings_changeProjectContent";
import PrivateSettingsChangeProfileContent from "./private_settings_changeProfile";

class PrivateSettingsHome extends Component {
  state = {
    profile: {
      isVisible: false,
    },
    projects: {
      isVisible: false,
    },
  };

  getCollapseIcon = (isVisible) => {
    if (isVisible) {
      return <i className="fas fa-caret-down"></i>;
    } else {
      return <i className="fas fa-caret-right"></i>;
    }
  };

  getContent = (isVisible, contentType) => {
    if (isVisible) {
      switch (contentType) {
        case "profile":
          return <PrivateSettingsChangeProfileContent />;
        case "projects":
          return <PrivateSettingsChangeProjectContent />;
        default:
          return <span></span>;
      }
    } else {
      return <span></span>;
    }
  };

  flipContentVisibility = (contentType) => {
    switch (contentType) {
      case "profile":
        let profile = this.state.profile;
        if (profile.isVisible) {
          profile.isVisible = false;
        } else {
          profile.isVisible = true;
        }
        this.setState({ profile });
        break;
      case "projects":
        let projects = this.state.projects;
        if (projects.isVisible) {
          projects.isVisible = false;
        } else {
          projects.isVisible = true;
        }
        this.setState({ projects });
        break;
      default:
        break;
    }
  };

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
          <div style={settingTabStyle}>
            <div
              onClick={() => this.flipContentVisibility("profile")}
              style={collapseButtonStyle}
            >
              <h2>
                Profile {this.getCollapseIcon(this.state.profile.isVisible)}
              </h2>
            </div>
            {this.getContent(this.state.profile.isVisible, "profile")}
          </div>
          <div style={settingTabStyle}>
            <div
              onClick={() => this.flipContentVisibility("projects")}
              style={collapseButtonStyle}
            >
              <h2>
                Projects {this.getCollapseIcon(this.state.projects.isVisible)}
              </h2>
            </div>
            {this.getContent(this.state.projects.isVisible, "projects")}
          </div>
        </center>
      </div>
    );
  }
}

// Styles
const collapseButtonStyle = {
  textAlign: "left",
  marginLeft: "3%",
  cursor: "pointer",
};

const settingTabStyle = {
  margin: "10px",
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
