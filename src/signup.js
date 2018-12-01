import Navigation from "./navbar.js";
import Banner from "./banner.js";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div
          style={{
            marginLeft: 500,
            marginRight: 500,
            marginBottom: 100,
            marginTop: 100
          }}
        >
          <Form>
            <FormGroup>
              <Label for="first">First Name</Label>
              <Input
                type="password"
                name="password"
                id="first"
                placeholder="FIRST NAME"
              />
            </FormGroup>
            <FormGroup>
              <Label for="last">Last Name</Label>
              <Input
                type="password"
                name="password"
                id="last"
                placeholder="LAST NAME"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="EMAIL"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="PASSWORD"
              />
            </FormGroup>

            <Link to="/profile">
              {" "}
              <Button>Submit</Button>
            </Link>
          </Form>
        </div>
        <Banner />
      </div>
    );
  }
}
