import React, { Component } from "react";

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

  render() {
    return (
      <div style={this.getLinkStyle(this.state.link)}>
        <div>
          [{this.state.link.name}]({this.state.link.url})
        </div>
        <div>color: {this.state.link.color}</div>
        <div>
          icon: <i className={this.state.link.icon} style={iconStyle}></i>
        </div>
      </div>
    );
  }
}

const iconStyle = {
  fontSize: "20px",
};

export default ProfileLink;
