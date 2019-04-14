import React from "react";

import Header from "../../header";
import Footer from "../../footer";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={aboutmeDivStyle}>
        <center>
          <h1>About Me</h1>
        </center>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const aboutmeDivStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px"
};

export default AboutMe;
