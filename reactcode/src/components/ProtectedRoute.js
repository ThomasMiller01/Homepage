import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import AuthService from "./authService";

class ProtectedRoute extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = { isAuth: false };

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.setState({ isAuth: true });
    } else {
      this.setState({ isAuth: false });
      this.props.history.replace("/home");
    }
  }

  render() {
    if (this.state.isAuth) {
      return <Route path={this.props.path} component={this.props.component} />;
    } else {
      return <span />;
    }
  }
}

export default withRouter(ProtectedRoute);
