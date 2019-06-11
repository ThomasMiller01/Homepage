import React, { Component } from "react";
import { Link } from "react-router-dom";
import butter from "./blog_buttercms";

import Header from "../../header";
import Footer from "../../footer";

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
  render() {
    const { next_page, previous_page } = this.state.meta;

    return (
      <React.Fragment>
        <Header />
        <div>
          {this.state.data.map((post, key) => {
            return (
              <div key={key}>
                <Link to={`/blog/posts/${post.slug}`}>{post.title}</Link>
              </div>
            );
          })}

          <br />

          <div>
            {previous_page && (
              <Link to={`/blog/${previous_page}`}>
                <span>Prev</span>
              </Link>
            )}

            {next_page && (
              <Link to={`/blog/${next_page}`}>
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

export default Blog;
