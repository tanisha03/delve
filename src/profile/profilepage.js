import React, { Component } from "react";
import { Media, Container, Row, Col } from "reactstrap";
import Navi from "../Nav.js";
import Banner from "../banner.js";
import TopProfile from "./topProfile";
import SideBar from "./sidebar.js";
import Post from "./post.js";

export default class Profilepage extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Container>
          <Row style={{ marginTop: 40 }}>
            <Col xs="10">
              <Row>
                <TopProfile />
              </Row>
              <Row>
                <Col xs="2">
                  <SideBar />
                </Col>
                <Col xs="10">
                  <Post />
                </Col>
              </Row>
            </Col>
            <Col xs="2">
              <SideBar />
            </Col>
          </Row>
        </Container>
        <Banner />
      </div>
    );
  }
}
