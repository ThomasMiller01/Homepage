import React, { Component, createRef } from "react";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { gql } from "apollo-boost";

import { homepage_url } from "../../api_urls";

import TinyEditor from "../../editor/tiny_editor";
import Other from "../../other";
import AuthService from "../../authService";
import Image from "./changeProject/image";
import ProfileLink from "./changeProfile/link";

let lzstring = require("lz-string");

class PrivateSettingsChangeProfileContent extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.Other = new Other();

    this.homepageApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: homepage_url,
      }),
    });

    this.EditorAboutMe = new TinyEditor({
      handleContentChange: this.getEditorAboutMeOutput,
    });

    this.profileImageRef = createRef();
  }

  state = {
    profile: {
      id: 0,
      name: "",
      aboutme: "",
      image: {
        id: 0,
        name: "",
        url: "",
        size: "",
      },
      links: [],
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
    this.loadProfile();
  }

  loadProfile = () => {
    this.homepageApi
      .query({
        query: gql`
          query {
            getProfile {
              id
              name
              aboutme
              image {
                id
                name
                url
                size
              }
              links {
                id
                name
                url
                color
                icon
              }
            }
          }
        `,
      })
      .then((result) => {
        let profile = JSON.parse(JSON.stringify(result.data.getProfile));
        this.EditorAboutMe.updateContent(profile.aboutme);
        this.profileImageRef.current.setState({
          src: profile.image.url,
          alt: profile.image.name,
          dimensions: { x: -1, y: -1 },
        });
        this.setState({ profile });
      });
  };

  async getInputProfile(profile) {
    let compression = true;
    let profileImageFile;
    if (profile.image.url.includes("http")) {
      profileImageFile = await fetch(profile.image.url)
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          const file = new File([blob], "profile_image.png", {
            type: "image/png",
          });
          return file;
        });
    } else {
      profileImageFile = await this.dataURLtoBlob(profile.image.url);
    }
    let profileImageFileBase64string = await this.fileToBase64(
      profileImageFile
    );
    let profileImageFileCompressed;
    if (compression) {
      profileImageFileCompressed = this.compressBase64String(
        profileImageFileBase64string
      );
    } else {
      profileImageFileCompressed = profileImageFileBase64string;
    }

    let links = [];
    profile.links.forEach((link) => {
      links.push({
        id: link.id,
        name: link.name,
        url: link.url,
        color: link.color,
        icon: link.icon,
      });
    });

    return {
      name: profile.name,
      aboutme: profile.aboutme,
      image: {
        name: "profile_pic.png",
        file: {
          name: profileImageFile.name,
          base64string: profileImageFileCompressed,
        },
        size: "-1x-1",
      },
      links,
    };
  }

  handleUpdateEvent = (event) => {
    event.preventDefault();
    var profile = this.state.profile;

    this.getInputProfile(profile).then((profile) => {
      let token = this.Auth.getToken();
      this.homepageApi
        .mutate({
          mutation: gql`
            mutation(
              $profile: ProfileInputType!
              $profile_id: String!
              $token: String!
            ) {
              updateProfile(
                profile: $profile
                profile_id: $profile_id
                token: $token
              ) {
                value
              }
            }
          `,
          variables: {
            profile,
            profile_id: "1",
            token,
          },
        })
        .then((result) => {
          let value = result.data.updateProfile.value;
          if (isNaN(value)) {
            this.setState({ profileStatus: "Error" });
            setTimeout(() => {
              this.setState({ profileStatus: "None" });
            }, 3000);
          } else {
            setTimeout(() => {
              this.homepageApi.cache.reset();
              this.loadProfile();
            }, 5000);

            this.setState({ profileStatus: "Success" });
            setTimeout(() => {
              this.setState({ profileStatus: "None" });
            }, 3000);
          }
        })
        .catch((error) => {
          this.setState({ profileStatus: "Error" });
          setTimeout(() => {
            this.setState({ profileStatus: "None" });
          }, 3000);
        });
    });
  };

  getEditorAboutMeOutput = (content) => {
    let profile = this.state.profile;
    profile.aboutme = content;
    this.setState({ profile });
  };

  handleContentChange = (e) => {
    var profile = this.state.profile;
    var name = e.target.name;
    var value = e.target.value;
    profile[name] = value;
    this.setState({ profile });
  };

  onChangeProfileImageUpdate = (imageName, imageUrl, imageSize) => {
    let profile = this.state.profile;
    profile.image.url = imageUrl;
    this.setState({ profile });
  };

  onChangeProfileImageDelete = (imageName, imageUrl, imageSize) => {
    let profile = this.state.profile;
    profile.image.url =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png";
    this.setState({ profile });
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

  handleLinkChange = (index, type, data) => {
    let profile = this.state.profile;
    if (type === "icon") {
      profile.links[index].icon = data;
    } else if (type === "color") {
      profile.links[index].color = data;
    } else if (type === "text") {
      profile.links[index].name = data;
    } else if (type === "url") {
      profile.links[index].url = data;
    }
    this.setState({ profile });
  };

  handleLinkDelete = (index) => {
    let profile = this.state.profile;
    profile.links.splice(index, 1);
    this.setState({ profile });
  };

  handleLinkAdd = () => {
    let profile = this.state.profile;
    profile.links.push({
      id: -1,
      name: "",
      url: "",
      color: "#fff",
      icon: "fas fa-exclamation-triangle",
    });
    this.setState({ profile });
  };

  render() {
    return (
      <React.Fragment>
        <div style={privateSettingsStyle}>
          <div
            style={changeProfileContentStyle(this.state.isMobile)}
            className="change-profile"
          >
            <form onSubmit={this.handleUpdateEvent}>
              <h2 style={inputGroupH2Style}>Name</h2>
              <input
                type="text"
                className="form-control text-input"
                placeholder="Name"
                style={inputGroupInputStyle}
                value={this.state.profile.name}
                name="name"
                onChange={this.handleContentChange}
              />
              <h2 style={inputGroupH2Style}>About Me</h2>
              <div style={textDescriptionStyle}>
                {this.EditorAboutMe.render()}
              </div>
              <h2 style={inputGroupH2Style}>Profile Image</h2>
              <Image
                src={this.state.profile.image.url}
                alt={this.state.profile.image.name}
                size={"100x100"}
                onChange={this.onChangeProfileImageUpdate}
                onDelete={this.onChangeProfileImageDelete}
                ref={this.profileImageRef}
              ></Image>
              <h2 style={inputGroupH2Style}>Links</h2>
              <div style={addImageButtonDivStyle}>
                <button
                  type="button"
                  className="btn see-more-btn"
                  style={addButtonStyle}
                  onClick={this.handleLinkAdd}
                >
                  <i className="fas fa-plus"></i> <b>Link</b>
                </button>
              </div>
              {this.state.profile.links.map((link, index) => (
                <ProfileLink
                  key={index}
                  index={index}
                  name={link.name}
                  url={link.url}
                  color={link.color}
                  icon={link.icon}
                  onLinkChange={this.handleLinkChange}
                  onLinkDelete={this.handleLinkDelete}
                />
              ))}
              <GetProfileStatusMessage message={this.state.profileStatus} />
              <button
                type="submit"
                className="btn btn-outline-primary see-more-btn"
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
const addButtonStyle = {
  border: "solid 1px",
  padding: "2px 7px",
};

const addImageButtonDivStyle = {
  widht: "100%",
  textAlign: "left",
  margin: "15px 0",
};

const textDescriptionStyle = { width: "100%" };

const inputGroupInputStyle = { width: "100%" };

const inputGroupH2Style = {
  width: "100%",
  textAlign: "left",
  fontSize: "20px",
  marginBottom: "5px",
  marginTop: "5px",
};

const changeProfileBtn = { margin: "5px" };

const changeProfileContentStyle = (isMobile) => {
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

export default PrivateSettingsChangeProfileContent;
