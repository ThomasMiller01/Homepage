import React, { Component } from "react";

import ColorThemes from "./color_themes";

class ColorThemePicker extends Component {
  constructor(props) {
    super();
    this.props = props;

    let colorThemes = new ColorThemes();

    this.set = colorThemes.set;

    this.state = {
      themes: colorThemes.themes,
    };
  }

  state = {
    themes: [],
  };

  render() {
    return (
      <div>
        <h3>Color-Theme-Picker</h3>
        {this.state.themes.map((theme, index) => (
          <button
            key={index}
            onClick={() => this.set(theme.value)}
            style={buttonStyle}
            className="btn btn-info"
          >
            {theme.name}
          </button>
        ))}
      </div>
    );
  }
}

const buttonStyle = {
  margin: "5px",
};

export default ColorThemePicker;
