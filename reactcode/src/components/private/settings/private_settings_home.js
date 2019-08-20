import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Terminal } from "xterm";
import SSH from "react-native-ssh";

class PrivateSettingsHome extends Component {
  state = {
    terminal: null,
    config: {
      user: "phase7",
      host: "chiron.uberspace.de",
      password: "a5MVsu693"
    }
  };

  executeSSH2Command(command) {
    console.log(command);
    SSH.execute(this.state.config, command).then(
      result => console.log(result),
      error => console.log("Error:", error)
    );
  }

  runCommand(cmd) {
    this.executeSSH2Command(cmd);
    this.displayData(cmd);
  }

  displayData(data) {
    let term = this.state.terminal;
    term.write(data);
    term.prompt();
  }

  setupXTermTerminal() {
    let terminal = new Terminal();
    terminal.open(document.getElementById("terminal"));
    terminal.prompt = () => {
      terminal.write("\r\n$ ");
    };
    terminal.writeln("Welcome to xterm.js");
    terminal.prompt();
    var tmpData = "";
    terminal.on("key", (key, ev) => {
      const printable =
        !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        terminal.prompt();
        this.runCommand(tmpData);
        tmpData = "";
      } else if (ev.keyCode === 8) {
        if (terminal._core.buffer.x > 2) {
          tmpData = tmpData.slice(0, tmpData.length - 1);
          terminal.write("\b \b");
        }
      } else if (printable) {
        tmpData += key;
        terminal.write(key);
      }
    });
    this.setState({ terminal });
  }

  componentDidMount() {
    // this.setupXTermTerminal();
  }

  render() {
    return (
      <div style={settingsStyle}>
        <center>
          <h1 style={settingsH1Style}>Settings - Home</h1>
          <div style={borderBottomStyle} />
          <NavLink
            to="settings/changeProject"
            style={settingsBtnStyle}
            className="btn btn-outline-primary"
          >
            Change Project
          </NavLink>
          <a
            className="btn btn-outline-primary"
            style={settingsBtnStyle}
            href="https://thomasmiller.tk/phpmyadmin/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Database
          </a>
          <a
            className="btn btn-outline-primary"
            style={settingsBtnStyle}
            href="https://getbootstrap.com/docs/4.3/getting-started/introduction/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>
          <a
            className="btn btn-outline-primary"
            style={settingsBtnStyle}
            href="https://buttercms.com/blog_home/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            ButterCms
          </a>
          <div style={terminalsStyle}>
            <div style={xtermTerminalStyle}>
              <div id="terminal" />
            </div>
          </div>
        </center>
      </div>
    );
  }
}

// Styles
const settingsH1Style = {
  margin: "0"
};

const settingsStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px"
};

const xtermTerminalStyle = { width: "40%" };

const terminalsStyle = { width: "100%", padding: "10px" };

const borderBottomStyle = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)"
};

const settingsBtnStyle = { margin: "5px" };

export default PrivateSettingsHome;
