import React, { Component } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import AuthService from "../../authService";

import PrivateServiceStats from "./stats/private_service_stats";
import PrivateServiceLogs from "./private_service_logs";
import PrivateServicePorts from "./private_service_ports";
import PrivateServiceControls from "./private_service_controls";
import ToastsComponent from "./toasts/toastsComponent";

import { getAllServiceHealth, getServiceHealth } from "./serviceDataQuery";
import { healthcheck_url } from "../../api_urls";

import exampleService from "./exampleServices";

class PrivateStatistics extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();

    this.healthcheckApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new createUploadLink({
        uri: healthcheck_url,
      }),
    });

    this.stateColorCodes = {
      CREATED: "158, 244, 108, 0.5",
      RESTARTING: "146, 191, 150, 0.8",
      RUNNING: "86, 155, 54, 1",
      PAUSED: "252, 122, 30, 1",
      REMOVING: "230, 96, 67, 1",
      EXITED: "216, 12, 8, 0.8",
      DEAD: "30, 33, 43, 0.7",
    };

    this.toastRef = new React.createRef();
  }

  state = {
    services: [],
    fetched: false,
  };

  componentDidMount() {
    this.getServices();
  }

  // state = {
  //   services: exampleService(),
  //   fetched: true,
  // };

  getServices = () => {
    this.healthcheckApi.cache.reset();
    let token = this.Auth.getToken();
    this.healthcheckApi
      .query({
        query: getAllServiceHealth,
        variables: { token },
      })
      .then((result) => {
        let services = JSON.parse(
          JSON.stringify(result.data.getAllServiceHealth)
        );
        for (let i = 0; i < services.length; i++) {
          let service = services[i];
          service["loading"] = false;
          services[i] = service;
        }
        this.setState({ services });
        this.setState({ fetched: true });
      });
  };

  getService = (service_id) => {
    this.getServiceData(service_id).then((result) => {
      let service = result;
      let services = this.state.services;
      services["loading"] = false;
      let index = services.findIndex((x) => x.service.id === service_id);
      services[index] = service;
      this.setState({ services });
    });
  };

  getServiceData = (service_id) => {
    this.healthcheckApi.cache.reset();
    let token = this.Auth.getToken();
    return this.healthcheckApi
      .query({
        query: getServiceHealth,
        variables: { token, containerid: service_id },
      })
      .then((result) => {
        return JSON.parse(JSON.stringify(result.data.getServiceHealth));
      });
  };

  setServiceLoading = (service_id, state) => {
    let services = this.state.services;
    let index = services.findIndex((item) => item.service.id === service_id);
    services[index].loading = state;
    this.setState({ services });
  };

  deleteService = (service_id) => {
    let services = this.state.services;
    let index = services.findIndex((item) => item.service.id === service_id);
    services.splice(index, 1);
    this.setState({ services });
  };

  renderDate = (date) => {
    let datetime = new Date(date);
    return datetime
      .toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .split(".")
      .join("/")
      .replace(",", "");
  };

  renderServiceExtraInformation = (service) => {
    return (
      <React.Fragment>
        <div
          className="collapse"
          id={"collapseInfo" + service.service.id}
          data-parent={"#accordion" + service.service.id}
        >
          <hr />
          <h5>Image: {service.service.image}</h5>
          <h5>Created: {this.renderDate(service.service.created)}</h5>
          <h5>Command: "{service.service.command}"</h5>
          <PrivateServicePorts service={service} />
          <h5>Error: {service.error}</h5>
          <hr />
        </div>
        <div
          className="collapse"
          id={"collapseStats" + service.service.id}
          data-parent={"#accordion" + service.service.id}
        >
          <PrivateServiceStats service={service} />
        </div>
        <div
          className="collapse"
          id={"collapseLogs" + service.service.id}
          data-parent={"#accordion" + service.service.id}
        >
          <PrivateServiceLogs service={service} />
        </div>
      </React.Fragment>
    );
  };

  renderServiceMenu = (service) => {
    return (
      <div className="dropdown dropleft" style={dropdownStyle}>
        <button
          className="btn btn-primary"
          style={dropdownButtonStyle}
          type="button"
          data-toggle="dropdown"
        >
          <i className="fas fa-ellipsis-v" style={dropdownIconStyle}></i>
        </button>
        <div className="dropdown-menu">
          <a
            className="dropdown-item"
            data-toggle="collapse"
            href={"#collapseInfo" + service.service.id}
            role="button"
            style={buttonStyle}
          >
            Info
          </a>
          <a
            className="dropdown-item"
            data-toggle="collapse"
            href={"#collapseStats" + service.service.id}
            role="button"
            style={buttonStyle}
          >
            Stats
          </a>
          <a
            className="dropdown-item"
            data-toggle="collapse"
            href={"#collapseLogs" + service.service.id}
            role="button"
            style={buttonStyle}
          >
            Logs
          </a>
        </div>
      </div>
    );
  };

  renderService = (service) => {
    return (
      <React.Fragment>
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h4 className="m-0 font-weight-bold">{service.service.name}</h4>
          <i
            className="fas fa-sync-alt"
            style={refreshIconStyle}
            onClick={() => this.getService(service.service.id)}
          />
        </div>
        <div className="card-body">
          <div className="accordion" id={"accordion" + service.service.id}>
            <h5>
              {service.state} <small>{service.status}</small>
              {this.renderServiceMenu(service)}
            </h5>
            {this.renderServiceExtraInformation(service)}
            <PrivateServiceControls
              service={service}
              reloadService={this.getService}
              deleteService={this.deleteService}
              getServiceData={this.getServiceData}
              setServiceLoading={this.setServiceLoading}
              toastRef={this.toastRef}
            />
            <p className="card-text" style={lastUpdatedStyle}>
              <small>Last updated: {this.renderDate(service.datetime)}</small>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  };

  renderServiceLoading = (service) => {
    if (service.loading) {
      return (
        <React.Fragment>
          <div
            className="card shadow mb-4"
            style={{
              background: "rgb(" + this.stateColorCodes[service.state] + ")",
            }}
          >
            <div style={loadingFieldStyle}>
              <div style={loadingSpinnerDivStyle}>
                <div className="spinner-border">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            {this.renderService(service)}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div
          className="card shadow mb-4"
          style={{
            background: "rgb(" + this.stateColorCodes[service.state] + ")",
          }}
        >
          {this.renderService(service)}
        </div>
      );
    }
  };

  renderServices = () => {
    if (!this.state.fetched) {
      return (
        <div style={loadingStyle}>
          <h5>
            <i>Loading Services </i>
            <div className="spinner-grow" style={loadingIconStyle}>
              <span className="sr-only">Loading...</span>
            </div>
          </h5>
        </div>
      );
    } else if (this.state.services.length === 0) {
      return (
        <div style={loadingStyle}>
          <h5>
            <i>No services online</i>
          </h5>
        </div>
      );
    } else {
      return this.state.services.map((service) => (
        <div className="col-md-3 col-sm-12" key={service.service.id}>
          {this.renderServiceLoading(service)}
        </div>
      ));
    }
  };

  render() {
    return (
      <div className="containerDashboard" style={containerDashboardStyle}>
        <div className="row" style={rowStyle}>
          {this.renderServices()}
        </div>
        <ToastsComponent ref={this.toastRef} />
      </div>
    );
  }
}

// Styles
const loadingSpinnerDivStyle = {
  height: "100%",
  width: "100%",
  padding: "20%",
};

const loadingFieldStyle = {
  background: "grey",
  zIndex: "2",
  width: "100%",
  height: "100%",
  position: "absolute",
  opacity: "0.6",
  textAlign: "center",
};

const lastUpdatedStyle = {
  color: "black",
};

const dropdownIconStyle = {
  fontSize: "20px",
};

const dropdownStyle = {
  float: "right",
};

const dropdownButtonStyle = {
  background: "none",
  color: "black",
  border: "none",
};

const loadingIconStyle = {
  verticalAlign: "middle",
};

const loadingStyle = {
  margin: "0 auto",
  textAlign: "center",
};

const rowStyle = {
  margin: "0",
};

const buttonStyle = {
  margin: "0 5px",
};

const containerDashboardStyle = { width: "100%", margin: "30px auto 0 auto" };

const refreshIconStyle = {
  cursor: "pointer",
  margin: "0 7px 0 7px",
  color: "black",
};

export default PrivateStatistics;
