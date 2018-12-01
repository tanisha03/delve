import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Login from "./login.js";
import "./navbar.css";
import p from "./logo.png";

export default class LoginBlock extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row style={{ marginBottom: 100 }}>
            <Col xs="9">
              <div className="div">
                <img
                  className="img"
                  style={{ width: 400, height: 400 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUiytkqo_S31-JsD-qbhejFtZI6beXIEI8GULbaVXJn9J3qa0"
                />
              </div>
            </Col>
            <Col>
              <Login />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
