import React, { Component } from "react";

class BlogPost extends Component {
  state = {};

  renderTags = tags => {
    var tagNames = [];
    tags.forEach(tag => {
      tagNames.push(tag.name);
    });
    return <p>{tagNames.join(", ")}</p>;
  };

  render() {
    return (
      <React.Fragment>
        <div style={blogPostStyle}>
          <h3>{this.props.title}</h3>
          <div style={divider} />
          <p>{this.props.body}</p>
          {this.renderTags(this.props.tags)}
          {this.props.author}
          {this.props.date}
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
