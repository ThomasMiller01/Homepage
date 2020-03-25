import React from "react";

const PrivateChangeProjectPreview = props => {
  if (!props.isMobile || props.renderPreview) {
    return (
      <div className="input-group input_both" style={inputRenderStyle}>
        <h1 style={inputGroupH1Style}>Preview</h1>
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
        <h2 style={inputGroupH2Style}>Description</h2>
        <div
          style={rendereTextboxStyle}
          dangerouslySetInnerHTML={{
            __html: props._description
          }}
        />
        <h2 style={inputGroupH2Style}>Description Big</h2>
        <div
          style={rendereTextboxStyle}
          dangerouslySetInnerHTML={{
            __html: props._description_big
          }}
        />
      </div>
    );
  } else {
    return <span />;
  }
};

const inputGroupInputStyle = { width: "100%" };

const inputGroupH2Style = {
  width: "100%",
  textAlign: "left",
  fontSize: "20px",
  marginBottom: "5px",
  marginTop: "5px"
};

const inputGroupH1Style = {
  width: "95%",
  textAlign: "left",
  fontSize: "30px",
  marginBottom: "10px"
};

const rendereTextboxStyle = {
  width: "100%",
  backgroundColor: "white",
  padding: "10px",
  marginTop: "75px",
  textAlign: "left",
  minHeight: "325px"
};

const inputRenderStyle = {
  marginLeft: "2.5%",
  display: "inline-block",
  verticalAlign: "top"
};

export default PrivateChangeProjectPreview;
