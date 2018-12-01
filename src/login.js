import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <Form style={{ marginTop: 100, marginBottom: 100 }}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        </FormGroup>

        <Link to="/profile">
          <Button>Submit</Button>
        </Link>
      </Form>
    );
  }
}
