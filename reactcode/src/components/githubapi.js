import React, { Component } from "react";

class Commits extends Component {
  state = {
    allCommits: [],
  };

  componentDidMount = () => {
    fetch(
      "https://api.github.com/repos/ThomasMiller01/" +
        this.props.repo +
        "/commits"
    )
      .then((results) => {
        return results.json();
      })
      .then((body) => {
        var allCommits = [];
        body.forEach((commit) => {
          allCommits.push({
            author: {
              name: commit.author.login,
              url: commit.author.html_url,
              avatar_url: commit.author.avatar_url,
            },
            sha: commit.sha,
            message: commit.commit.message,
            url: commit.html_url,
            date: new Date(commit.commit.author.date).toUTCString(),
          });
        });
        this.setState({ allCommits });
      });
  };

  render() {
    return (
      <React.Fragment>
        <h4>Commit - History</h4>
        <div className="pre-scrollable">
          {this.state.allCommits.map((commit) => (
            <div className="card mb-3" key={commit.sha}>
              <div className="row no-gutters">
                <div style={{ width: "100%" }}>
                  <div className="card-body">
                    <small className="text-muted">
                      <a href={commit.author.url}>{commit.author.name}</a>
                    </small>
                    <p className="card-text">
                      <a href={commit.url}>{commit.message}</a>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <time dateTime={commit.date}>{commit.date}</time>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

class Statistics extends Component {
  state = {
    statistics: {
      author: {
        name: "",
        url: "",
        avatar_url: "",
      },
      total: "",
      weeks: [],
    },
  };

  componentDidMount = () => {
    fetch(
      "https://api.github.com/repos/ThomasMiller01/" +
        this.props.repo +
        "/stats/contributors"
    )
      .then((results) => {
        return results.json();
      })
      .then((body) => {
        var statistics = {
          author: {
            name: body[0].author.login,
            url: body[0].author.html_url,
            avatar_url: body[0].author.avatar_url,
          },
          total: body[0].total,
          weeks: body[0].weeks,
        };
        this.setState({ statistics });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">
                  Total Commits: {this.state.statistics.total}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Commits, Statistics };
