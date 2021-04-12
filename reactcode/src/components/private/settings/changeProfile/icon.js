import React, { Component } from "react";

class Icon extends Component {
  constructor(props) {
    super();
    this.state.icon = props.icon;
    this.onChange = props.onChange;
  }

  state = {
    icon: "fas fa-exclamation-triangle",
  };

  handleContentChange = (e) => {
    var icon = this.state.icon;
    var value = e.target.value;
    icon = value;
    this.onChange(icon);
    this.setState({ icon });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.icon !== this.state.icon) {
      this.setState({
        icon: nextProps.icon,
      });
    }
    return true;
  }

  render() {
    return (
      <div style={divStyle}>
        <input
          type="text"
          className="form-control text-input"
          placeholder="Icon"
          value={this.state.icon}
          name="icon"
          onChange={this.handleContentChange}
          style={inputStyle}
        />
        <i style={iconStyle} className={this.state.icon}></i>
      </div>
    );
  }
}

const divStyle = {
  margin: "10px",
};

const inputStyle = {
  display: "inline-block",
  width: "70%",
  marginRight: "5%",
};

const iconStyle = {
  fontSize: "25px",
  display: "inline-block",
  verticalAlign: "middle",
};

export default Icon;
