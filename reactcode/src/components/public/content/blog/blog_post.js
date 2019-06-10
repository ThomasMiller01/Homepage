import React, { Component } from "react";

class BlogPost extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={blogPostStyle}>
          <h3>{this.props.title}</h3>
          <div style={divider} />
          <p>{this.props.body}</p>
          <h1>Tags: {this.props.tags}</h1>
          <h1>Author: {this.props.author}</h1>
          <h1>Date: {this.props.date}</h1>
        </div>
      </React.Fragment>
    );
  }
}

const blogPostStyle = {
  width: "90%"
};

const divider = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)"
};

export default BlogPost;
