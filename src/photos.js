import React from "react";
import { Container, Row, Col } from "reactstrap";
import p1 from "./1.jpg";
import p2 from "./2.jpg";
import p3 from "./3.jpg";
import p4 from "./4.jpg";
import p5 from "./5.jpg";
import "./photos.css";

export default class Grid2 extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="head">RESEARCH</h1>
        <hr className="line" />
        <div className="block">
          <span className="txt">LEARN</span>
          <span className="txt">IMPLEMENT</span>
          <span className="txt">CREATE</span>
        </div>
        <Row>
          <Col lg="4" xs="12">
            <img className="p1" src={p1} />
          </Col>
          <Col lg="4" xs="12">
            <img className="p2" src={p2} />
          </Col>
          <Col lg="4" xs="12">
            <img className="p3" src={p3} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <img className="p4" src={p4} />
          </Col>

          <Col xs="12" lg="6">
            <img className="p5" src={p5} />
          </Col>
        </Row>
      </Container>
    );
  }
}
