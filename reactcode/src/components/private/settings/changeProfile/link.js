import React, { Component } from "react";

import Icon from "./icon";
import Color from "./color";
import Content from "./content";

class ProfileLink extends Component {
  constructor(props) {
    super();
    this.state.link = {
      name: props.name,
      url: props.url,
      color: props.color,
      icon: props.icon,
    };
  }

  state = {
    link: {
      name: "",
      url: "",
      color: "",
      icon: "",
    },
  };

  getLinkStyle = (link) => {
    let style = {
      color: link.color,
      borderColor: link.color,
    };
    return style;
  };

  onIconChange = (icon) => {
    let link = this.state.link;
    link.icon = icon;
    this.setState({ link });
  };

  onColorChange = (color) => {
    let link = this.state.link;
    link.color = color;
    this.setState({ link });
  };

  onTextChange = (text) => {
    let link = this.state.link;
    link.name = text;
    this.setState({ link });
  };

  onUrlChange = (url) => {
    let link = this.state.link;
    link.url = url;
    this.setState({ link });
  };

  render() {
    return (
      <div style={linkStyle}>
        <div>
          <Content
            text={this.state.link.name}
            url={this.state.link.url}
            onTextChange={this.onTextChange}
            onUrlChange={this.onUrlChange}
          />
        </div>
        <div style={colorStyle}>
          <Color color={this.state.link.color} onChange={this.onColorChange} />
        </div>
        <div
          className="changeProfileIcons"
          style={this.getLinkStyle(this.state.link)}
        >
          <Icon icon={this.state.link.icon} onChange={this.onIconChange} />
        </div>
      </div>
    );
  }
}

const linkStyle = {
  background: "#CACACA",
  margin: "5px",
  padding: "5px",
};

const colorStyle = {
  margin: "10px",
};

export default ProfileLink;
