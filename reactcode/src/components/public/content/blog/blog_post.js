import React from "react";
import butter from "./blog_buttercms";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton
} from "react-share";

import Header from "../../header";
import Footer from "../../footer";

import "./blog.scss";

export default class extends React.Component {
  state = {
    data: {},
    page: { url: "", title: "" }
  };

  componentWillMount() {}

  async componentDidMount() {
    const { match } = this.props;
    const resp = await butter.post.retrieve(match.params.post);
    var url = window.location.href;
    this.setState({
      data: resp.data.data,
      page: { url: url, title: resp.data.data.title }
    });
  }

  CommentsRendere = () => {
    (function() {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://thomasmiller.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
    return (
      <React.Fragment>
        <script>console.log("test");</script>
        <div id="disqus_thread" />
      </React.Fragment>
    );
  };

  SocialMediaShareRendered = () => {
    var url = this.state.page["url"];
    var title = this.state.page["title"];
    return (
      <React.Fragment>
        <div className="post-social">
          <WhatsappShareButton
            url={url}
            className="button is-outlined is-rounded whatsapp"
            title={title}
          >
            <span className="icon">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ width: "90%", height: "90%" }}
              />
            </span>
            <span className="text">WhatsApp</span>
          </WhatsappShareButton>
          <TwitterShareButton
            url={url}
            className="button is-outlined is-rounded twitter"
            title={title}
          >
            <span className="icon">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ width: "90%", height: "90%" }}
              />
            </span>
            <span className="text">Twitter</span>
          </TwitterShareButton>
          <EmailShareButton
            url={url}
            className="button is-outlined is-rounded email"
            title={title}
          >
            <span className="icon">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: "90%", height: "90%" }}
              />
            </span>
            <span className="text">Email</span>
          </EmailShareButton>
        </div>
      </React.Fragment>
    );
  };

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
          <this.CommentsRendere />
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
