// @flow
import React, { Component } from "react";
import { DraftUtils } from "draft-js";

/**
 * Editor block to preview and edit images.
 */
class ImageBlock extends Component {
  constructor() {
    super();

    this.changeAlt = this.changeAlt.bind(this);
  }

  changeAlt(e) {
    const { block, blockProps } = this.props;
    const { editorState, onChange } = blockProps;

    if (e.currentTarget instanceof HTMLInputElement) {
      const data = {
        alt: e.currentTarget.value
      };

      onChange(DraftUtils.updateBlockEntity(editorState, block, data));
    }
  }

  render() {
    const { blockProps } = this.props;
    const { entity, onEditEntity, onRemoveEntity } = blockProps;
    const { src, alt } = entity.getData();

    return (
      <React.Fragment>
        <img src={src} alt={alt} />
        <button
          type="button"
          className="Tooltip__button"
          onClick={onEditEntity}
        >
          Edit
        </button>
        <button
          type="button"
          className="Tooltip__button"
          onClick={onRemoveEntity}
        >
          Remove
        </button>
      </React.Fragment>
    );
  }
}

export default ImageBlock;
