import React from "react";
import butter from "./blog_buttercms";

import Header from "../../header";
import Footer from "../../footer";

import "./blog.scss";

export default class extends React.Component {
  state = {
    data: {
      recent_posts: []
    }
  };
  async componentDidMount() {
    const { match } = this.props;
    const resp = await butter.category.retrieve(match.params.category, {
      include: "recent_posts"
    });
    this.setState(resp.data);
  }
  render() {
    const category = this.state.data;

    return (
      <React.Fragment>
        <Header />
        <div style={blogStyle}>
          <h1>{category.name}</h1>
          <div>
            {this.state.data.recent_posts.map((post, key) => {
              return (
                <div key={key}>
                  <a href={`/blog/posts/${post.slug}`}>{post.title}</a>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const blogStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "#E6E6E6",
  padding: "20px"
};
