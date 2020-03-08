import React from "react";

import TooltipEntity from "../tooltip/tooltip_entity";

const Link = ({ entityKey, contentState, children, onEdit, onRemove }) => {
  const { url, linkType } = contentState.getEntity(entityKey).getData();
  const isEmailLink = linkType === "email" || url.startsWith("mailto:");
  const icon = `#icon-${isEmailLink ? "mail" : "link"}`;
  const label = url.replace(/(^\w+:|^)\/\//, "").split("/")[0];

  return (
    <TooltipEntity
      entityKey={entityKey}
      contentState={contentState}
      onEdit={onEdit}
      onRemove={onRemove}
      icon={icon}
      label={label}
    >
      {label}
    </TooltipEntity>
  );
};

export default Link;
