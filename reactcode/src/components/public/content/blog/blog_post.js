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
        <div>
          <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
