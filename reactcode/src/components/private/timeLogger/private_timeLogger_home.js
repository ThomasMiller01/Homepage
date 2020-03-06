import React, { Component } from "react";

class PrivateTimeLoggerHome extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    fetch("https://millerinfo.de/services/timelogger/api/getData")
      .then(results => {
        return results.text();
      })
      .then(data => {
        let data_split = data
          .replace("[", "")
          .replace("]", "")
          .split("),");
        let new_data = [];
        data_split.forEach(item => {
          new_data.push(
            item
              .replace("(", "")
              .replace(")", "")
              .trim()
              .split(", ")
          );
        });
        let clean_data = [];
        new_data.forEach(item => {
          let temp = [];
          item.forEach(element => {
            temp.push(element.replace("'", "").replace("'", ""));
          });
          clean_data.push(temp);
        });
        this.setState({ data: clean_data });
      });
  };

  render() {
    return (
      <div style={privatetTimeLoggerStyle}>
        <center></center>
        <div className="containerDashboard" style={containerDashboardStyle}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold">Nick - TimerLogger</h6>
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">time</th>
                        <th scope="col">event</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map(row => (
                        <tr key={row[0]}>
                          <th scope="row">{row[0]}</th>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Styles
const containerDashboardStyle = { width: "100%", margin: "30px auto 0 auto" };

const privatetTimeLoggerStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px"
};

export default PrivateTimeLoggerHome;
