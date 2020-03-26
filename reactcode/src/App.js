import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/public/content/home/home";
import Projects from "./components/public/content/projects/projects";
import AboutMe from "./components/public/content/aboutme/aboutme";
import Blog from "./components/public/content/blog/blog";
import BlogPost from "./components/public/content/blog/blog_post";
import blog_category from "./components/public/content/blog/blog_category";
import blog_categories from "./components/public/content/blog/blog_categories";
import Impressum from "./components/public/content/impressum/impressum";
import Private from "./components/private/private";
import Login from "./components/public/login";
import Error from "./components/error";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = ({ history }) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={AboutMe} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/categories" exact component={blog_categories} />
        <Route path="/blog/:page" exact component={Blog} />
        <Route path="/blog/posts/:post" exact component={BlogPost} />
        <Route
          path="/blog/category/:category"
          exact
          component={blog_category}
        />
        <Route path="/impressum" component={Impressum} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/private" component={Private} />
        <Route
          render={() => (
            <Error
              file="App.js"
              error_title="Bad Request"
              error_number="404"
              error_description="The server cannot process the request due to something that is perceived to be a client error."
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
};

export default App;
