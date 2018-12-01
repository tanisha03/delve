import React, { Component } from "react";
import Navi from "../Nav.js";
import Banner from "../banner.js";
import Profile from "./profile";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Profile />

        <Banner />
      </div>
    );
  }
}
