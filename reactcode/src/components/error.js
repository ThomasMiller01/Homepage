import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div style={ErrorStyle}>
        <div style={coverStyle}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td>
                  <h1 style={coverH1Style}>
                    {this.props.error_title}
                    <small style={smallStyle}>
                      {" "}
                      Error {this.props.error_number}
                    </small>{" "}
                  </h1>
                  <p style={leadStyle}>
                    {this.props.error_description} [{this.props.file}]
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// Styles
const tableStyle = { width: "100%", height: "100vh" };

const ErrorStyle = {
  width: "100%",
  backgroundColor: "#21232a",
  padding: "10px",
  fontFamily: "Open Sans, Arial, sans-serif",
  lineHeight: "1.15",
  color: "#fff",
  textAlign: "center",
  textShadow: "0 2px 4px rgba(0,0,0,.5)",
  boxShadow: "inset 0 0 100px rgba(0, 0, 0, .8)"
};

const leadStyle = {
  color: "silver",
  fontSize: "21px",
  lineHeight: "1.4"
};

const coverStyle = {
  width: "100%",
  verticalAlign: "middle",
  padding: "0 20px"
};

const coverH1Style = {
  fontSize: "36px",
  margin: ".67em 0",
  fontFamily: "inherit",
  fontWeight: "500",
  lingHeight: "1.1",
  color: "inherit"
};

const smallStyle = {
  fontSize: "68%",
  fontWeight: "400",
  lineHeight: "1",
  color: "#777"
};

export default Error;
