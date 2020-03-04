// @flow
import React, { Component } from "react";

class LinkBlock extends Component {
  render() {
    const { blockProps } = this.props;
    const { entity } = blockProps;
    const { href } = entity.getData();

    return <a href={href}>{href}</a>;
  }
}

export default LinkBlock;
