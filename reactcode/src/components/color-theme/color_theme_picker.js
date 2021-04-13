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
        {this.state.themes.map((theme, index) => (
          <button key={index} onClick={() => this.set(theme.value)}>
            {theme.name}
          </button>
        ))}
      </div>
    );
  }
}

export default ColorThemePicker;
