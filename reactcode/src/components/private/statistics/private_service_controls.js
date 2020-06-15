import React, { Component } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import AuthService from "../../authService";

import { healthcheck_url } from "../../api_urls";

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
    this.setServiceLoading = props.setServiceLoading;
    this.toastRef = props.toastRef;
    this.healthcheckApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new createUploadLink({
        uri: healthcheck_url,
      }),
    });
  }

  state = {
    activeToasts: [],
  };

  start = () => {
    this.sendRequest(startContainer);
    this.displayToast(this.service.service.name, "just now", "starting ...");
  };

  stop = () => {
    this.sendRequest(stopContainer);
    this.displayToast(this.service.service.name, "just now", "stopping ...");
  };

  restart = () => {
    this.sendRequest(restartContainer);
    this.displayToast(this.service.service.name, "just now", "restarting ...");
  };

  remove = () => {
    this.sendRequest(removeContainer);
    this.displayToast(this.service.service.name, "just now", "removing ...");
  };

  displayToast = (title, smallTitle, text) => {
    let activeToasts = this.state.activeToasts;
    let key = activeToasts.length + 1;
    let validKey = this.toastRef.current.checkKey(key);
    let i = 0;
    while (!validKey && i < 100) {
      key += 1;
      validKey = this.toastRef.current.checkKey(key);
      i++;
    }
    if (i < 100) {
      activeToasts.push({ key, title, smallTitle, text });
      this.toastRef.current.addToast(key, title, smallTitle, text);
      setTimeout(() => {
        this.toastRef.current.removeToast(key);
      }, 4000);
    } else {
      console.log("You can not have more than 100 Toasts at the same time.");
    }
  };

  sendRequest = (mutation) => {
    this.setServiceLoading(this.service.service.id, true);
    this.healthcheckApi.cache.reset();
    let token = this.Auth.getToken();
    this.healthcheckApi
      .mutate({
        mutation: mutation,
        variables: { token, containerid: this.service.service.id },
      })
      .then((result) => {
        this.getServiceData(this.service.service.id).then((result) => {
          this.setServiceLoading(this.service.service.id, true);
          if (result == null) {
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
      <React.Fragment>
        <div style={controlsDivStyle}>
          {this.getStartStopControl()}
          {this.getRestartControl()}
          <i
            className="fas fa-trash-alt"
            style={iconStyle}
            onClick={this.remove}
          ></i>
        </div>
      </React.Fragment>
    );
  }
}

// Styles
const controlsDivStyle = {};

const iconStyle = { margin: "10px", cursor: "pointer", zIndex: "2" };

const iconDisabledStyle = {
  margin: "10px",
  opacity: "0.5",
};

export default PrivateServiceControls;
