import React, { Component } from "react";
import { PostList } from "./postList.js";
import { getPost } from "../actions/mypost";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Post extends Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    return <PostList posts={this.props.posts} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.myPostReducer.post
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPost: getPost
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
