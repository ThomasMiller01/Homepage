import React, { Component } from "react";

import { SketchPicker } from "react-color";

class Color extends Component {
  constructor(props) {
    super();
    this.state.color = props.color;
    this.onChange = props.onChange;
  }

  state = {
    color: "#fff",
    pickerVisible: false,
  };

  handleChange = (color) => {
    this.onChange(color.hex);
    this.setState({ color: color.hex });
  };

  changePickerVisibility = () => {
    let pickerVisible = this.state.pickerVisible;
    if (pickerVisible) {
      pickerVisible = false;
    } else {
      pickerVisible = true;
    }
    this.setState({ pickerVisible });
  };

  render() {
    if (this.state.pickerVisible) {
      return (
        <div>
          <div
            onClick={this.changePickerVisibility}
            style={getColorSquareStyle("#1C00ff00", this.state.color)}
          >
            <i className="fas fa-check"></i>
          </div>
          <SketchPicker color={this.state.color} onChange={this.handleChange} />
        </div>
      );
    } else {
      return (
        <div
          onClick={this.changePickerVisibility}
          style={getColorSquareStyle(this.state.color)}
        ></div>
      );
    }
  }
}

const getColorSquareStyle = (color, currentColor = null) => {
  if (!currentColor) {
    currentColor = color;
  }
  return {
    width: "20px",
    height: "20px",
    backgroundColor: color,
    color: currentColor,
    margin: "5px",
    cursor: "pointer",
  };
};

export default Color;
