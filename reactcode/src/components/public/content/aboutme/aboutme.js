import React, { Component, createRef } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { gql } from "apollo-boost";

import { homepage_url } from "../../../api_urls";

import Header from "../../header";
import Footer from "../../footer";

import SocialMediaIcons from "../../socialMediaIcons";

class AboutMe extends Component {
  constructor() {
    super();
    this.homepageApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: homepage_url,
      }),
    });

    this.linksRef = createRef();
  }

  state = {
    profile: {
      id: 0,
      name: "",
      aboutme: "",
      image: "",
      links: [],
    },
  };

  componentDidMount() {
    this.loadProfile();
  }

  loadProfile = () => {
    this.homepageApi
      .query({
        query: gql`
          query {
            getProfile {
              id
              name
              aboutme
              image {
                id
                name
                url
                size
              }
              links {
                id
                name
                url
                color
                icon
              }
            }
          }
        `,
      })
      .then((result) => {
        // sort projects based on position attribute
        let profile = JSON.parse(JSON.stringify(result.data.getProfile));
        this.linksRef.current.updateLinks(profile.links);
        this.setState({ profile });
      });
  };

  getProfileNameFormated = () => {
    let splitted = this.state.profile.name.split(" ");
    if (splitted.length > 1) {
      let first = splitted[0];
      splitted.shift();
      let everythingElse = splitted.join(" ");
      return [first, everythingElse];
    } else {
      return [splitted[0], ""];
    }
  };

  render() {
    return (
      <React.Fragment>
        <title>About Me</title>
        <Header />
        <div style={topDivStyle}>
          <table style={topTableStyle}>
            <tbody>
              <tr>
                <td>
                  <div style={topTextDivStyle}>
                    <h1 style={topH1Style}>
                      <span style={topSpanStyle}>
                        {this.getProfileNameFormated()[0]}
                      </span>{" "}
                      {this.getProfileNameFormated()[1]}
                    </h1>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={aboutmeDivStyle} className="aboutMeDivStyle">
          <div style={imageDivStyle} className="imageDivStyle">
            <img
              src={this.state.profile.image.url}
              alt="Loading ..."
              style={imgStyle}
              className="imgStyle"
            />
          </div>
          <div style={descriptionDivStyle} className="descriptionDivStyle">
            <p
              style={pDescriptionStyle}
              dangerouslySetInnerHTML={{
                __html: this.state.profile.aboutme,
              }}
            ></p>
            <SocialMediaIcons
              links={this.state.profile.links}
              ref={this.linksRef}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const topTableStyle = {
  width: "100%",
  height: "30vh",
};

const topH1Style = {
  color: "#E2E07B",
  marginBottom: "0",
  fontFamily: "'Work Sans',sans-serif",
};

const topSpanStyle = {
  color: "#76D5D1",
  width: "0",
  margin: "0",
  height: "0",
};

const topTextDivStyle = {
  width: "100%",
  textAlign: "center",
  fontFamily: "DejaVuSansMono",
};

const pDescriptionStyle = {
  fontSize: "24px",
  lineHeight: "30px",
};

const imgStyle = {
  borderStyle: "solid",
  borderRadius: "100%",
  objectFit: "cover",
  objectPosition: "0 20%",
};

const descriptionDivStyle = {
  gridColumn: "2",
  height: "100%",
  padding: "20px",
};

const imageDivStyle = {
  gridColumn: "1",
  margin: "0",
  padding: "20px",
};

const topDivStyle = {
  width: "100%",
  minHeight: "30vh",
  backgroundColor: "#272822",
  padding: "0",
};

const aboutmeDivStyle = {
  width: "100%",
  minHeight: "63.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "25px",
  gridTemplateColumns: "40% 60%",
};

export default AboutMe;
