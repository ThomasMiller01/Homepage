import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faDiscord,
  faChrome,
  faTwitter,
  faDocker
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
            href="mailto:info@thomasmiller.tk"
            className="button is-outlined is-rounded email"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            </span>
            <span className="text">info@thomasmiller.tk</span>
          </a>
          <a
            href="https://discord.gg/3DH6X25"
            className="button is-outlined is-rounded discord"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faDiscord} style={iconStyle} />
            </span>
            <span className="text">Thomas#5888</span>
          </a>
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
            href="https://hub.docker.com/u/thomasmiller01"
            className="button is-outlined is-rounded docker"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faDocker} style={iconStyle} />
            </span>
            <span className="text">Docker</span>
          </a>
          <a
            href="https://twitter.com/ThomasMiller_01"
            className="button is-outlined is-rounded twitter"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
            </span>
            <span className="text">Twitter</span>
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
  height: "90%"
};

export default SocialMediaIcons;
