import React, { Suspense, lazy } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ServerError from "./components/ServerError";

const Home = lazy(() => import("./features/Home/pages/Main"));
const Blog = lazy(() => import("./features/Blog"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            {/* <Redirect exact from="/" to="/blogs" /> */}
            <Route exact path="/" component={Home} />
            <Route path="/blogs" component={Blog} />

            <Route path='/404' component={NotFound} />
            <Route path='/500' component={ServerError} />
            <Redirect from='*' to='/404' />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
