import React, { Component } from "react";
import AuthService from "../authService";

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = { message: "None" };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.Auth.login(this.state.username, this.state.password).then((result) => {
      let token = result.data.login.token;
      if (token !== "") {
        this.Auth.setToken(token);
        this.props.history.replace("/private/home");
      } else {
        this.setState({ message: "Error" });
        setTimeout(() => {
          this.setState({ message: "None" });
        }, 3000);
      }
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/private/home");
  }

  render() {
    return (
      <div style={loginDivStyle}>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td>
                <div style={loginContainerStyle}>
                  <h3>Login</h3>
                  <form onSubmit={this.handleFormSubmit}>
                    <span style={spanStyle}>
                      <div className="form-group">
                        <GetErrorMessage message={this.state.message} />
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Username"
                          required
                          autoFocus
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                    </span>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={btnStyle}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const GetErrorMessage = (props) => {
  var status = props.message;
  if (status === "Error") {
    return (
      <div className="alert alert-danger">Invalid username or password.</div>
    );
  } else {
    return <span />;
  }
};

const tableStyle = { width: "100%", height: "100%" };

const loginDivStyle = {
  display: "inline-block",
  width: "100%",
  height: "80vh",
};

const loginContainerStyle = {
  padding: "30px",
  maxWidth: "350px",
  width: "100%",
  backgroundColor: "#F7F7F7",
  borderRadius: "2px",
  baxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
  fontFamily: "roboto",
  margin: "0 auto",
  verticalAlign: "middle",
};

const spanStyle = { textAlign: "left" };

const btnStyle = { width: "120px", fontSize: "20px" };

export default Login;
