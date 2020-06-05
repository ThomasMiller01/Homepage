import decode from "jwt-decode";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { gql } from "apollo-boost";

import { auth_url } from "./api_urls";

export default class AuthService {
  // Initializing important variables
  constructor() {
    this.authApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: auth_url,
      }),
    });
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(username, password) {
    return this.authApi.query({
      query: gql`
        query($username: String!, $password: String!) {
          login(username: $username, password: $password) {
            token
          }
        }
      `,
      variables: { username, password },
    });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }
}
