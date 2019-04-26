import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../../authService";

class PrivateSettingsChangeProjectContent extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    allProjects: [],
    currentProject: {},
    projectStatus: "None"
  };

  componentDidMount = () => {
    const headers = {
      Authorization: "Bearer " + this.Auth.getToken(),
      "Content-Type": "application/json"
    };
    fetch("https://thomasmiller.tk/dotnet/api/Projects/getAll", {
      headers
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ allProjects: data });
      });
  };

  projectChanged = event => {
    var projectId = event.target.value;
    var currentProject = {};
    this.state.allProjects.forEach(project => {
      if (projectId === project._id.toString()) {
        currentProject = project;
      }
    });
    this.setState({ currentProject });
  };

  render() {
    return (
      <React.Fragment>
        <div style={privateSettingsStyle}>
          <center>
            <h1 className="top_text" style={privateSettingsH1Style}>
              Settings - Change Project
            </h1>
          </center>
          <NavLink
            to="/private/settings"
            className="btn btn-outline-primary"
            style={settingsBackStyle}
          >
            Back
          </NavLink>
          <div style={changeProjectContentStyle}>
            <form>
              <center>
                <div
                  className="form-group selectProject"
                  style={FormGroupStyle}
                >
                  <select
                    className="form-control"
                    onChange={this.projectChanged}
                  >
                    <option onChange={() => this.projectChanged({})}>
                      [Clear]
                    </option>
                    {this.state.allProjects.map(project => (
                      <option key={project._id} value={project._id}>
                        {project._name}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={borderBottomStyle} />
                <div className="input-group input_both" style={inputGroupStyle}>
                  <h1 style={inputGroupH1Style}>Code</h1>
                  <h2 style={inputGroupH2Style}>Name</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    style={inputGroupInputStyle}
                    value={this.state.currentProject._name}
                  />
                  <h2 style={inputGroupH2Style}>GitHub Repo</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="GitHub Repo"
                    style={inputGroupInputStyle}
                    value={this.state.currentProject._githubRepo}
                  />
                  <h2 style={inputGroupH2Style}>Description</h2>
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    style={textDescriptionStyle}
                    value={this.state.currentProject._description}
                  />
                  <h2 style={inputGroupH2Style}>Description Big</h2>
                  <textarea
                    className="form-control"
                    placeholder="Description Big"
                    style={textDescriptionBigStyle}
                    value={this.state.currentProject._description_big}
                  />
                  <h2 style={inputGroupH2Style}>Thumbnail</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thumbnail"
                    style={inputGroupInputStyle}
                    value={this.state.currentProject._thumbnail}
                  />
                  <h2 style={inputGroupH2Style}>Header Img</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Header Img"
                    style={inputGroupInputStyle}
                    value={this.state.currentProject._headerImg}
                  />
                  <h2 style={inputGroupH2Style}>Images</h2>
                  <textarea
                    className="form-control"
                    placeholder="Images"
                    style={textImagesStyle}
                    value={this.state.currentProject._images}
                  />
                  <div
                    className="custom-control custom-checkbox"
                    style={checkboxStyle}
                  >
                    <input
                      className="custom-control-input"
                      style={checkboxInputStyle}
                      type="checkbox"
                      checked={this.state.currentProject._favourite}
                      id="favourite"
                    />
                    <label
                      className="custom-control-label custom_checkbox"
                      htmlFor="favourite"
                    >
                      Favourite
                    </label>
                  </div>
                  <div
                    className="custom-control custom-checkbox"
                    style={checkboxStyle}
                  >
                    <input
                      className="custom-control-input"
                      style={checkboxInputStyle}
                      type="checkbox"
                      checked={this.state.currentProject._private}
                      id="private"
                    />
                    <label
                      className="custom-control-label"
                      style={checkboxInputStyle}
                      htmlFor="private"
                    >
                      Private
                    </label>
                  </div>
                </div>
                <div
                  className="input-group input_both"
                  style={inputRenderStyle}
                >
                  <h1 style={inputGroupH1Style}>Preview</h1>
                  <h2 style={inputGroupH2Style}>Description</h2>
                  <div
                    style={rendereTextboxStyle}
                    dangerouslySetInnerHTML={{
                      __html: this.state.currentProject._description
                    }}
                  />
                  <h2 style={inputGroupH2Style}>Description Big</h2>
                  <div
                    style={rendereTextboxBigStyle}
                    dangerouslySetInnerHTML={{
                      __html: this.state.currentProject._description_big
                    }}
                  />
                </div>
              </center>
              <div style={borderBottomStyle} />
              <GetProjectStatusMessage message={this.state.projectStatus} />
              <button
                type="submit"
                className="btn btn-outline-primary"
                style={changeProjectBtn}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                style={changeProjectBtn}
                data-toggle="modal"
                data-target="#deleteyousure"
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                style={changeProjectBtn}
              >
                Preview
              </button>
            </form>
          </div>
        </div>
        <div
          className="modal fade"
          id="deleteyousure"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">Are you sure to delete it?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const GetProjectStatusMessage = props => {
  var status = props.message;
  if (status === "Error") {
    return (
      <div className="alert alert-danger" role="alert">
        Error while updating project!
      </div>
    );
  } else if (status === "Success") {
    return (
      <div className="alert alert-success" role="alert">
        Successfully updated project!
      </div>
    );
  } else {
    return <span />;
  }
};

// Styles
const changeProjectBtn = { margin: "5px" };

const rendereTextboxBigStyle = {
  width: "100%",
  backgroundColor: "white",
  padding: "10px",
  textAlign: "left",
  minHeight: "350px"
};

const rendereTextboxStyle = {
  width: "100%",
  backgroundColor: "white",
  padding: "10px",
  textAlign: "left",
  minHeight: "150px"
};

const inputRenderStyle = {
  marginLeft: "2.5%",
  display: "inline-block",
  verticalAlign: "top"
};

const checkboxInputStyle = { cursor: "pointer" };

const checkboxStyle = { width: "100%", textAlign: "left" };

const textImagesStyle = { minHeight: "150px", width: "100%" };

const textDescriptionBigStyle = { minHeight: "350px", width: "100%" };

const textDescriptionStyle = { minHeight: "150px", width: "100%" };

const inputGroupH2Style = {
  width: "100%",
  textAlign: "left",
  fontSize: "20px",
  marginBottom: "5px",
  marginTop: "5px"
};

const inputGroupH1Style = {
  width: "95%",
  textAlign: "left",
  fontSize: "30px",
  marginBottom: "10px"
};

const inputGroupInputStyle = { width: "100%" };

const inputGroupStyle = {
  marginRight: "2.5%",
  display: "inline-block",
  verticalAlign: "top"
};

const borderBottomStyle = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)"
};

const changeProjectContentStyle = {
  width: "90%",
  padding: "15px",
  margin: "20px auto 0 auto",
  backgroundColor: "rgb(216, 216, 216)"
};

const settingsBackStyle = {
  position: "absolute",
  margin: "10px",
  top: "0",
  right: "0",
  color: "#007bff",
  backgroundColor: "transparent"
};

const privateSettingsH1Style = { margin: "0" };

const privateSettingsStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px"
};

const FormGroupStyle = {
  margin: "0 0 20px 2.5%",
  textAlign: "left",
  width: "90%"
};

export default PrivateSettingsChangeProjectContent;
