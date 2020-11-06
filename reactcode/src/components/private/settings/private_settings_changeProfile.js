import React, { Component } from "react";

import Other from "../../other";
import AuthService from "../../authService";

class PrivateSettingsChangeProfileContent extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.Other = new Other();
  }

  state = {
    profile: {
      aboutme: "",
    },
    profileStatus: "None",
    isMobile: false,
  };

  componentWillMount() {
    if (this.Other.isMobile) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  handleUpdateEvent = (event) => {
    event.preventDefault();
    console.log("update event triggered");
  };

  render() {
    return (
      <React.Fragment>
        <div style={privateSettingsStyle}>
          <div style={{ textAlign: "left", marginLeft: "3%" }}>
            <h2>Profile</h2>
          </div>
          <div style={changeProfileContentStyle(this.state.isMobile)}>
            <form onSubmit={this.handleUpdateEvent}>
              <GetProfileStatusMessage message={this.state.projectStatus} />
              <button
                type="submit"
                className="btn btn-outline-primary"
                style={changeProfileBtn}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const GetProfileStatusMessage = (props) => {
  var status = props.message;
  if (status === "Error") {
    return (
      <div className="alert alert-danger" role="alert">
        Error while updating profile!
      </div>
    );
  } else if (status === "Success") {
    return (
      <div className="alert alert-success" role="alert">
        Successfully updated profile!
      </div>
    );
  } else {
    return <span />;
  }
};

// Styles
const changeProfileBtn = { margin: "5px" };

const changeProfileContentStyle = (isMobile) => {
  let style = {
    padding: "15px",
    margin: "20px auto 0 auto",
    backgroundColor: "rgb(216, 216, 216)",
  };
  if (!isMobile) {
    style.width = "90%";
  }
  return style;
};

const privateSettingsStyle = {
  width: "100%",
  backgroundColor: "rgb(230, 230, 230)",
  textAlign: "left",
};

export default PrivateSettingsChangeProfileContent;
