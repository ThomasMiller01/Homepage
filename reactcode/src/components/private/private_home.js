import React, { Component } from "react";

import DynamicLiveLineChart from "./charts/dynamicLiveLineChart";

import AuthService from "../authService";

class PrivateHome extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentDidMount() {
    this.getServices();
  }

  state = {
    services: []
  };

  setService = service => {
    let currentServices = this.state.services;
    currentServices.push({
      id: service.id,
      name: service.name,
      state: service.state,
      chart: service.chart
    });
    this.setState({ services: currentServices });
  };

  getServices = () => {
    let services = [
      {
        id: 0,
        name: "TestService1",
        state: "running"
      },
      {
        id: 1,
        name: "TestService2",
        state: "offline"
      },
      {
        id: 2,
        name: "TestService3",
        state: "running"
      },
      {
        id: 3,
        name: "TestService4",
        state: "running"
      }
    ];

    services.forEach(service => {
      this.setService({
        id: service.id,
        name: service.name,
        state: service.state,
        chart: new DynamicLiveLineChart(service.name)
      });
      setInterval(this.updateServiceChart.bind(null, service.id, null), 1000);
    });
  };

  updateServiceChart = (service_id, data) => {
    data = Math.round(5 + Math.random() * (-5 - 5));
    this.state.services[service_id].chart.updateChart(data);
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
            {this.state.services.map(service => (
              <div className="col-md-6 col-sm-12" key={service.id}>
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold">{service.name}</h6>
                  </div>
                  <div className="card-body">
                    <h3>State: {service.state}</h3>
                    <div style={dynamicLiveLineChartStyle}>
                      {service.chart.render()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

const dynamicLiveLineChartStyle = {
  margin: "10px",
  width: "100%"
};

export default PrivateHome;
