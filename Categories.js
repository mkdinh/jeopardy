import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { pickCategory } from "../actions";

export class Categories extends Component {
  handleClick = category => {
    this.props.pickCategory(category);
  };

  render() {
    const categories = this.props.categories;

    return (
      <div>
        {categories.map((cat, index) => {
          return (
            <Link
              key={index}
              to={`/category`}
              onClick={this.handleClick.bind(this, cat)}
            >
              <h3>{cat.title}</h3>
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

const connectHOC = connect(mapStateToProps, { pickCategory });

export default connectHOC(Categories);
