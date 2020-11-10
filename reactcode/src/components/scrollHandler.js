import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    this.check(prevProps);
  }

  componentDidMount(prevProps) {
    this.check(prevProps);
  }

  check = (prevProps) => {
    if (this.props.location.hasOwnProperty("hash")) {
      const element = document.getElementById(
        this.props.location.hash.replace("#", "")
      );

      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0,
        });
      }, 100);
    } else if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  };

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
