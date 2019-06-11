import React from "react";
import butter from "./blog_buttercms";

import Header from "../../header";
import Footer from "../../footer";

import "./blog.scss";

export default class extends React.Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const resp = await butter.category.list();
    this.setState(resp.data);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          {this.state.data.map((category, key) => {
            return (
              <div key={key}>
                <a href={`/blog/category/${category.slug}`}>{category.name}</a>
              </div>
            );
          })}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
