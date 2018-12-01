import React, { Component } from "react";
import Grid2 from "./photos.js";

import Example from "./navbar.js";
import Banner from "./banner.js";
import Jumbo from "./jumbo.js";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import LoginBlock from "./loginBlock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example />
        <Jumbo style={{ marginTop: 50 }} />
        <LoginBlock />

        <Banner />
      </div>
    );
  }
}

export default App;
