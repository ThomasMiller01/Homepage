import React from "react";
import { Link } from "react-router-dom";
import butter from "./blog_buttercms";

import Header from "../../header";
import Footer from "../../footer";

import GetCategories from "./get_data/get_categories";
import GetPostsRendered from "./get_data/get_posts";

import "./blog.scss";

export default class extends React.Component {
  state = {
    data: {
      recent_posts: [],
    },
  };

  async componentDidMount() {
    const { match } = this.props;
    const resp = await butter.category.retrieve(match.params.category, {
      include: "recent_posts",
    });
    this.setState(resp.data);
  }

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
    const category = this.state.data;

    return (
      <React.Fragment>
        <Header />
        <div style={blogStyle}>
          <h1 style={h1style}>Category: {category.name}</h1>
          <div style={blogPostsStyle} className="blogPost">
            <GetPostsRendered posts={category.recent_posts} />
          </div>
          <div style={rightCardStyle} className="rightCard">
            {this.getCategories()}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const h1style = {
  textAlign: "center",
};

const RecentPostStyle = {
  color: "black",
};

const rightCardStyle = {
  width: "15%",
  margin: "10px 5% 10px 5%",
  display: "inline-block",
  verticalAlign: "top",
  padding: "10px",
  border: "solid 1px #323232",
};

const blogPostsStyle = {
  width: "65%",
  margin: "10px 0 10px 10%",
  display: "inline-block",
  padding: "10px",
  textAlign: "left",
};

const blogStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "#E6E6E6",
  padding: "20px",
};
