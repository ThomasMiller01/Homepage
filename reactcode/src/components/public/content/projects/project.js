/* eslint-disable react/jsx-no-target-blank */
import React, { Component, createRef } from "react";
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

let hljs = require("highlight.js");

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

    this.descriptionContainerRef = createRef();
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
      closeElClasses: [
        "item",
        "caption",
        "zoom-wrap",
        "ui",
        "top-bar",
        "wrapper",
        "video-wrapper",
      ],
    },
    isOpen: false,
  };

  async componentDidMount() {
    this.fetchProjectByName(this.props.match.params.projectName);
  }

  componentDidUpdate() {
    hljs.initHighlighting();
    this.handleScrollAnchor();
  }

  handleScrollAnchor = () => {
    const element = document.getElementById(
      this.props.location.hash.replace("#", "")
    );

    if (element) {
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0,
        });
      }, 100);
    }
  };

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
          data.images.images.forEach((image, index) => {
            if (image.url.includes(".mp4")) {
              items.push({
                html:
                  "<div class='wrapper pswp__item'><div class='video-wrapper pswp__item'><video class='pswp__video' controls><source src='" +
                  image.url +
                  "' type='video/mp4'/></video></div></div>",
                thumbnail: image.url,
                is_video: true,
              });
            } else {
              let sizeSplit = image.size.split("x");
              items.push({
                src: image.url,
                thumbnail: image.url,
                w: sizeSplit[0],
                h: sizeSplit[1],
                title: image.name,
              });
            }
          });
          this.setState({ project: data, items: items });
        } else {
          this.props.history.replace("/projects/all");
        }
      });
  }

  getThumbnailContent = (item) => {
    if ("is_video" in item) {
      return (
        <div>
          <div className="video-play-button">
            <i className="far fa-play-circle video-play-icon"></i>
            <video width="300" height="250" src={item.thumbnail} />
          </div>
          <img alt="" />
        </div>
      );
    }
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

  parseDecription = (description) => {
    let maxWidth = this.descriptionContainerRef.current
      ? this.descriptionContainerRef.current.clientWidth
      : 0;
    let parser = new DOMParser();
    let htmlParsed = parser.parseFromString(description, "text/html");

    // set all images max width
    let imgElements = htmlParsed.getElementsByTagName("img");
    for (let i = 0; i < imgElements.length; i++) {
      // get old width and height
      let oldWidth = imgElements[i].width;
      let oldHeight = imgElements[i].height;

      // only set new width, if image is bigger than display field
      if (oldWidth > maxWidth) {
        // calculate new width and height
        let ratio = oldWidth / oldHeight;
        let newWidth = maxWidth;
        let newHeight = newWidth / ratio;

        imgElements[i].width = newWidth;
        imgElements[i].height = newHeight;
      }
    }

    // set all videos max width
    let videoElements = htmlParsed.getElementsByTagName("video");
    for (let i = 0; i < videoElements.length; i++) {
      // get old width and height
      let oldWidth = videoElements[i].width;
      let oldHeight = videoElements[i].height;

      // only set new width, if image is bigger than display field
      if (oldWidth > maxWidth) {
        // calculate new width and height
        let ratio = oldWidth / oldHeight;
        let newWidth = maxWidth;
        let newHeight = newWidth / ratio;

        videoElements[i].width = newWidth;
        videoElements[i].height = newHeight;
      }
    }

    // replace code class markup with markdown
    let codeElements = htmlParsed.getElementsByTagName("pre");
    for (let i = 0; i < codeElements.length; i++) {
      let classname = codeElements[i].className;
      if (classname.includes("markup")) {
        classname = classname.replaceAll("markup", "html");
        codeElements[i].className = classname;
      }
    }

    return htmlParsed.documentElement.innerHTML;
  };

  handleBeforeChange = (ps) => {
    let all_videos = document.getElementsByClassName("pswp__video");
    for (let i = 0; i < all_videos.length; i++) {
      all_videos[i].pause();
    }
    let currItem = ps.currItem.container.getElementsByTagName("video");
    if (currItem.length !== 0) {
      currItem = currItem[0];
      currItem.load();
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
      <div style={projectContainerStyle} className="project-main">
        <title>{this.state.project.name}</title>
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
            <div style={projectDescription} ref={this.descriptionContainerRef}>
              <p
                dangerouslySetInnerHTML={{
                  __html: this.parseDecription(
                    this.state.project.description_big
                  ),
                }}
              />
            </div>
            <div style={githubStyle}>
              <h5 style={{ textAlign: "right" }}>
                [{this.state.project.pubDate}]
              </h5>
              {this.getCommits()}
            </div>
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
            beforeChange={this.handleBeforeChange}
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
  minWidth: "67vw",
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
