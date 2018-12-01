import React, { Component } from "react";
import { Container, Row, Col, NavItem, Nav, NavLink } from "reactstrap";
import { StickyContainer, Sticky } from "react-sticky";
import Post from "./post.js";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="2">
              <StickyContainer>
                <Sticky>
                  {({ style }) => (
                    <div style={style}>
                      <div style={{ height: 60 }} />
                      <Nav vertical>
                        <NavItem active>
                          <NavLink href="#">LINK1</NavLink>
                        </NavItem>
                        <NavItem active>
                          <NavLink href="#">LINK2</NavLink>
                        </NavItem>
                        <NavItem active>
                          <NavLink href="#">LINK3</NavLink>
                        </NavItem>
                        <NavItem active>
                          <NavLink disabled href="#">
                            Disabled Link
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  )}
                </Sticky>
                <div style={{ height: 1000 }} />
              </StickyContainer>
            </Col>
            <Col xs="8">
              <Post />
            </Col>
            <Col xs="2">
              <StickyContainer>
                <Sticky>
                  {({ style }) => (
                    <div style={style}>
                      <div style={{ height: 60 }} />
                      <Nav vertical>
                        <NavItem active>
                          <NavLink href="#">LINK1</NavLink>
                        </NavItem>
                        <NavItem active>
                          <NavLink href="#">LINK2</NavLink>
                        </NavItem>
                        <NavItem active>
                          <NavLink href="#">LINK3</NavLink>
                        </NavItem>
                        <NavItem active>
                          <NavLink disabled href="#">
                            Disabled Link
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  )}
                </Sticky>
                <div style={{ height: 1000 }} />
              </StickyContainer>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
