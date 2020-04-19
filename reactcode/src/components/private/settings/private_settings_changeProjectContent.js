import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../../authService";
import Other from "../../other";
import TinyEditor from "../../editor/tiny_editor";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { gql } from "apollo-boost";

import Image from "./changeProject/image";

import PrivateChangeProjectPreview from "./changeProject/preview";

class PrivateSettingsChangeProjectContent extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.Other = new Other();

    this.EditorDescription = new TinyEditor({
      handleContentChange: this.getEditorDescriptionOutput,
    });
    this.EditorDescriptionBig = new TinyEditor({
      handleContentChange: this.getEditorDescriptionBigOutput,
    });

    this.homepageApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new createUploadLink({
        uri: "https://api.thomasmiller.info/homepage",
      }),
    });

    this.thumbnailImageRef = React.createRef();
    this.headerImageRef = React.createRef();
  }

  getProjectTemplate = (name) => {
    return {
      id: -1,
      name: name,
      githubRepo: { name: "", url: "" },
      description: "",
      description_big: "",

      images: {
        thumbnail: {
          name: "None",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
          size: "979x979",
        },
        headerImg: {
          name: "None",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
          size: "979x979",
        },
        images: [],
      },
      pubDate: "",
      favourite: false,
      _private: false,
    };
  };

  state = {
    allProjects: [this.getProjectTemplate("[Clear]")],
    currentProject: this.getProjectTemplate(""),
    projectStatus: "None",
    isMobile: false,
    renderPreview: false,
  };

  getEditorDescriptionOutput = (content) => {
    let currentProject = this.state.currentProject;
    currentProject = Object.assign({ description: content }, currentProject);
    this.setState({ currentProject });
  };

  getEditorDescriptionBigOutput = (content) => {
    let currentProject = this.state.currentProject;
    currentProject = Object.assign(
      { description_big: content },
      currentProject
    );
    this.setState({ currentProject });
  };

  componentWillMount() {
    if (this.Other.isMobile) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
    this.reloadProjects();
  }

  projectChanged = (event) => {
    var projectId = event.target.value;
    var currentProject = {};
    this.state.allProjects.forEach((project) => {
      if (projectId === project.id.toString()) {
        currentProject = project;
      }
    });
    this.setState({ currentProject: currentProject });

    this.EditorDescription.updateContent(currentProject.description);
    this.EditorDescriptionBig.updateContent(currentProject.description_big);

    this.thumbnailImageRef.current.setState({
      src: currentProject.images.thumbnail.url,
      alt: currentProject.images.thumbnail.name,
      dimensions: { x: -1, y: -1 },
    });
    this.headerImageRef.current.setState({
      src: currentProject.images.headerImg.url,
      alt: currentProject.images.headerImg.name,
      dimensions: { x: -1, y: -1 },
    });
  };

  reloadProjects() {
    const firstProject = this.state.allProjects[0];
    let token = this.Auth.getToken();
    this.homepageApi
      .query({
        query: gql`
          query($token: String!) {
            getAllProjects(token: $token) {
              id
              name
              githubRepo {
                name
                url
              }
              description
              description_big
              images {
                headerImg {
                  name
                  url
                  size
                }
                thumbnail {
                  name
                  url
                  size
                }
                images {
                  name
                  url
                  size
                }
              }
              favourite
              _private
              pubDate
            }
          }
        `,
        variables: { token },
      })
      .then((result) => {
        let parsed = JSON.parse(JSON.stringify(result.data.getAllProjects));
        parsed.unshift(firstProject);
        parsed.forEach((project) => {
          for (let i = 0; i < project.images.images.length; i++) {
            project.images.images[i].id = i;
          }
        });
        this.setState({ allProjects: parsed });
      });
  }

  handleContentChange = (e) => {
    var currentProject = this.state.currentProject;
    var name = e.target.name;
    var value = e.target.value;
    if (name === "favourite" || name === "_private") {
      currentProject[name] = e.target.checked;
    } else {
      currentProject[name] = value;
    }
    this.setState({
      currentProject: currentProject,
    });
  };

  handleUpdateEvent = (event) => {
    event.preventDefault();
    var currentProject = this.state.currentProject;
    if (currentProject.id === -1) {
      // add project
    } else {
      // change project
    }

    // this.reloadProjects();
    //
    // this.setState({ projectStatus: "Success" });
    // setTimeout(() => {
    //   this.setState({ projectStatus: "None" });
    // }, 3000);
  };

  handleDeleteEvent = () => {
    var currentProject = this.state.currentProject;
    if (currentProject.id !== -1) {
      // delete project
      //
      // this.reloadProjects();
      //
      // this.setState({ projectStatus: "Success" });
      // setTimeout(() => {
      //   this.setState({ projectStatus: "None" });
      // }, 3000);
      //
      // this.setState({ projectStatus: "Error" });
      // setTimeout(() => {
      //   this.setState({ projectStatus: "None" });
      // }, 3000);
    }
  };

  handlePreviewEvent = () => {
    if (this.state.renderPreview) {
      this.setState({ renderPreview: false });
    } else {
      this.setState({ renderPreview: true });
    }
  };

  handleImageDelete = (id) => {
    let currentProject = this.state.currentProject;
    let index = currentProject.images.images.findIndex(
      (item) => item.id === id
    );
    console.log("id", id);
    console.log("index", index);
    currentProject.images.images.splice(index, 1);
    this.setState({ currentProject });
  };

  handleThumbnailDelete = () => {
    let currentProject = this.state.currentProject;
    currentProject.images.thumbnail = {
      name: "None",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
      size: "979x979",
    };
    this.setState({ currentProject });
  };

  handleHeaderImgDelete = () => {
    let currentProject = this.state.currentProject;
    currentProject.images.headerImg = {
      name: "None",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
      size: "979x979",
    };
    this.setState({ currentProject });
  };

  onChangeThumbnailImage = (imageUrl) => {
    let currentProject = this.state.currentProject;
    currentProject.images.thumbnail.url = imageUrl;
    this.setState({ currentProject });
  };

  onChangeHeaderImgImage = (imageUrl) => {
    let currentProject = this.state.currentProject;
    currentProject.images.headerImg.url = imageUrl;
    this.setState({ currentProject });
  };

  onChangeImage = (imageUrl, imageName, id) => {
    let currentProject = this.state.currentProject;
    let index = currentProject.images.images.findIndex(
      (item) => item.id === id
    );
    currentProject.images.images[index].url = imageUrl;
    currentProject.images.images[index].name = imageName;
    this.setState({ currentProject });
  };

  fileToBase64 = (filename, filepath) => {
    return new Promise((resolve) => {
      var file = new File([filename], filepath);
      var reader = new FileReader();
      // Read file content on file loaded event
      reader.onload = function (event) {
        resolve(event.target.result);
      };

      // Convert data to base64
      reader.readAsDataURL(file);
    });
  };

  uploadImage = () => {
    // upload image
    // this.fileToBase64(imageFile).then((result) => {
    //   let token = this.Auth.getToken();
    //   this.homepageApi
    //     .mutate({
    //       mutation: gql`
    //         mutation($imageFile: UploadImageType!, $token: String!) {
    //           uploadImageFile(imageFile: $imageFile, token: $token)
    //         }
    //       `,
    //       variables: {
    //         imageFile: {
    //           imageType: "THUMBNAIL",
    //           projectName: "homepage",
    //           file: {
    //             name: imageFile.name,
    //             base64string: result,
    //           },
    //         },
    //         token,
    //       },
    //     })
    //     .then((result) => {
    //       console.log(result);
    //     });
    // });
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
            <form onSubmit={this.handleUpdateEvent}>
              <center>
                <div
                  className="form-group selectProject"
                  style={FormGroupStyle}
                >
                  <select
                    className="form-control"
                    onChange={this.projectChanged}
                  >
                    {this.state.allProjects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
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
                    value={this.state.currentProject.name}
                    name="_name"
                    onChange={this.handleContentChange}
                  />
                  <h2 style={inputGroupH2Style}>GitHub Repo</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="GitHub Repo"
                    style={inputGroupInputStyle}
                    value={
                      this.state.currentProject.githubRepo
                        ? this.state.currentProject.githubRepo.url
                        : ""
                    }
                    name="_githubRepo"
                    onChange={this.handleContentChange}
                  />
                  <h2 style={inputGroupH2Style}>Description</h2>
                  <div style={textDescriptionStyle}>
                    {this.EditorDescription.render()}
                  </div>
                  <h2 style={inputGroupH2Style}>Description Big</h2>
                  <div style={textDescriptionBigStyle}>
                    {this.EditorDescriptionBig.render()}
                  </div>
                  <h2 style={inputGroupH2Style}>Thumbnail</h2>
                  <Image
                    src={this.state.currentProject.images.thumbnail.url}
                    alt={this.state.currentProject.images.thumbnail.name}
                    size={this.state.currentProject.images.thumbnail.size}
                    onChange={this.onChangeThumbnailImage}
                    onDelete={this.handleThumbnailDelete}
                    ref={this.thumbnailImageRef}
                  ></Image>
                  <h2 style={inputGroupH2Style}>Header Img</h2>
                  <Image
                    src={this.state.currentProject.images.headerImg.url}
                    alt={this.state.currentProject.images.headerImg.name}
                    size={this.state.currentProject.images.headerImg.size}
                    onChange={this.onChangeHeaderImgImage}
                    onDelete={this.handleHeaderImgDelete}
                    ref={this.headerImageRef}
                  ></Image>
                  <h2 style={inputGroupH2Style}>Images</h2>

                  {this.state.currentProject.images.images.map((image) => (
                    <Image
                      key={image.url}
                      src={image.url}
                      alt={image.name}
                      size={image.size}
                      id={image.id}
                      onChange={this.onChangeImage}
                      onDelete={this.handleImageDelete}
                    ></Image>
                  ))}
                  <div
                    className="custom-control custom-checkbox"
                    style={checkboxStyle}
                  >
                    <input
                      className="custom-control-input"
                      style={checkboxInputStyle}
                      type="checkbox"
                      checked={this.state.currentProject.favourite}
                      id="favourite"
                      name="favourite"
                      onChange={this.handleContentChange}
                      value={this.state.currentProject.favourite}
                    />
                    <label
                      className="custom-control-label custom_checkbox"
                      htmlFor="favourite"
                      style={checkboxInputStyle}
                    >
                      Favourite
                    </label>
                  </div>
                  <div
                    className="custom-control custom-checkbox"
                    style={checkboxStyle}
                    htmlFor="favourite"
                  >
                    <input
                      className="custom-control-input"
                      style={checkboxInputStyle}
                      type="checkbox"
                      checked={this.state.currentProject._private}
                      id="_private"
                      value={this.state.currentProject._private}
                      name="_private"
                      onChange={this.handleContentChange}
                    />
                    <label
                      className="custom-control-label custom_checkbox"
                      style={checkboxInputStyle}
                      htmlFor="_private"
                    >
                      Private
                    </label>
                  </div>
                </div>
                <PrivateChangeProjectPreview
                  isMobile={this.state.isMobile}
                  renderPreview={this.state.renderPreview}
                  _description={this.state.currentProject.description}
                  _description_big={this.state.currentProject.description_big}
                />
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
              <PreviewButton
                isMobile={this.state.isMobile}
                handlePreviewEvent={this.handlePreviewEvent}
              />
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
                  onClick={this.handleDeleteEvent}
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

const PreviewButton = (props) => {
  if (props.isMobile) {
    return (
      <button
        type="button"
        className="btn btn-outline-primary"
        style={changeProjectBtn}
        onClick={props.handlePreviewEvent}
      >
        Preview
      </button>
    );
  } else {
    return <span />;
  }
};

const GetProjectStatusMessage = (props) => {
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

const checkboxInputStyle = { cursor: "pointer" };

const checkboxStyle = { width: "100%", textAlign: "left" };

const textDescriptionBigStyle = { width: "100%" };

const textDescriptionStyle = { width: "100%" };

const inputGroupH2Style = {
  width: "100%",
  textAlign: "left",
  fontSize: "20px",
  marginBottom: "5px",
  marginTop: "5px",
};

const inputGroupH1Style = {
  width: "95%",
  textAlign: "left",
  fontSize: "30px",
  marginBottom: "10px",
};

const inputGroupInputStyle = { width: "100%" };

const inputGroupStyle = {
  marginRight: "2.5%",
  display: "inline-block",
  verticalAlign: "top",
};

const borderBottomStyle = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)",
};

const changeProjectContentStyle = {
  width: "90%",
  padding: "15px",
  margin: "20px auto 0 auto",
  backgroundColor: "rgb(216, 216, 216)",
};

const settingsBackStyle = {
  position: "absolute",
  margin: "10px",
  top: "0",
  right: "0",
  color: "#007bff",
  backgroundColor: "transparent",
};

const privateSettingsH1Style = { margin: "0" };

const privateSettingsStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px",
};

const FormGroupStyle = {
  margin: "0 0 20px 2.5%",
  textAlign: "left",
  width: "90%",
};

export default PrivateSettingsChangeProjectContent;
