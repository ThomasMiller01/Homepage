import React, { Component } from "react";
import { PhotoSwipeGallery } from "react-photoswipe";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";

import { Commits, Statistics } from "../../../githubapi";

class Project extends Component {
  state = {
    project: {
      _id: -1,
      _name: "",
      _githubRepo: "",
      _description: "",
      _description_big: "",
      _thumbnail: "",
      _headerImg: "",
      _images: [],
      _pubDate: "",
      _favourite: false,
      _private: false
    },
    items: [],
    options: {
      //http://photoswipe.com/documentation/options.html
    },
    isOpen: false
  };

  componentWillMount() {
    if (this.props.location.query) {
      this.setState({ project: this.props.location.query.project });
    } else {
      this.props.history.replace("/projects/all");
    }
  }

  componentDidMount() {
    var items = [];
    this.state.project._images.forEach(image => {
      var src = image[0];
      var thumbnail = image[0];
      var w = image[2].split("x")[0];
      var h = image[2].split("x")[1];
      var title = image[1];
      items.push({ src: src, thumbnail: thumbnail, w: w, h: h, title: title });
    });
    this.setState({ items: items });
  }

  getThumbnailContent = item => {
    return (
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      <img
        src={item.thumbnail}
        width={120}
        height={90}
        alt="Error while loading image ..."
      />
    );
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  getCommits = () => {
    if (
      this.state.project._githubRepo !== "#" &&
      this.state.project._githubRepo !== ""
    ) {
      return (
        <React.Fragment>
          <Statistics
            repo={this.state.project._githubRepo.replace(
              "https://github.com/ThomasMiller01/",
              ""
            )}
          />
          <Commits
            repo={this.state.project._githubRepo.replace(
              "https://github.com/ThomasMiller01/",
              ""
            )}
            style={githubStyle}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h4>Commit - History</h4>
        </React.Fragment>
      );
    }
  };

  render() {
    const projectHeaderStyle = {
      backgroundImage: "url(" + this.state.project._headerImg + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto 100%",
      textAlign: "center"
    };
    return (
      <div style={projectContainerStyle}>
        <div style={projectHeaderStyle} className="projectHeader">
          <table style={tableStyle}>
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
            <GithubLink
              name={this.state.project._name}
              link={this.state.project._githubRepo}
            />
          </h1>
          <div style={descGitStyle} className="descGitStyle">
            <div style={projectDescription}>
              <p
                dangerouslySetInnerHTML={{
                  __html: this.state.project._description_big
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
  margin: "20px auto 20px auto"
};

const githubStyle = {
  gridColumn: "2"
};

const GithubLink = props => {
  var name = props.name;
  var link = props.link;
  if (link !== "#") {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a href={link} target="_blank">
        {name}
      </a>
    );
  } else {
    return <span>{name}</span>;
  }
};

const projectContainerStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "white"
};

const projectHeaderTopStyle = {
  verticalAlign: "middle",
  color: "black",
  fontSize: "60px"
};

const projectContent = { width: "100%", minHeight: "37vh", paddingTop: "20px" };

const tableStyle = { width: "100%", height: "50vh" };

const projectDescription = {
  gridColumn: "1",
  textAlign: "left"
};

const projectContentH1Style = { width: "100%", textAlign: "center" };

const galleryDivStyle = {
  margin: "0 auto",
  width: "90%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minimax(300px, 1fr))",
  gridGap: "20px",
  alignItems: "stretch"
};

export default Project;
