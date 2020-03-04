import React, { Component } from "react";
import {
  DraftailEditor,
  BLOCK_TYPE,
  INLINE_STYLE,
  ENTITY_TYPE
} from "draftail";

import ImageSource from "./image/imageSource";
import LinkDecorator from "./linkDecorator";
import ImageBlock from "./image/imageBlock";

import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";

class Editor extends Component {
  constructor() {
    super();
    this.initial = JSON.parse(sessionStorage.getItem("draftail:content"));
  }

  onSave = content => {
    sessionStorage.setItem("draftail:content", JSON.stringify(content));
  };

  state = {};
  render() {
    return (
      <DraftailEditor
        rawContentState={this.initial || null}
        onSave={this.onSave}
        blockTypes={[
          { type: BLOCK_TYPE.HEADER_ONE },
          { type: BLOCK_TYPE.HEADER_TWO },
          { type: BLOCK_TYPE.HEADER_THREE },
          { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
          { type: BLOCK_TYPE.CODE },
          { type: BLOCK_TYPE.BLOCKQUOTE }
        ]}
        inlineStyles={[
          { type: INLINE_STYLE.BOLD },
          { type: INLINE_STYLE.ITALIC },
          { type: INLINE_STYLE.UNDERLINE }
        ]}
        entityTypes={[
          { type: ENTITY_TYPE.HORIZONTAL_RULE },
          {
            // We use the same value for type as in the converter.
            type: ENTITY_TYPE.IMAGE,
            source: ImageSource,
            decorator: ImageBlock,
            // We define what data the LINKs can have.
            attributes: ["url"],
            whitelist: {
              href: "^(?![#/])"
            }
          }
        ]}
      />
    );
  }
}

export default Editor;
