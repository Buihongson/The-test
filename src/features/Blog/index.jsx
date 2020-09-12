import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "./pages/Main";
import BlogDetails from "./components/BlogDetails";
import NotFound from "../../components/NotFound";

function Blog(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/:blogId`} component={BlogDetails} />

      <Route path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
}

Blog.propTypes = {};

export default Blog;
