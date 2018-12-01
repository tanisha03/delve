import React from "react";
import "./navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";
import Add from "./modal.js";
import { Link } from "react-router-dom";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="divide">
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/">
            <span className="navitem">
              <span className="icon" color="primary">
                DELVE
              </span>
            </span>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{ marginRight: 900 }}>
                <NavLink href="/profile">
                  <span className="navitem">FEED</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">
                  <span className="navitem">ABOUT US</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profilepage">
                  <span className="navitem">PROFILE</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <Add buttonLabel="ADD POST" />
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  <span className="navitem">SIGN OUT</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
