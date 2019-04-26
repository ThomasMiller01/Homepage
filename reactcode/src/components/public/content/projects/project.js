import React, { Component } from "react";

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
    }
  };

  componentDidMount() {
    if (this.props.location.query) {
      this.setState({ project: this.props.location.query.project });
    } else {
      this.props.history.replace("/projects/all");
    }
  }

  render() {
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
          <div style={projectDescription}>
            <p
              dangerouslySetInnerHTML={{
                __html: this.state.project._description_big
              }}
            />
          </div>
          <div
            style={galleryDivStyle}
            className="gallery"
            itemScope
            itemType="http://schema.org/ImageGallery"
          >
            {this.state.project._images.map(image => (
              <figure
                key={image[0]}
                style={galleryFigureStyle}
                itemProp="associatedMedia"
                itemScope
                itemType="http://schema.org/ImageObject"
              >
                <a href={image[0]} itemProp="contentUrl" data-size={image[2]}>
                  <img
                    src={image[0]}
                    style={galleryImgStyle}
                    itemProp="thumbnail"
                    alt={image[1]}
                  />
                </a>
                <figcaption
                  style={galleryFigcaptionStyle}
                  itemProp="caption description"
                >
                  {image[1]}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="pswp__bg" />
            <div className="pswp__scroll-wrap">
              <div className="pswp__container">
                <div className="pswp__item" />
                <div className="pswp__item" />
                <div className="pswp__item" />
              </div>
              <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                  <div className="pswp__counter" />
                  <button
                    className="pswp__button pswp__button--close"
                    title="Close (Esc)"
                  />
                  <button
                    className="pswp__button pswp__button--share"
                    title="Share"
                  />
                  <button
                    className="pswp__button pswp__button--fs"
                    title="Toggle fullscreen"
                  />
                  <button
                    className="pswp__button pswp__button--zoom"
                    title="Zoom in/out"
                  />

                  <div className="pswp__preloader">
                    <div className="pswp__preloader__icn">
                      <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                  <div className="pswp__share-tooltip" />
                </div>
                <button
                  className="pswp__button pswp__button--arrow--left"
                  title="Previous (arrow left)"
                />
                <button
                  className="pswp__button pswp__button--arrow--right"
                  title="Next (arrow right)"
                />
                <div className="pswp__caption">
                  <div className="pswp__caption__center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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

const projectHeaderStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto 100%",
  textAlign: "center"
};

const projectHeaderTopStyle = {
  verticalAlign: "middle",
  color: "black",
  fontSize: "60px"
};

const projectContent = { width: "100%", minHeight: "37vh", paddingTop: "20px" };

const tableStyle = { width: "100%", height: "50vh" };

const projectDescription = { width: "80%", margin: "0 auto" };

const projectContentH1Style = { width: "100%", textAlign: "center" };

const galleryDivStyle = {
  margin: "0 auto",
  width: "90%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minimax(300px, 1fr))",
  gridGap: "20px",
  alignItems: "stretch"
};

const galleryImgStyle = { width: "100%", height: "auto" };

const galleryFigureStyle = {
  display: "block",
  float: "left",
  margin: "0 5px 5px 0",
  maxWidth: "100%"
};

const galleryFigcaptionStyle = { display: "none" };

export default Project;
