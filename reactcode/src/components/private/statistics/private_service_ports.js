import React from "react";

const PrivateServicePorts = (props) => {
  let service = props.service;
  return (
    <div style={logsDiv}>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ip</th>
              <th scope="col">private</th>
              <th scope="col">public</th>
              <th scope="col">type</th>
            </tr>
          </thead>
          <tbody>
            {service.service.ports.map((port) => (
              <tr key={service.service.ports.indexOf(port)}>
                <td>{port.ip}</td>
                <td>{port.privatePort}</td>
                <td>{port.publicPort}</td>
                <td>{port.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Style
const logsDiv = {
  padding: "5px",
  margin: "10px",
  borderRadius: "5px",
};

export default PrivateServicePorts;
