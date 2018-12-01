import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
export default class Banner extends Component {
  render() {
    return (
      <div style={{ background: "#2d3e50", color: "#ffffff" }}>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col style={{ marginTop: 20 }}>
                  <h3>NEED HELP</h3>
                  <div>
                    <Link to="/about">About us</Link>
                  </div>
                  <div>Contact us</div>
                  <div>Careers</div>
                </Col>
                <Col style={{ marginTop: 20 }}>
                  <h3>RESOURCES</h3>
                  <div>Institutions</div>
                  <div>Internships</div>
                  <div>Reseach Work</div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <div className="divin" style={{ marginTop: 20 }}>
              <h3>LEARN | CREATE | IMPLEMENT</h3>
              <p>
                Developed by the students of M S RAMAIAH INSTITUTE OF
                TECHNOLOGY, Bangalore DELVE provides platform for students and
                experts to present their research. It also serves as a helpful
                tool for students for research as well as internship
                opportunities.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
