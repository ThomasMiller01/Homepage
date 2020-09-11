import React, { Component } from "react";
import { Link } from "react-router-dom";
import butter from "./blog_buttercms";

import Header from "../../header";
import Footer from "../../footer";

import GetCategories from "./get_data/get_categories";
import GetPostsRendered from "./get_data/get_posts";

import "./blog.scss";

class Blog extends Component {
  state = {
    meta: {},
    data: []
  };

  async componentDidMount() {
    const { match } = this.props;
    let page = match.params.page || 1;

    const resp = await butter.post.list({ page: page, page_size: 10 });
    this.setState(resp.data);
  }

  getRecentPostsRendered = () => {
    let recentPosts = this.state.data.slice(0, 5);
    return (
      <React.Fragment>
        <title>Blog</title>
        <h2>Recent Posts</h2>
        <span>
          {recentPosts.map(post => {
            return (
              <Link
                to={`/blog/posts/${post.slug}`}
                key={post.slug}
                style={RecentPostStyle}
              >
                <p style={{ margin: "20px 0" }}>
                  <strong>{post.title}</strong>
                  <br />
                  {post.summary}
                </p>
              </Link>
            );
          })}
        </span>
      </React.Fragment>
    );
  };

  getCategories = () => {
    return (
      <React.Fragment>
        <h2>
          <Link to={`/blog/categories`} style={RecentPostStyle}>
            Categories <small>[View]</small>
          </Link>
        </h2>
        <span>
          <GetCategories count={5} />
        </span>
      </React.Fragment>
    );
  };

  render() {
    const { next_page, previous_page } = this.state.meta;

    return (
      <React.Fragment>
        <Header />
        <div style={topDivStyle} className="blogTop">
          <table style={topTableStyle}>
            <tbody>
              <tr>
                <td>
                  <div style={topTextDivStyle}>
                    <h1 style={topH1Style}>
                      <span style={topSpanStyle}>Blog</span>
                    </h1>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={blogStyle}>
          <div style={blogPostsStyle} className="blogPost">
            <GetPostsRendered posts={this.state.data} />
          </div>
          <div style={rightCardStyle} className="rightCard">
            {this.getRecentPostsRendered()}
            <div style={borderBottomStyle2} />
            {this.getCategories()}
          </div>

          <br />

          <div>
            {previous_page && (
              <Link
                to={`/blog/${previous_page}`}
                className="btn btn-outline-primary"
              >
                <span>Prev</span>
              </Link>
            )}

            {next_page && (
              <Link
                to={`/blog/${next_page}`}
                className="btn btn-outline-primary"
              >
                <span>Next</span>
              </Link>
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const RecentPostStyle = {
  color: "black"
};

const topTableStyle = {
  width: "100%",
  height: "30vh"
};

const topH1Style = {
  color: "#E2E07B",
  marginBottom: "0",
  fontFamily: "'Work Sans',sans-serif"
};

const topSpanStyle = {
  color: "rgb(209, 209, 209)",
  width: "0",
  margin: "0",
  height: "0",
  fontSize: "1.5em"
};

const topTextDivStyle = {
  width: "100%",
  textAlign: "center",
  fontFamily: "DejaVuSansMono"
};

const topDivStyle = {
  width: "100%",
  minHeight: "30vh",
  backgroundColor: "#272822",
  backgroundImage: "url('./images/blog_header.png')",
  padding: "0"
};

const rightCardStyle = {
  width: "15%",
  margin: "10px 5% 10px 5%",
  display: "inline-block",
  verticalAlign: "top",
  padding: "10px",
  border: "solid 1px #323232"
};

const blogPostsStyle = {
  width: "65%",
  margin: "10px 0 10px 10%",
  display: "inline-block",
  padding: "10px"
};

const blogStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "#E6E6E6",
  padding: "20px"
};

const borderBottomStyle2 = {
  width: "100%",
  margin: "10px auto 10px auto",
  height: "1px",
  borderBottom: "solid 1px rgb(161, 161, 161)"
};

export default Blog;
