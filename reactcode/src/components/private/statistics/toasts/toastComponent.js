import React, { Component } from "react";
import Toast from "react-bootstrap/Toast";

class ToastComponent extends Component {
  constructor(props) {
    super();
    this.key = props._key;
    this.title = props.title;
    this.smallTitle = props.smallTitle;
    this.text = props.text;
    this.removeToast = props.removeToast;
  }

  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
    this.removeToast(this.key);
  };

  state = {
    show: false,
  };

  render() {
    return (
      <Toast show={this.state.show} onClose={this.close} style={toastStyle}>
        <Toast.Header>
          <strong className="mr-auto">{this.title}</strong>
          <small>{this.smallTitle}</small>
        </Toast.Header>
        <Toast.Body>{this.text}</Toast.Body>
      </Toast>
    );
  }
}

// Styles
const toastStyle = {
  minWidth: "200px",
};

export default ToastComponent;
