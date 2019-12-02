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
