import React, { Component } from "react";
import { Link } from "react-router-dom";

import butter from "../blog_buttercms";

class GetCategories extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  state = {
    data: [],
  };

  async componentDidMount() {
    const resp = await butter.category.list();
    this.setState(resp.data);
  }

  render() {
    let data = this.state.data;
    let count = this.props.count;
    if (count !== -1) {
      data = data.slice(0, count);
    }

    return (
      <div>
        {data.map((category, key) => {
          return (
            <Link
              to={`/blog/category/${category.slug}`}
              key={key}
              style={CategoryNameStyle}
            >
              <p style={{ margin: "5px 0" }}>~ {category.name}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}

const CategoryNameStyle = {
  color: "black",
};

export default GetCategories;
