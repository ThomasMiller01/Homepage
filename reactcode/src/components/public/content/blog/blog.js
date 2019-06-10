import React, { Component } from "react";

import Header from "../../header";
import Footer from "../../footer";

import BlogPost from "./blog_post";

class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={blogStyle}>
          <h1>Blog</h1>
          <div style={blogPostStyle}>
            <BlogPost
              id="1"
              title="TestTitel"
              body="TestBody"
              tags="TestTag1, TestTag2"
              author="TestAuthor"
              date="TestDate"
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const blogPostStyle = {
  width: "60%"
};

const blogStyle = {
  width: "100%",
  minHeight: "87vh",
  padding: "20px",
  backgroundColor: "#E6E6E6"
};

export default Blog;
