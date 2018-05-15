import React, { Component } from "react";

class Clue extends Component {
  state = {
    reveal: false
  };

  handleClick = () => this.setState({ reveal: !this.state.reveal });

  render() {
    const { answer, question, value } = this.props.clue;
    const { reveal } = this.state;

    return (
      <div onClick={this.handleClick} className="clue">
        <h3>{value || "Unknown"}</h3>
        <hr />
        <h4>{question}</h4>
        <h4 className={reveal ? "text-reveal" : "text-hidden"}>{answer}</h4>
      </div>
    );
  }
}

export default Clue;
