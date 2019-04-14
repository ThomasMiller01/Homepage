import React from "react";

const Login = () => {
  return (
    <div style={loginDivStyle}>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td>
              <div style={loginContainerStyle}>
                <h3>Login</h3>
                <form>
                  <span style={spanStyle}>
                    <div className="form-group">
                      <div className="alert alert-danger">
                        Invalid username or password.
                      </div>
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        required
                        autoFocus
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
};

const tableStyle = { width: "100%", height: "100%" };

const loginDivStyle = {
  display: "inline-block",
  width: "100%",
  height: "80vh"
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
  verticalAlign: "middle"
};

const spanStyle = { textAlign: "left" };

const btnStyle = { width: "120px", fontSize: "20px" };

export default Login;
