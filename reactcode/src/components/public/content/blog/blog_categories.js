import React from "react";

import Header from "../../header";
import Footer from "../../footer";

import GetCategories from "./get_data/get_categories";

import "./blog.scss";

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={blogStyle}>
          <h1>Categories</h1>
          <GetCategories />
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
