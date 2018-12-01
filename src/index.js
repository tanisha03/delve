import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import "./custom.scss";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ScrollToTopRoute from "./scroll.js";
import About from "./about/about.js";
import Signup from "./signup.js";
import Main from "./profile/main";
import Profilepage from "./profile/profilepage";
import { createStore } from "redux";
import reducers from "./reducers/index";
import { Provider } from "react-redux";
import Post from "./profile/posts/post";

const store = createStore(reducers);
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <ScrollToTopRoute path="/about" component={About} />
      <ScrollToTopRoute path="/signup" component={Signup} />
      <ScrollToTopRoute path="/profile" component={Main} />
      <ScrollToTopRoute path="/profilepage" component={Profilepage} />
      <ScrollToTopRoute path="/post" component={Post} />
    </div>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
