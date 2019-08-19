import React, { Component } from "react";

import ColumnChart from "./charts/columnChart";
import PieChart from "./charts/pieChart";
import HighPerformanceChart from "./charts/highPerformanceChart";
import ColumnLineAreaChart from "./charts/columnLineAreaChart";

import AuthService from "../authService";

class PrivateHome extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    services: []
  };

  componentDidMount = () => {
    this.getSupervisorData();
  };

  getSupervisorData = () => {
    const headers = {
      Authorization: "Bearer " + this.Auth.getToken(),
      "Content-Type": "application/json"
    };
    fetch("http://v220190810228695422.bestsrv.de/api/supervisor/status", {
      headers
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        var replaced = data
          .replace('"[{', "")
          .replace('}]"', "")
          .replace(new RegExp("'", "g"), '"');
        var splited = replaced.split("}, {");
        var jsonArray = [];
        splited.forEach(element => {
          var jsonParsed = JSON.parse("{" + element + "}");
          jsonArray.push(jsonParsed);
        });
        this.setState({ services: jsonArray });
      });
  };

  handleLogout = () => {
    this.props.history.replace("/home");
    this.Auth.logout();
  };

  render() {
    return (
      <div style={privateHomeStyle}>
        <center>
          <h1 style={privateHomeH1Style}>Home</h1>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={logoutBtnStyle}
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </center>
        <div className="containerDashboard" style={containerDashboardStyle}>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold">Supervisor Services</h6>
                  <i
                    className="fas fa-sync-alt"
                    style={supervisorIconStyle}
                    onClick={this.getSupervisorData}
                  />
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-light">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>State</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.services.map(service => (
                          <tr key={service.pid}>
                            <td>{service.name}</td>
                            <td>{service.statename}</td>
                            <td>{service.description}</td>
                            <td>
                              <i
                                className="fas fa-play"
                                style={supervisorActionIconStyle}
                              />
                              <i
                                className="fas fa-stop"
                                style={supervisorActionIconStyle}
                              />
                              <i
                                className="fas fa-redo"
                                style={supervisorActionIconStyle}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold">Column Chart</h6>
                </div>
                <div className="card-body">
                  <ColumnChart style={columnChartStyle} />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold">Pie Chart</h6>
                </div>
                <div className="card-body">
                  <div className="card-body">
                    <PieChart style={pieChartStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold">
                    High Performance Chart
                  </h6>
                </div>
                <div className="card-body">
                  <HighPerformanceChart style={highPerformanceChartStyle} />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold">ColumnLineAreaChart</h6>
                </div>
                <div className="card-body">
                  <ColumnLineAreaChart style={columnLineAreaChartStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Styles
const supervisorActionIconStyle = { cursor: "pointer", margin: "0 7px 0 7px" };

const supervisorIconStyle = { cursor: "pointer" };

const containerDashboardStyle = { width: "100%", margin: "30px auto 0 auto" };

const logoutBtnStyle = {
  position: "absolute",
  margin: "10px",
  top: "0",
  right: "0"
};

const privateHomeH1Style = {
  margin: "0"
};

const privateHomeStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px"
};

const columnChartStyle = {
  height: "370px",
  width: "100%"
};

const pieChartStyle = {
  height: "370px",
  width: "100%",
  margin: "0 auto"
};

const highPerformanceChartStyle = {
  height: "370px",
  width: "100%",
  margin: "0 auto"
};

const columnLineAreaChartStyle = {
  height: "370px",
  width: "100%",
  margin: "0 auto"
};

export default PrivateHome;
