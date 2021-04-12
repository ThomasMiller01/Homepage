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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.color !== this.state.color) {
      this.setState({
        color: nextProps.color,
      });
    }
    return true;
  }

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
        <React.Fragment>
          <div
            onClick={this.changePickerVisibility}
            style={getColorSquareStyle("#1C00ff00", this.state.color)}
          >
            <i
              className="fas fa-check check-icon-main"
              style={checkIconStyle}
            ></i>
          </div>
          <div style={ColorPickerStyle}>
            <div className="innerColorDiv">
              <SketchPicker
                color={this.state.color}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div
          onClick={this.changePickerVisibility}
          style={getColorSquareStyle(this.state.color)}
          className="color-picker-main"
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

const checkIconStyle = {
  verticalAlign: "text-top",
};

const ColorPickerStyle = {
  position: "absolute",
  width: 0,
};

export default Color;
