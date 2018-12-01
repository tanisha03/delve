import React from "react";
import "./jumbo.css";
import { Link } from "react-router-dom";

import { Jumbotron, Button } from "reactstrap";

const Jumbo = props => {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <Jumbotron>
        <h1 className="lead1">DELVE</h1>
        <p className="lead">
          Brings teams together to work through problems, move ideas forward,
          and learn from each other along the way.
        </p>
        <hr className="line" />
        <p className="lead">
          Brings teams together to work through problems, move ideas forward,
          and learn from each other along the way.
        </p>
        <p className="lead">
          <Link to="/about">
            <Button color="primary">Explore</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
