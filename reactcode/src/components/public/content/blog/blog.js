import React, { Component } from "react";

import Header from "../../header";
import Footer from "../../footer";

import BlogPost from "./blog_post";
import butter from "./blog_buttercms";

class Blog extends Component {
  state = { blog_entries: [] };

  componentWillMount() {
    const that = this;
    butter.post.list({ page: 1, page_size: 10 }).then(function(response) {
      console.log(response);
      that.setState({ blog_entries: response.data.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={blogStyle}>
          <div style={blogPostStyle}>
            {this.state.blog_entries.map(entry => (
              <BlogPost
                key={this.state.blog_entries.indexOf(entry)}
                id={this.state.blog_entries.indexOf(entry)}
                title={entry.title}
                body={entry.summary}
                tags={entry.tags}
                author={entry.author.slug}
                date={entry.published}
              />
            ))}
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
  backgroundColor: "#E6E6E6",
  textAlign: "center"
};

export default Blog;
