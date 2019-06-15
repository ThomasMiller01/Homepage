import React, { Component } from "react";
import { Link } from "react-router-dom";
import butter from "./blog_buttercms";

import Header from "../../header";
import Footer from "../../footer";

import "./blog.scss";

class Blog extends Component {
  state = {
    meta: {},
    data: [],
    dateformat: null
  };

  componentWillMount() {
    const dateformat = require("dateformat");
    this.setState({ dateformat });
  }

  async componentDidMount() {
    const { match } = this.props;
    let page = match.params.page || 1;

    const resp = await butter.post.list({ page: page, page_size: 10 });
    this.setState(resp.data);
  }

  getTagsRendered = tags => {
    return "";
    // var _tags = [];
    // tags.forEach(tag => {
    //   _tags.push(tag.name);
    // });
    // return <span>Tags: {_tags.join(", ")}</span>;
  };

  getFirstBodyPartRendered = body => {
    return (
      <span
        dangerouslySetInnerHTML={{ __html: body.substring(0, 300) + "<br>..." }}
      />
    );
  };

  getDateRendered = date => {
    let _date = new Date(date);
    let _formatDate = this.state.dateformat(_date, "dd-mm-yyyy hh:MM");
    return <span>{_formatDate}</span>;
  };

  render() {
    const { next_page, previous_page } = this.state.meta;

    return (
      <React.Fragment>
        <Header />
        <div style={topDivStyle}>
          <table style={topTableStyle}>
            <tbody>
              <tr>
                <td>
                  <div style={topTextDivStyle}>
                    <h1 style={topH1Style}>
                      <span style={topSpanStyle}>Thomas</span> Blog
                    </h1>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={blogStyle}>
          <div style={blogPostsStyle}>
            {this.state.data.map((post, key) => {
              return (
                <React.Fragment key={key}>
                  <div className="card" style={cardStyle}>
                    <div className="card-body">
                      <h3 className="card-title" style={cardTitleStyle}>
                        {post.title}
                      </h3>
                      <h6
                        className="card-subtitle mb-2 text-muted"
                        style={cardMetaStyle}
                      >
                        {post.author.first_name} {post.author.last_name},{" "}
                        {this.getDateRendered(post.published)}
                      </h6>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {this.getTagsRendered(post.tags)}
                      </h6>
                      <p className="card-text">
                        {this.getFirstBodyPartRendered(post.body)}
                      </p>
                      <Link
                        to={`/blog/posts/${post.slug}`}
                        className="btn btn-outline-primary"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div style={borderBottomStyle2} />
                </React.Fragment>
              );
            })}
          </div>
          <div style={rightCardStyle}>
            <h2>Recent Posts</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
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
  color: "#76D5D1",
  width: "0",
  margin: "0",
  height: "0"
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
  padding: "0"
};

const cardMetaStyle = {
  width: "30%",
  margin: "0",
  display: "inline-block"
};

const cardTitleStyle = {
  width: "70%",
  display: "inline-block",
  margin: "0"
};

const rightCardStyle = {
  width: "15%",
  margin: "10px 5% 10px 5%",
  display: "inline-block",
  verticalAlign: "top",
  minHeight: "60vh",
  padding: "10px"
};

const blogPostsStyle = {
  width: "65%",
  margin: "10px 0 10px 10%",
  display: "inline-block",
  padding: "10px"
};

const cardStyle = {
  width: "100%",
  marginBottom: "10px",
  marginTop: "10px",
  // backgroundColor: "#f2f2f2",
  backgroundColor: "#E6E6E6",
  border: "none"
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
