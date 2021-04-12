import React from "react";

const PrivateChangeProjectPreview = (props) => {
  if (!props.isMobile || props.renderPreview) {
    return (
      <div className="input-group input_both" style={inputRenderStyle}>
        <h1 style={inputGroupH1Style}>
          <b>Preview</b>
        </h1>
        {getTopHiddenFields(props.isMobile)}
        <h2 style={inputGroupH2Style}>Description</h2>
        <div
          className="textbox-main"
          style={rendereTextboxStyle(props.isMobile)}
          dangerouslySetInnerHTML={{
            __html: props._description,
          }}
        />
        <h2 style={inputGroupH2Style}>Description Big</h2>
        <div
          className="textbox-main"
          style={rendereTextboxStyle(props.isMobile)}
          dangerouslySetInnerHTML={{
            __html: props._description_big,
          }}
        />
      </div>
    );
  } else {
    return <span />;
  }
};

const getTopHiddenFields = (mobile) => {
  if (mobile) {
    return <span></span>;
  } else {
    return (
      <span style={{ visibility: "hidden" }}>
        <h2 style={inputGroupH2Style}>Name</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          style={inputGroupInputStyle}
          name="_name"
        />
        <h2 style={inputGroupH2Style}>GitHub Repo</h2>
        <input
          type="text"
          className="form-control"
          placeholder="GitHub Repo"
          style={inputGroupInputStyle}
          name="_githubRepo"
        />
      </span>
    );
  }
};

const inputGroupInputStyle = { width: "100%" };

const inputGroupH2Style = {
  width: "100%",
  textAlign: "left",
  fontSize: "20px",
  marginBottom: "5px",
  marginTop: "5px",
};

const inputGroupH1Style = {
  width: "95%",
  textAlign: "left",
  fontSize: "30px",
  marginBottom: "10px",
};

const rendereTextboxStyle = (mobile) => {
  let style = {
    width: "100%",
    padding: "10px",
    textAlign: "left",
    minHeight: "325px",
    overflow: "scroll",
  };
  if (!mobile) {
    style.marginTop = "75px";
  }
  return style;
};

const inputRenderStyle = {
  marginLeft: "2.5%",
  display: "inline-block",
  verticalAlign: "top",
};

export default PrivateChangeProjectPreview;
