import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Clue from "./Clue";

export class Category extends Component {
  state = {
    clues: []
  };

  async componentDidMount() {
    const res = await fetch(
      `http://jservice.io/api/clues?category=${this.props.category.id}`
    );
    const clues = await res.json();
    this.setState({ clues });
  }

  render() {
    const { category } = this.props;
    const { clues } = this.state;

    return (
      <div>
        <h1>{category.title}</h1>

        {clues.map(clue => {
          return <Clue key={clue.id} clue={clue} />;
        })}
      </div>
    );
  }
}

class LinkedCategory extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h2 className="nav-link">Home</h2>
        </Link>
        <Category category={this.props.category} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.category
  };
}

const connectHOC = connect(mapStateToProps, null);

export default connectHOC(LinkedCategory);
