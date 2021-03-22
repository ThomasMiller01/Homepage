import React, { Component } from "react";

import Icon from "./icon";
import Color from "./color";
import Content from "./content";

class ProfileLink extends Component {
  constructor(props) {
    super();

    this.onLinkChange = props.onLinkChange;
    this.onLinkDelete = props.onLinkDelete;
    this.index = props.index;

    this.state.link = {
      name: props.name,
      url: props.url,
      color: props.color,
      icon: props.icon,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name !== this.state.link.name) {
      this.index = nextProps.index;
      this.setState({
        link: {
          name: nextProps.name,
          url: nextProps.url,
          color: nextProps.color,
          icon: nextProps.icon,
        },
      });
    }
    return true;
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
      display: "inline-block",
    };
    return style;
  };

  onIconChange = (icon) => {
    let link = this.state.link;
    link.icon = icon;
    this.setState({ link });
    this.onLinkChange(this.index, "icon", icon);
  };

  onColorChange = (color) => {
    let link = this.state.link;
    link.color = color;
    this.setState({ link });
    this.onLinkChange(this.index, "color", color);
  };

  onTextChange = (text) => {
    let link = this.state.link;
    link.name = text;
    this.setState({ link });
    this.onLinkChange(this.index, "text", text);
  };

  onUrlChange = (url) => {
    let link = this.state.link;
    link.url = url;
    this.setState({ link });
    this.onLinkChange(this.index, "url", url);
  };

  onDelete = () => {
    this.onLinkDelete(this.index);
  };

  render() {
    return (
      <div style={linkStyle}>
        <div style={divStyle}>
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
        <div style={this.getLinkStyle(this.state.link)}>
          <Icon icon={this.state.link.icon} onChange={this.onIconChange} />
        </div>
        <div style={deleteDivStyle}>
          <button
            type="button"
            className="close"
            style={deleteButtonStyle}
            onClick={this.onDelete}
          >
            <span aria-hidden="true" style={deleteIconStyle}>
              &times;
            </span>
          </button>
        </div>
      </div>
    );
  }
}

const deleteIconStyle = {
  fontSize: "35px",
};

const deleteDivStyle = {
  display: "inline-block",
  verticalAlign: "baseline",
};

const deleteButtonStyle = {
  cursor: "pointer",
};

const linkStyle = {
  background: "#CACACA",
  margin: "5px",
  padding: "5px",
  width: "fit-content",
};

const divStyle = { display: "inline-block" };

const colorStyle = {
  margin: "10px",
  display: "inline-block",
  verticalAlign: "middle",
};

export default ProfileLink;
