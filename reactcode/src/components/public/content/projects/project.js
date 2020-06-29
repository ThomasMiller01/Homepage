/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { PhotoSwipeGallery } from "react-photoswipe";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { gql } from "apollo-boost";

import { Commits, Statistics } from "../../../githubapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import AuthService from "../../../authService";

import { homepage_url } from "../../../api_urls";

class Project extends Component {
  constructor() {
    super();
    this.auth = new AuthService();
    this.homepageApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: homepage_url,
      }),
    });
  }

  state = {
    project: {
      id: -1,
      name: "",
      githubRepo: null,
      description: "",
      description_big: "",
      images: {
        thumbnail: { url: "" },
        headerImg: { url: "" },
        images: [],
      },
      pubDate: "",
      favourite: false,
      private: false,
    },
    items: [],
    options: {
      //http://photoswipe.com/documentation/options.html
    },
    isOpen: false,
  };

  componentDidMount() {
    this.fetchProjectByName(this.props.match.params.projectName);
  }

  fetchProjectByName(value) {
    let token = !this.auth.loggedIn() ? "" : this.auth.getToken();
    this.homepageApi
      .query({
        query: gql`
          query($name: String!, $token: String!) {
            getProjectByName(name: $name, token: $token) {
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
                  url
                }
                thumbnail {
                  url
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
        variables: {
          name: value,
          token: token,
        },
      })
      .then((result) => {
        let data = result.data.getProjectByName;
        if (data != null) {
          let items = [];
          data.images.images.forEach((image) => {
            let sizeSplit = image.size.split("x");
            items.push({
              src: image.url,
              thumbnail: image.url,
              w: sizeSplit[0],
              h: sizeSplit[1],
              title: image.name,
            });
          });
          this.setState({ project: data, items: items });
        } else {
          this.props.history.replace("/projects/all");
        }
      });
  }

  getThumbnailContent = (item) => {
    return (
      <img src={item.thumbnail} width={120} height={90} alt="Loading ..." />
    );
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  getStyle = () => {
    if (this.state.project.githubRepo !== null) {
      return descGitStyle;
    } else {
      return descGitStyle2;
    }
  };

  getCommits = () => {
    if (
      this.state.project.githubRepo !== null &&
      !this.state.project._private
    ) {
      return (
        <React.Fragment>
          <Statistics repo={this.state.project.githubRepo.name} />
          <Commits
            repo={this.state.project.githubRepo.name}
            style={githubStyle}
          />
        </React.Fragment>
      );
    } else {
      return <span />;
    }
  };

  render() {
    const projectHeaderStyle = {
      backgroundImage: "url(" + this.state.project.images.headerImg.url + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
      textAlign: "center",
    };
    return (
      <div style={projectContainerStyle}>
        <div style={projectHeaderStyle}>
          <table className="projectTable">
            <tbody>
              <tr>
                <td>
                  <strong>
                    <span style={projectHeaderTopStyle} />
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={projectContent}>
          <h1 style={projectContentH1Style}>
            <span className="testclass">{this.state.project.name}</span>
            <GithubLink link={this.state.project.githubRepo} />
          </h1>
          <div style={this.getStyle()} className="descGitStyle">
            <div style={projectDescription}>
              <p
                dangerouslySetInnerHTML={{
                  __html: this.state.project.description_big,
                }}
              />
            </div>
            <div style={githubStyle}>{this.getCommits()}</div>
          </div>
          <div
            style={galleryDivStyle}
            className="gallery"
            itemScope
            itemType="http://schema.org/ImageGallery"
          />
          <PhotoSwipe
            isOpen={this.state.isOpen}
            items={this.state.items}
            options={this.state.options}
            onClose={this.handleClose}
          />
          <PhotoSwipeGallery
            items={this.state.items}
            options={this.state.options}
            thumbnailContent={this.getThumbnailContent}
          />
        </div>
      </div>
    );
  }
}

const descGitStyle = {
  width: "85%",
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "80% 20%",
  gridGap: "20px",
  margin: "20px auto 20px auto",
};

const descGitStyle2 = {
  width: "85%",
  textAlign: "center",
  display: "block",
  margin: "20px auto 20px auto",
};

const githubStyle = {
  gridColumn: "2",
};

const GithubLink = (props) => {
  let link = props.link;
  if (link !== null) {
    return (
      <a
        href={link.url}
        target="_blank"
        className="btn btn-outline-primary githubLinkBtn"
      >
        <FontAwesomeIcon icon={faGithub} /> View on GitHub
      </a>
    );
  } else {
    return <span />;
  }
};

const projectContainerStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "white",
};

const projectHeaderTopStyle = {
  verticalAlign: "middle",
  color: "black",
  fontSize: "60px",
};

const projectContent = { width: "100%", minHeight: "37vh", paddingTop: "20px" };

const projectDescription = {
  gridColumn: "1",
  textAlign: "left",
};

const projectContentH1Style = { width: "100%", textAlign: "center" };

const galleryDivStyle = {
  margin: "0 auto",
  width: "90%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minimax(300px, 1fr))",
  gridGap: "20px",
  alignItems: "stretch",
};

export default Project;
