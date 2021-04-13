import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ColorThemes from "./color_themes";

class ColorThemeHook extends Component {
  constructor(props) {
    super();
    this.props = props;

    let colorThemes = new ColorThemes();

    this.update = colorThemes.update;

    this.state = {
      themes: colorThemes.themes,
    };
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  state = {
    themes: [],
  };

  render() {
    return this.props.children;
  }
}

export default withRouter(ColorThemeHook);
