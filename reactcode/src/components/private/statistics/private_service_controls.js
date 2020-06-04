import React, { Component } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import AuthService from "../../authService";

import {
  startContainer,
  restartContainer,
  stopContainer,
  removeContainer,
} from "./serviceDataQuery";

class PrivateServiceControls extends Component {
  constructor(props) {
    super();
    this.Auth = new AuthService();
    this.service = props.service;
    this.reloadService = props.reloadService;
    this.deleteService = props.deleteService;
    this.getServiceData = props.getServiceData;
    this.healthcheckApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new createUploadLink({
        uri: "https://api.thomasmiller.info/healthcheck",
      }),
    });
  }

  start = () => {
    this.sendRequest(startContainer);
  };

  stop = () => {
    this.sendRequest(stopContainer);
  };

  restart = () => {
    this.sendRequest(restartContainer);
  };

  remove = () => {
    this.sendRequest(removeContainer);
  };

  sendRequest = (mutation) => {
    this.healthcheckApi.cache.reset();
    let token = this.Auth.getToken();
    this.healthcheckApi
      .mutate({
        mutation: mutation,
        variables: { token, containerid: this.service.service.id },
      })
      .then((result) => {
        this.getServiceData(this.service.service.id).then((result) => {
          if (result == null) {
            console.log("deleteService");
            this.deleteService(this.service.service.id);
          } else {
            this.service = result;
            this.reloadService(this.service.service.id);
          }
        });
      });
  };

  getStartStopControl = () => {
    if (this.service.state === "RUNNING") {
      return (
        <i className="fas fa-stop" style={iconStyle} onClick={this.stop}></i>
      );
    } else {
      return (
        <i className="fas fa-play" style={iconStyle} onClick={this.start}></i>
      );
    }
  };

  getRestartControl = () => {
    if (this.service.state === "RUNNING") {
      return (
        <i className="fas fa-redo" style={iconStyle} onClick={this.restart}></i>
      );
    } else {
      return <i className="fas fa-redo" style={iconDisabledStyle}></i>;
    }
  };

  render() {
    return (
      <div style={controlsDivStyle}>
        {this.getStartStopControl()}
        {this.getRestartControl()}
        <i
          className="fas fa-trash-alt"
          style={iconStyle}
          onClick={this.remove}
        ></i>
      </div>
    );
  }
}

// Styles
const controlsDivStyle = {};

const iconStyle = { margin: "10px", cursor: "pointer" };

const iconDisabledStyle = {
  margin: "10px",
  opacity: "0.5",
};

export default PrivateServiceControls;
