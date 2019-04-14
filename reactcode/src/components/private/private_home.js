import React, { Component } from "react";

import ColumnChart from "./charts/columnChart";
import PieChart from "./charts/pieChart";
import HighPerformanceChart from "./charts/highPerformanceChart";
import LiveChart from "./charts/liveChart";

class PrivateHome extends Component {
  state = {
    services: [
      {
        now: 1555268944,
        group: "PersonalWebsite",
        description: "pid 29706, uptime 10 days, 6:39:47",
        pid: 29706,
        stderr_logfile: "/home/phase7/logs/personalWebsite-stderr.log",
        stop: 0,
        statename: "RUNNING",
        start: 1554380957,
        state: 20,
        stdout_logfile: "/home/phase7/logs/personalWebsite-stdout.log",
        logfile: "/home/phase7/logs/personalWebsite-stdout.log",
        exitstatus: 0,
        spawnerr: "",
        name: "PersonalWebsite"
      },
      {
        now: 1555268944,
        group: "Phase7",
        description: "pid 29874, uptime 10 days, 6:39:46",
        pid: 29874,
        stderr_logfile:
          "/home/phase7/tmp/Phase7-stderr---supervisor_phase7-tqWUXd.log",
        stop: 0,
        statename: "RUNNING",
        start: 1554380958,
        state: 20,
        stdout_logfile:
          "/home/phase7/tmp/Phase7-stdout---supervisor_phase7-IfvbPO.log",
        logfile:
          "/home/phase7/tmp/Phase7-stdout---supervisor_phase7-IfvbPO.log",
        exitstatus: 0,
        spawnerr: "",
        name: "Phase7"
      },
      {
        now: 1555268944,
        group: "SupervisorWebApi",
        description: "pid 29794, uptime 10 days, 6:39:46",
        pid: 29794,
        stderr_logfile: "/home/phase7/logs/supervisorWebApi-stderr.log",
        stop: 0,
        statename: "RUNNING",
        start: 1554380958,
        state: 20,
        stdout_logfile: "/home/phase7/logs/supervisorWebApi-stdout.log",
        logfile: "/home/phase7/logs/supervisorWebApi-stdout.log",
        exitstatus: 0,
        spawnerr: "",
        name: "SupervisorWebApi"
      },
      {
        now: 1555268944,
        group: "TimeLogger",
        description: "pid 29737, uptime 10 days, 6:39:47",
        pid: 29737,
        stderr_logfile:
          "/home/phase7/tmp/TimeLogger-stderr---supervisor_phase7-M3g01j.log",
        stop: 0,
        statename: "RUNNING",
        start: 1554380957,
        state: 20,
        stdout_logfile:
          "/home/phase7/tmp/TimeLogger-stdout---supervisor_phase7-l2JMUo.log",
        logfile:
          "/home/phase7/tmp/TimeLogger-stdout---supervisor_phase7-l2JMUo.log",
        exitstatus: 0,
        spawnerr: "",
        name: "TimeLogger"
      },
      {
        now: 1555268944,
        group: "Weihnachtsgeschenk",
        description: "pid 29747, uptime 10 days, 6:39:46",
        pid: 29747,
        stderr_logfile:
          "/home/phase7/tmp/Weihnachtsgeschenk-stderr---supervisor_phase7-euuIyb.log",
        stop: 0,
        statename: "RUNNING",
        start: 1554380958,
        state: 20,
        stdout_logfile:
          "/home/phase7/tmp/Weihnachtsgeschenk-stdout---supervisor_phase7-ejST7a.log",
        logfile:
          "/home/phase7/tmp/Weihnachtsgeschenk-stdout---supervisor_phase7-ejST7a.log",
        exitstatus: 0,
        spawnerr: "",
        name: "Weihnachtsgeschenk"
      }
    ]
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
                  <i className="fas fa-sync-alt" style={supervisorIconStyle} />
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
                  <h6 className="m-0 font-weight-bold">LiveChart</h6>
                </div>
                <div className="card-body">
                  <LiveChart style={liveChartStyle} />
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

const liveChartStyle = {
  height: "370px",
  width: "100%",
  margin: "0 auto"
};

export default PrivateHome;
