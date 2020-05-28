import React, { Component } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { gql } from "apollo-boost";

import AuthService from "../../authService";

import PrivateServiceStats from "./stats/private_service_stats";
import PrivateServiceLogs from "./private_service_logs";
import PrivateServicePorts from "./private_service_ports";

import exampleService from "./exampleServices";

class PrivateStatistics extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();

    this.healthcheckApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new createUploadLink({
        uri: "https://api.thomasmiller.info/healthcheck",
      }),
    });
  }

  state = {
    services: [],
  };

  componentDidMount() {
    this.getServices();
  }

  // state = {
  //   services: exampleService(),
  // };

  getServices = () => {
    let token = this.Auth.getToken();
    this.healthcheckApi
      .query({
        query: gql`
          query($token: String) {
            getAllServiceHealth(token: $token) {
              service {
                id
                name
                command
                image
                ports {
                  ip
                  privatePort
                  publicPort
                  type
                }
              }
              state
              status
              stats {
                read
                cpu {
                  onlineCpus
                  totalUsage
                  systemCpuUsage
                  perCpuUsage
                }
                memory {
                  usage
                  maxUsage
                  limit
                }
                io {
                  read_major
                  read_minor
                  read_value
                  write_major
                  write_minor
                  write_value
                }
                network {
                  rx_bytes
                  rx_packets
                  rx_errors
                  rx_dropped
                  tx_bytes
                  tx_packets
                  tx_errors
                  tx_dropped
                }
              }
              logs {
                lines {
                  type
                  content
                }
              }
              created
              error {
                code
                type
                message
                time
              }
            }
          }
        `,
        variables: { token },
      })
      .then((result) => {
        let services = JSON.parse(
          JSON.stringify(result.data.getAllServiceHealth)
        );
        this.setState({ services });
      });
  };

  getService = (service_id) => {
    let token = this.Auth.getToken();
    this.healthcheckApi
      .query({
        query: gql`
          query($token: String, $containerid: String) {
            getServiceHealth(token: $token, containerid: $containerid) {
              service {
                id
                name
                command
                image
                ports {
                  ip
                  privatePort
                  publicPort
                  type
                }
              }
              state
              status
              stats {
                read
                cpu {
                  onlineCpus
                  totalUsage
                  systemCpuUsage
                  perCpuUsage
                }
                memory {
                  usage
                  maxUsage
                  limit
                }
                io {
                  read_major
                  read_minor
                  read_value
                  write_major
                  write_minor
                  write_value
                }
                network {
                  rx_bytes
                  rx_packets
                  rx_errors
                  rx_dropped
                  tx_bytes
                  tx_packets
                  tx_errors
                  tx_dropped
                }
              }
              logs {
                lines {
                  type
                  content
                }
              }
              created
              error {
                code
                type
                message
                time
              }
            }
          }
        `,
        variables: { token, containerid: service_id },
      })
      .then((result) => {
        let service = JSON.parse(JSON.stringify(result.data.getServiceHealth));
        let services = this.state.services;
        let index = services.findIndex((x) => x.service.id === service_id);
        services[index] = service;
        this.setState({ services });
      });
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

  render() {
    return (
      <div className="containerDashboard" style={containerDashboardStyle}>
        <div className="row">
          {this.state.services.map((service) => (
            <div className="col-md-3 col-sm-12" key={service.service.id}>
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h4 className="m-0 font-weight-bold">
                    {service.service.name}{" "}
                    <small>{service.service.image}</small>
                  </h4>
                  <i
                    className="fas fa-sync-alt"
                    style={refreshIconStyle}
                    onClick={() => this.getService(service.service.id)}
                  />
                </div>
                <div className="card-body">
                  <h5>
                    State: {service.state} <small>{service.status}</small>
                  </h5>
                  <div style={{ display: "none" }}>
                    <h5>Command: "{service.service.command}"</h5>
                    <h5>Error: {service.error}</h5>
                  </div>
                  <PrivateServicePorts service={service} />
                  <div style={{ display: "none" }}></div>
                  <PrivateServiceStats service={service} />
                  <PrivateServiceLogs service={service} />
                  <p className="card-text">
                    <small className="text-muted">
                      Created: {this.renderDate(service.created)}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Styles
const containerDashboardStyle = { width: "100%", margin: "30px auto 0 auto" };

const refreshIconStyle = {
  cursor: "pointer",
  margin: "0 7px 0 7px",
  color: "black",
};

export default PrivateStatistics;
