// @flow
import React, { Component } from "react";

class LinkBlock extends Component {
  render() {
    const { blockProps } = this.props;
    const { entity } = blockProps;
    const { url } = entity.getData();

    return <a href={url}>{url}</a>;
  }
}

export default LinkBlock;
