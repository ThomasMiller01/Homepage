import React, { Component } from "react";

import ToastComponent from "./toastComponent";

class ToastsComponent extends Component {
  constructor() {
    super();
    this.refsArray = [];
  }

  state = {
    toasts: [],
  };

  addToast = (key, title, smallTitle, text) => {
    let toasts = this.state.toasts;
    toasts.push({ key, title, smallTitle, text });
    this.refsArray.push({ key, ref: null });
    this.setState({ toasts });
  };

  onToastLoaded = (key) => {
    let index = this.refsArray.findIndex((item) => item.key === key);
    if (this.refsArray[index].ref) {
      this.refsArray[index].ref.show();
    }
  };

  removeToast = (key) => {
    let toasts = this.state.toasts;
    let index = toasts.findIndex((item) => item.key === key);
    toasts.splice(index, 1);
    this.setState({ toasts });
    let refIndex = this.refsArray.findIndex((item) => item.key === key);
    this.refsArray.splice(refIndex, 1);
  };

  checkKey = (key) => {
    let found = this.state.toasts.find((item) => item.key === key);
    if (found === undefined) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div style={positionStyle}>
        {this.state.toasts.map((toast) => (
          <ToastComponent
            ref={(ref) => {
              let index = this.refsArray.findIndex(
                (item) => item.key === toast.key
              );
              if (index !== -1) {
                this.refsArray[index].ref = ref;
                this.onToastLoaded(toast.key);
              }
            }}
            key={this.state.toasts.findIndex((item) => item === toast)}
            _key={toast.key}
            title={toast.title}
            smallTitle={toast.smallTitle}
            text={toast.text}
            removeToast={this.removeToast}
          />
        ))}
      </div>
    );
  }
}

// Styles

const positionStyle = {
  position: "absolute",
  right: "20px",
  bottom: "20px",
};

export default ToastsComponent;
