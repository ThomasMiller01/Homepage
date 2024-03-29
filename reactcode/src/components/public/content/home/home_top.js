import React from "react";
import { NavLink } from "react-router-dom";

const HomeTop = () => {
  return (
    <div style={homeTopStyle} className="homeHeader">
      <div style={nameDivStyle} className="homeNameHeader">
        <h1 style={nameStyle}>
          <span style={firstNameColorStyle}>Thomas</span> Miller
        </h1>
        <h2 style={belowNameStyle} className="homeBelowNames">
          Software Developer()
        </h2>
      </div>
      <div style={middleTextStyle} className="homeMiddleText">
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "bottom" }}>
                <h1 style={middelTextH1Style}>
                  Hi, I am a <div> </div>Software Developer
                </h1>
                <h3 style={middelTextH3Style}>
                  Python, Java, C#, TypeScript, JavaScript
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={buttonTabelStyle}>
          <tbody>
            <tr>
              <td>
                <NavLink
                  to={{ pathname: "/projects/all" }}
                  style={middelTextButtonStyle}
                >
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-lg see-all-project-btn"
                  >
                    See All Projects
                  </button>
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const buttonTabelStyle = {
  width: "100%",
  height: "40%",
};

const homeTopStyle = {
  width: "100%",
  height: "93.5vh",
  backgroundImage: "url('/images/home-top.png')",
  backgroundColor: "black",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const nameDivStyle = {
  textAlign: "center",
  width: "167px",
  position: "absolute",
  right: "15px",
  top: "5px",
};

const nameStyle = {
  color: "#E2E07B",
  fontSize: "24px",
  fontWeight: "300",
  fontFamily: "'Work Sans', sans-serif",
  margin: "0",
};

const belowNameStyle = {
  fontSize: "18px",
  fontWeight: "300",
  color: "white",
  fontFamily: "'Rajdhani', sans-serif",
};

const tableStyle = {
  width: "100%",
  height: "40%",
};

const firstNameColorStyle = {
  color: "#76D5D1",
};

const middleTextStyle = {
  width: "100%",
  height: "100%",
  textAlign: "center",
};

const middelTextH1Style = {
  fontSize: "2.3rem",
  margin: "0 auto",
  width: "90vw",
  verticalAlign: "middle",
};

const middelTextH3Style = {
  fontSize: "1.25rem",
  margin: "10px auto 0 auto",
  width: "90vw",
  verticalAlign: "middle",
};

const middelTextButtonStyle = {
  fontSize: "1.25rem",
  margin: "10px auto 0 auto",
  width: "90vw",
  verticalAlign: "bottom",
};

export default HomeTop;
