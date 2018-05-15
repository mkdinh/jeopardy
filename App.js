import React, { Component } from "react";
import { connect } from "react-redux";
import { setCategories } from "../actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Categories from "./Categories";
import Home from "./Home";

export class App extends Component {
  async componentDidMount() {
    if (!this.props.categories.length) {
      const response = await fetch(
        "http://jservice.io/api/categories?count=20"
      );
      const categories = await response.json();
      this.props.setCategories(categories);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Jeopardy</h1>
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route path="/category" component={Category} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state
  };
}

const connectHOC = connect(mapStateToProps, { setCategories });

export default connectHOC(App);
