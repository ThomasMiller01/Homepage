import React, { Component } from "react";

import "./socialMediaIcons.scss";

class SocialMediaIcons extends Component {
  constructor(props) {
    super();
    let links = props.links;
    links.forEach((link) => {
      link.hover = false;
    });
    this.state.links = links;
  }

  state = {
    links: [],
  };

  updateLinks = (links) => {
    links.forEach((link) => {
      link.hover = false;
    });
    this.setState({ links });
  };

  getLinkStyle = (link) => {
    let style = {
      color: link.color,
      borderColor: link.color,
    };
    if (link.hover) {
      style.color = "#fff";
      style.backgroundColor = link.color;
    }
    return style;
  };

  handleHover = (id, value) => {
    let links = this.state.links;
    let index = links.findIndex((link) => link.id === id);
    links[index].hover = value;
    this.setState({ links });
  };

  renderLink = (link) => {
    if (link.url === "#") {
      return (
        <span
          className="button is-outlined is-rounded"
          style={this.getLinkStyle(link)}
          onMouseEnter={() => this.handleHover(link.id, true)}
          onMouseLeave={() => this.handleHover(link.id, false)}
        >
          <span className="icon">
            <i className={link.icon} style={iconStyle}></i>
          </span>
          <span className="text">{link.name}</span>
        </span>
      );
    } else {
      return (
        <a
          href={link.url}
          className="button is-outlined is-rounded"
          style={this.getLinkStyle(link)}
          onMouseEnter={() => this.handleHover(link.id, true)}
          onMouseLeave={() => this.handleHover(link.id, false)}
        >
          <span className="icon">
            <i className={link.icon} style={iconStyle}></i>
          </span>
          <span className="text">{link.name}</span>
        </a>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="post-social">
          {this.state.links.map((link, index) => (
            <span key={index}>{this.renderLink(link)}</span>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const iconStyle = {
  fontSize: "20px",
};

export default SocialMediaIcons;
