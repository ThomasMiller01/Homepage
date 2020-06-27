import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faDiscord,
  faChrome,
  faGithub,
  faXing,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./socialMediaIcons.scss";

class SocialMediaIcons extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="post-social">
          <a
            href="mailto:info@thomasmiller.info"
            className="button is-outlined is-rounded email"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            </span>
            <span className="text">info@thomasmiller.info</span>
          </a>
          <a
            href="https://www.xing.com/profile/Thomas_Miller108"
            className="button is-outlined is-rounded xing"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faXing} style={iconStyle} />
            </span>
            <span className="text">Xing</span>
          </a>
          <a
            href="https://github.com/ThomasMiller01"
            className="button is-outlined is-rounded github"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faGithub} style={iconStyle} />
            </span>
            <span className="text">GitHub</span>
          </a>
          <span className="button is-outlined is-rounded discord">
            <span className="icon">
              <FontAwesomeIcon icon={faDiscord} style={iconStyle} />
            </span>
            <span className="text">Thomas#5888</span>
          </span>
          <a
            href="https://stackoverflow.com/users/11328656/thomas?tab=profile"
            className="button is-outlined is-rounded stackoverflow"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faStackOverflow} style={iconStyle} />
            </span>
            <span className="text">Stack Overflow</span>
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-miller-2a13991b1/"
            className="button is-outlined is-rounded linkedin"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
            </span>
            <span className="text">LinkedIn</span>
          </a>
          <a
            href="https://www.thingiverse.com/Thomas_Miller/about"
            className="button is-outlined is-rounded thingiverse"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faChrome} style={iconStyle} />
            </span>
            <span className="text">Thingiverse</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

const iconStyle = {
  width: "90%",
  height: "90%",
};

export default SocialMediaIcons;
