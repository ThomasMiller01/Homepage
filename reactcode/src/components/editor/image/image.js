import React from "react";

import TooltipEntity from "../tooltip/tooltip_entity";

const Image = ({ entityKey, contentState, children, onEdit, onRemove }) => {
  const { src, alt } = contentState.getEntity(entityKey).getData();

  return (
    <TooltipEntity
      entityKey={entityKey}
      contentState={contentState}
      onEdit={onEdit}
      onRemove={onRemove}
    >
      <img src={src} alt={alt}></img>
    </TooltipEntity>
  );
};

export default Image;
