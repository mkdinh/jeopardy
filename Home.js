import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/categories">
          <h2>Categories</h2>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state
  };
}

const connectHOC = connect(mapStateToProps, null);

export default connectHOC(Home);
