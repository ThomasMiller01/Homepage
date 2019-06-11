import React from "react";
import butter from "./blog_buttercms";
import { Helmet } from "react-helmet";

import Header from "../../header";
import Footer from "../../footer";

import "./blog.scss";

export default class extends React.Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    const { match } = this.props;
    const resp = await butter.post.retrieve(match.params.post);
    this.setState(resp.data);
  }
  render() {
    const post = this.state.data;

    return (
      <React.Fragment>
        <Header />
        <div style={blogStyle} className="post-container">
          <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet>
          <h1 style={postTitleStyle}>{post.title}</h1>
          <div style={borderBottomStyle} />
          <div
            dangerouslySetInnerHTML={{ __html: post.body }}
            style={postBodyStyle}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const postBodyStyle = {
  width: "95%",
  margin: "0 auto"
};

const postTitleStyle = {
  margin: "0 auto",
  width: "auto",
  textAlign: "center"
};

const blogStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "#E6E6E6",
  padding: "20px"
};

const borderBottomStyle = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)"
};
