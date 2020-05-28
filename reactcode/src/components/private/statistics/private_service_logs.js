import React from "react";

const PrivateServiceLogs = (props) => {
  let service = props.service;
  return (
    <div style={logsDiv}>
      <div style={logAreaStyle}>
        {service.logs.lines.map((line) => (
          <div
            style={line.type === "STDOUT" ? stdout : stderr}
            key={service.logs.lines.indexOf(line)}
          >
            <div style={lineStyle}>$ {line.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Style

const logAreaStyle = {
  overflowY: "scroll",
  height: "350px",
  border: "solid 1px",
  background: "#253138",
  padding: "15px 0",
};

const logsDiv = {
  margin: "10px",
  borderRadius: "5px",
};

const stdout = {
  background: "ligthGrey",
};

const stderr = {
  background: "#8C172380",
};

const lineStyle = {
  lineHeight: "1vw",
  color: "#9CC4E2",
  margin: "0.3vw 15px",
};

export default PrivateServiceLogs;
