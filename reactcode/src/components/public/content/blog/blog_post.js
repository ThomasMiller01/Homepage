import React from "react";
import butter from "./blog_buttercms";
import { Helmet } from "react-helmet";

import Header from "../../header";
import Footer from "../../footer";

import "./blog.scss";

export default class extends React.Component {
  state = {
    data: {},
    page: { url: "", title: "" },
  };

  componentWillMount() {}

  async componentDidMount() {
    const { match } = this.props;
    const resp = await butter.post.retrieve(match.params.post);
    var url = window.location.href;
    this.setState({
      data: resp.data.data,
      page: { url: url, title: resp.data.data.title },
    });
  }

  CommentsRendere = () => {
    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://thomasmiller.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
    return (
      <React.Fragment>
        <div id="disqus_thread" />
      </React.Fragment>
    );
  };

  render() {
    const post = this.state.data;

    return (
      <React.Fragment>
        <Header />
        <div style={blogStyle} className="post-container">          
          <title>{post.seo_title}</title>
          <meta name="description" content={post.meta_description} />
          <meta name="og:image" content={post.featured_image} />          
          <h1 style={postTitleStyle}>{post.title}</h1>
          <div style={borderBottomStyle} />
          <div
            dangerouslySetInnerHTML={{ __html: post.body }}
            style={postBodyStyle}
          />
          <this.CommentsRendere />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const postBodyStyle = {
  width: "95%",
  margin: "0 auto",
};

const postTitleStyle = {
  margin: "0 auto",
  width: "auto",
  textAlign: "center",
};

const blogStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "#E6E6E6",
  padding: "20px",
};

const borderBottomStyle = {
  width: "95%",
  margin: "10px auto 10px auto",
  height: "2px",
  borderBottom: "solid 2px rgb(161, 161, 161)",
};
