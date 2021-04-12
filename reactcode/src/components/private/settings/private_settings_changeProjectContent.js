import React, { Component } from "react";
import AuthService from "../../authService";
import Other from "../../other";
import TinyEditor from "../../editor/tiny_editor";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { gql } from "apollo-boost";

import Image from "./changeProject/image";

import PrivateChangeProjectPreview from "./changeProject/preview";

import { homepage_url } from "../../api_urls";

let lzstring = require("lz-string");

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
        uri: homepage_url,
      }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "ignore",
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
      },
    });

    this.thumbnailImageRef = React.createRef();
    this.headerImageRef = React.createRef();
  }

  getProjectTemplate = () => {
    return {
      id: -1,
      name: "",
      githubRepo: { name: "", url: "" },
      description: "",
      description_big: "",
      images: {
        thumbnail: {
          name: "none.png",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
          size: "979x979",
        },
        headerImg: {
          name: "none.png",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
          size: "979x979",
        },
        images: [],
      },
      pubDate: "",
      favourite: false,
      _private: false,
      position: 0,
    };
  };

  state = {
    allProjects: [this.getProjectTemplate()],
    currentProject: this.getProjectTemplate(),
    projectStatus: "None",
    isMobile: false,
    renderPreview: false,
    updateState: null,
  };

  getEditorDescriptionOutput = (content) => {
    let currentProject = this.state.currentProject;
    currentProject.description = content;
    this.setState({ currentProject });
  };

  getEditorDescriptionBigOutput = (content) => {
    let currentProject = this.state.currentProject;
    currentProject.description_big = content;
    this.setState({ currentProject });
  };

  componentWillMount() {
    if (this.Other.isMobile) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
    this.reloadProjects(-1);
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

  reloadProjects(id) {
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
              position
            }
          }
        `,
        variables: { token },
      })
      .then((result) => {
        let parsed = JSON.parse(JSON.stringify(result.data.getAllProjects));
        parsed.sort(function (a, b) {
          return a.position > b.position ? 1 : b.position > a.position ? -1 : 0;
        });
        parsed.unshift(firstProject);
        parsed.forEach((project) => {
          for (let i = 0; i < project.images.images.length; i++) {
            project.images.images[i].id = i;
          }
        });
        if (id === -1) {
          this.setState({ currentProject: this.getProjectTemplate("") });
        } else {
          this.setState({
            currentProjec: parsed.find((project) => project.id === id),
          });
        }
        this.setState({ allProjects: parsed });
        this.projectChanged({ target: { value: id.toString() } });
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

  handleGithubRepoChange = (e) => {
    var currentProject = this.state.currentProject;
    var value = e.target.value;
    currentProject.githubRepo = {
      url: value,
    };
    this.setState({
      currentProject: currentProject,
    });
  };

  compressBase64String = (base64string) => {
    var compressed = lzstring.compressToUTF16(base64string);
    return compressed;
  };

  fileToBase64 = (filename, filepath) => {
    return new Promise((resolve) => {
      var file = new File([filename], filepath);
      var reader = new FileReader();
      reader.onload = function (event) {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  async getInputProject(project) {
    let compression = true;
    let thumbnailFile;
    if (project.images.thumbnail.url.includes("http")) {
      thumbnailFile = await fetch(project.images.thumbnail.url)
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          const file = new File([blob], project.images.thumbnail.name, {
            type: "image/png",
          });
          return file;
        });
    } else {
      thumbnailFile = await this.dataURLtoBlob(project.images.thumbnail.url);
    }
    let thumbnailFileBase64string = await this.fileToBase64(thumbnailFile);
    let thumbnailFileCompressed;
    if (compression) {
      thumbnailFileCompressed = this.compressBase64String(
        thumbnailFileBase64string
      );
    } else {
      thumbnailFileCompressed = thumbnailFileBase64string;
    }

    let thumbnail = {
      name: project.images.thumbnail.name,
      file: {
        name: thumbnailFile.name,
        base64string: thumbnailFileCompressed,
      },
      size: project.images.thumbnail.size,
    };

    let headerImgFile;
    if (project.images.headerImg.url.includes("http")) {
      headerImgFile = await fetch(project.images.headerImg.url)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], project.images.headerImg.name, {
            type: "image/png",
          });
          return file;
        });
    } else {
      headerImgFile = await this.dataURLtoBlob(project.images.headerImg.url);
    }

    let headerImgFileBase64string = await this.fileToBase64(headerImgFile);
    let headerImgFileCompressed;
    if (compression) {
      headerImgFileCompressed = this.compressBase64String(
        headerImgFileBase64string
      );
    } else {
      headerImgFileCompressed = headerImgFileBase64string;
    }

    let headerImg = {
      name: project.images.headerImg.name,
      file: {
        name: headerImgFile.name,
        base64string: headerImgFileCompressed,
      },
      size: project.images.headerImg.size,
    };

    let images = [];
    for (let i = 0; i < project.images.images.length; i++) {
      let imageFile;
      let image = project.images.images[i];
      if (image.url.includes("http")) {
        imageFile = await fetch(image.url)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], image.name, {
              type: "image/png",
            });
            return file;
          });
      } else {
        imageFile = await this.dataURLtoBlob(image.url);
      }
      let imageFileBase64string = await this.fileToBase64(imageFile);
      let imageFileCompressed;
      if (compression) {
        imageFileCompressed = this.compressBase64String(imageFileBase64string);
      } else {
        imageFileCompressed = imageFileBase64string;
      }

      images.push({
        name: image.name,
        file: {
          name: imageFile.name,
          base64string: imageFileCompressed,
        },
        size: image.size,
      });
    }

    let githubRepo =
      project.githubRepo == null || project.githubRepo.url === ""
        ? "#"
        : project.githubRepo.url;

    return {
      name: project.name,
      githubRepo: githubRepo,
      description: project.description,
      description_big: project.description_big,
      images: {
        thumbnail,
        headerImg,
        images,
      },
      favourite: project.favourite.toString(),
      _private: project._private.toString(),
      position: parseInt(project.position),
    };
  }

  handleUpdateEvent = (event) => {
    event.preventDefault();

    this.setState({ updateState: "Waiting for project" });

    var currentProject = this.state.currentProject;

    this.getInputProject(currentProject).then((project) => {
      if (project.name !== "") {
        let add = currentProject.id === -1;

        this.setState({ updateState: "Waiting for server" });

        // check if add or update project
        let mutation;
        let variables;
        let token = this.Auth.getToken();
        if (add) {
          mutation = gql`
            mutation($project: ProjectInputType!, $token: String!) {
              addProject(project: $project, token: $token) {
                value
              }
            }
          `;
          variables = {
            project,
            token,
          };
        } else {
          mutation = gql`
            mutation(
              $id: String!
              $project: ProjectInputType!
              $token: String!
            ) {
              updateProject(id: $id, project: $project, token: $token) {
                value
              }
            }
          `;
          variables = {
            project,
            id: currentProject.id.toString(),
            token,
          };
        }
        this.homepageApi
          .mutate({
            mutation,
            variables,
          })
          .then((result) => {
            this.setState({ updateState: null });
            let value = add
              ? result.data.addProject.value
              : result.data.updateProject.value;
            if (isNaN(value)) {
              this.setState({ projectStatus: "Error" });
              setTimeout(() => {
                this.setState({ projectStatus: "None" });
              }, 3000);
            } else {
              setTimeout(() => {
                this.homepageApi.cache.reset();
                this.reloadProjects(parseInt(value));
              }, 1000);

              this.setState({ projectStatus: "Success" });
              setTimeout(() => {
                this.setState({ projectStatus: "None" });
              }, 3000);
            }
          })
          .catch((error) => {
            this.setState({ updateState: null });
            this.setState({ projectStatus: "Error" });
            setTimeout(() => {
              this.setState({ projectStatus: "None" });
            }, 3000);
          });
      } else {
        this.setState({ updateState: null });
        this.setState({ projectStatus: "Error" });
        setTimeout(() => {
          this.setState({ projectStatus: "None" });
        }, 3000);
      }
    });
  };

  handleDeleteEvent = () => {
    var currentProject = this.state.currentProject;
    if (currentProject.id !== -1) {
      let token = this.Auth.getToken();
      this.homepageApi
        .mutate({
          mutation: gql`
            mutation($id: String!, $token: String!) {
              deleteProject(id: $id, token: $token) {
                value
              }
            }
          `,
          variables: {
            id: currentProject.id.toString(),
            token,
          },
        })
        .then((result) => {
          this.reloadProjects(-1);

          this.setState({ projectStatus: "Success" });
          setTimeout(() => {
            this.setState({ projectStatus: "None" });
          }, 3000);
        })
        .catch((error) => {
          this.setState({ projectStatus: "Error" });
          setTimeout(() => {
            this.setState({ projectStatus: "None" });
          }, 3000);
        });
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

  onChangeThumbnailImage = (imageName, imageUrl, imageSize) => {
    let currentProject = this.state.currentProject;
    currentProject.images.thumbnail.name = imageName;
    currentProject.images.thumbnail.url = imageUrl;
    currentProject.images.thumbnail.size = imageSize;
    this.setState({ currentProject });
  };

  onChangeHeaderImgImage = (imageName, imageUrl, imageSize) => {
    let currentProject = this.state.currentProject;
    currentProject.images.headerImg.name = imageName;
    currentProject.images.headerImg.url = imageUrl;
    currentProject.images.headerImg.size = imageSize;
    this.setState({ currentProject });
  };

  onChangeImage = (imageName, imageUrl, imageSize, id) => {
    let currentProject = this.state.currentProject;
    let index = currentProject.images.images.findIndex(
      (item) => item.id === id
    );
    currentProject.images.images[index].name = imageName;
    currentProject.images.images[index].url = imageUrl;
    currentProject.images.images[index].size = imageSize;
    this.setState({ currentProject });
  };

  dataURLtoBlob = (dataurl) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  addImage = () => {
    let currentProject = this.state.currentProject;
    let image_id;
    if (currentProject.images.images.length === 0) {
      image_id = 0;
    } else {
      image_id =
        currentProject.images.images[currentProject.images.images.length - 1]
          .id + 1;
    }

    currentProject.images.images.push({
      name: "none.png",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
      size: "979x979",
      id: image_id,
    });
    this.setState(currentProject);
  };

  render() {
    return (
      <React.Fragment>
        <div style={privateSettingsStyle}>
          <div
            style={changeProjectContentStyle(this.state.isMobile)}
            className="change-project"
          >
            <form onSubmit={this.handleUpdateEvent}>
              <center>
                <div
                  className="form-group selectProject"
                  style={FormGroupStyle}
                >
                  <select
                    className="form-control project-select"
                    onChange={this.projectChanged}
                    value={this.state.currentProject.id}
                  >
                    {this.state.allProjects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.id === -1 ? "[Clear]" : project.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={borderBottomStyle} className="border-main-2" />
                <div className="input-group input_both" style={inputGroupStyle}>
                  <h1 style={inputGroupH1Style}>
                    <b>Code</b>
                  </h1>
                  <h2 style={inputGroupH2Style}>Name</h2>
                  <input
                    type="text"
                    className="form-control text-input"
                    placeholder="Name"
                    style={inputGroupInputStyle}
                    value={this.state.currentProject.name}
                    name="name"
                    onChange={this.handleContentChange}
                  />
                  <h2 style={inputGroupH2Style}>GitHub Repo</h2>
                  <input
                    type="text"
                    className="form-control text-input"
                    placeholder="GitHub Repo"
                    style={inputGroupInputStyle}
                    value={
                      this.state.currentProject.githubRepo
                        ? this.state.currentProject.githubRepo.url
                        : ""
                    }
                    name="githubRepo"
                    onChange={this.handleGithubRepoChange}
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
                  <div style={addImageButtonDivStyle}>
                    <button
                      type="button"
                      className="btn see-more-btn"
                      style={addButtonStyle}
                      onClick={this.addImage}
                    >
                      <i className="fas fa-plus"></i> <b>Image</b>
                    </button>
                  </div>
                  {this.state.currentProject.images.images.map((image) => (
                    <Image
                      key={this.state.currentProject.images.images.indexOf(
                        image
                      )}
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
                      className="custom-control-input custom-checkbox"
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
                  <h2 style={inputGroupH2Style}>
                    Position
                    <input
                      className="text-input"
                      type="number"
                      style={positionInputStyle}
                      placeholder="position"
                      value={this.state.currentProject.position}
                      name="position"
                      onChange={this.handleContentChange}
                    />
                  </h2>
                </div>
                <PrivateChangeProjectPreview
                  isMobile={this.state.isMobile}
                  renderPreview={this.state.renderPreview}
                  _description={this.state.currentProject.description}
                  _description_big={this.state.currentProject.description_big}
                />
              </center>
              <div style={borderBottomStyle} className="border-main-2" />
              <GetUpdateStatus status={this.state.updateState} />
              <GetProjectStatusMessage message={this.state.projectStatus} />
              <button
                type="submit"
                className="btn btn-outline-primary see-more-btn"
                style={changeProjectBtn}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-outline-primary see-more-btn"
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
                  className="close close-btn"
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
                  className="btn btn-secondary see-more-btn"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary see-more-btn-2"
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

const GetUpdateStatus = (props) => {
  let status = props.status;

  if (status) {
    return (
      <div style={updateStateStyle}>
        {status}{" "}
        <div
          style={updateStateSpinnerStyle}
          className="spinner-border"
          role="status"
        ></div>
      </div>
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
const updateStateSpinnerStyle = {
  verticalAlign: "middle",
  fontSize: "15px",
  margin: "0 10px",
};

const updateStateStyle = {
  width: "fit-content",
  fontSize: "20px",
  padding: "10px 30px",
  backgroundColor: "#C7C7C7",
  borderRadius: "3px",
  border: "solid #B1B1B1 1px",
  color: "#575757",
};

const positionInputStyle = {
  margin: "10px",
  width: "50px",
};

const addImageButtonDivStyle = {
  widht: "100%",
  textAlign: "left",
  margin: "15px 0",
};

const addButtonStyle = {
  border: "solid 1px",
  padding: "2px 7px",
};

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

const changeProjectContentStyle = (isMobile) => {
  let style = {
    padding: "15px",
    margin: "20px auto 0 auto",
  };
  if (!isMobile) {
    style.width = "90%";
  }
  return style;
};

const privateSettingsStyle = {
  width: "100%",
  textAlign: "left",
};

const FormGroupStyle = {
  margin: "0 0 20px 2.5%",
  textAlign: "left",
  width: "90%",
};

export default PrivateSettingsChangeProjectContent;
