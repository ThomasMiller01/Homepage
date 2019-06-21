import React from "react";

import Header from "../../header";
import Footer from "../../footer";

import SocialMediaIcons from "../../socialMediaIcons";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={topDivStyle}>
        <table style={topTableStyle}>
          <tbody>
            <tr>
              <td>
                <div style={topTextDivStyle}>
                  <h1 style={topH1Style}>
                    <span style={topSpanStyle}>Thomas</span> Miller
                  </h1>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={aboutmeDivStyle} className="aboutMeDivStyle">
        <div style={imageDivStyle} className="imageDivStyle">
          <img
            src="/images/profile_pic.png"
            alt="Loading ..."
            style={imgStyle}
            className="imgStyle"
          />
        </div>
        <div style={descriptionDivStyle} className="descriptionDivStyle">
          <h1>Über mich</h1>
          <p style={pDescriptionStyle}>
            Mein Name ist Thomas Miller und ich bin {alter()} Jahre alt. Zurzeit
            gehe ich noch zur Schule und mache nächstes Jahr mein Abitur.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <SocialMediaIcons />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const topTableStyle = {
  width: "100%",
  height: "30vh"
};

const topH1Style = {
  color: "#E2E07B",
  marginBottom: "0",
  fontFamily: "'Work Sans',sans-serif"
};

const topSpanStyle = {
  color: "#76D5D1",
  width: "0",
  margin: "0",
  height: "0"
};

const topTextDivStyle = {
  width: "100%",
  textAlign: "center",
  fontFamily: "DejaVuSansMono"
};

const alter = () => {
  var birthday = +new Date("2001-12-10");
  return ~~((Date.now() - birthday) / 31557600000);
};

const pDescriptionStyle = {
  fontSize: "24px",
  lineHeight: "30px"
};

const imgStyle = {
  borderStyle: "solid",
  borderRadius: "100%"
};

const descriptionDivStyle = {
  gridColumn: "2",
  height: "100%",
  padding: "20px"
};

const imageDivStyle = {
  gridColumn: "1",
  margin: "0",
  textAlign: "right",
  padding: "20px"
};

const topDivStyle = {
  width: "100%",
  minHeight: "30vh",
  backgroundColor: "#272822",
  padding: "0"
};

const aboutmeDivStyle = {
  width: "100%",
  minHeight: "63.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "25px",
  gridTemplateColumns: "40% 60%"
};

export default AboutMe;
