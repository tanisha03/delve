import React from "react";
import { Row, Media } from "reactstrap";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => (
  <Row>
    {posts.map((post, index) => {
      return (
        <div>
          <h3 style={{ marginBottom: 15, marginTop: 20 }}>
            <Link to="/post">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus{" "}
            </Link>
          </h3>
          <Media>
            <Media left href="#">
              <Media style={{ marginRight: "20px", marginBottom: "20px" }}>
                <img style={{ height: 60, width: 60 }} src={post.img} />
              </Media>
            </Media>
            <Media body>
              <Media heading>{post.title}</Media>
              {post.subtitle}
            </Media>
          </Media>
          <div>{post.data}</div>
          <hr />
        </div>
      );
    })}
  </Row>
);

export { PostList };
