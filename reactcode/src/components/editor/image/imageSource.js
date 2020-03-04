import { Component } from "react";
import { AtomicBlockUtils } from "draft-js";

class ImageSource extends Component {
  componentDidMount() {
    const { editorState, entityType, onComplete } = this.props;

    const src = window.prompt("Image URL");

    if (src) {
      const content = editorState.getCurrentContent();
      const contentWithEntity = content.createEntity(
        entityType.type,
        "IMMUTABLE",
        { src }
      );
      const entityKey = contentWithEntity.getLastCreatedEntityKey();
      const nextState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        " "
      );

      onComplete(nextState);
    } else {
      onComplete(editorState);
    }
  }

  render() {
    return null;
  }
}

export default ImageSource;
