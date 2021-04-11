import React, { Component } from "react";
import { Link } from "react-router-dom";

class GetPostsRendered extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  state = { dateformat: null };

  componentWillMount() {
    const dateformat = require("dateformat");
    this.setState({ dateformat });
  }

  getTagsRendered = (tags) => {
    return "";
    // var _tags = [];
    // tags.forEach(tag => {
    //   _tags.push(tag.name);
    // });
    // return <span>Tags: {_tags.join(", ")}</span>;
  };

  getFirstBodyPartRendered = (body) => {
    return (
      <span
        dangerouslySetInnerHTML={{ __html: body.substring(0, 300) + "<br>..." }}
        className="bodyRendered"
      />
    );
  };

  getDateRendered = (date) => {
    let _date = new Date(date);
    let _formatDate = this.state.dateformat(_date, "dd-mm-yyyy HH:MM");
    return <span>{_formatDate}</span>;
  };

  render() {
    return (
      <React.Fragment>
        {this.props.posts.map((post, key) => {
          return (
            <React.Fragment key={key}>
              <div className="card blog-card" style={cardStyle}>
                <div className="card-body">
                  <h3 className="card-title cardTitle" style={cardTitleStyle}>
                    {post.title}
                  </h3>
                  <h6
                    className="card-subtitle mb-2 text-muted metaData"
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
                    className="btn btn-outline-primary see-more-btn"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div style={borderBottomStyle2} className="border-main" />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

const cardMetaStyle = {
  width: "30%",
  margin: "0",
  display: "inline-block",
};

const cardTitleStyle = {
  width: "70%",
  display: "inline-block",
  margin: "0",
};

const cardStyle = {
  width: "100%",
  marginBottom: "10px",
  marginTop: "10px",
  // backgroundColor: "#f2f2f2",
  backgroundColor: "#E6E6E6",
  border: "none",
};

const borderBottomStyle2 = {
  width: "100%",
  margin: "10px auto 10px auto",
  height: "1px",
  borderBottom: "solid 1px rgb(161, 161, 161)",
};

export default GetPostsRendered;
