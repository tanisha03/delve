import React, { Component } from "react";
import { Media } from "reactstrap";

export default class TopProfile extends Component {
  render() {
    return (
      <div style={{ marginBottom: 10 }}>
        <Media>
          <Media left href="#">
            <img
              style={{ height: 200, width: 200, marginRight: "20px" }}
              src="https://satishrao.in/wp-content/uploads/2016/06/dummy-profile-pic-male.jpg"
            />
          </Media>
          <Media body>
            <Media heading>NAME</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <hr style={{ height: "2px", backgroundColor: "#f84348" }} />
      </div>
    );
  }
}
