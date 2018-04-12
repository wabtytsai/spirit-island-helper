import React, { Component } from "react";

export default class FearPool extends Component {
  constructor(props) {
    super(props);

    this.totalFears = this.props.players * 4;

    this.state = {
      value: 1,
      fears: this.totalFears,
    };

    this.handleChange = this.handleChange.bind(this);
    this.generateFear = this.generateFear.bind(this);
  }

  handleChange(e) {
    this.setState({ value: Math.max(e.target.value, 0) });
  }

  generateFear() {
    const value = this.state.value;
    let fears = this.state.fears - value;
    let count = 0;

    while (fears <= 0) {
      fears += this.totalFears;
      count += 1;
    }

    if (count > 0) {
      this.props.earnFearCards(count);
    }

    this.setState({
      value: 1,
      fears,
    });
  }

  render() {
    return (
      <div className="fear-pool-container">
        <div className="fear-pool">
          {this.state.fears} fear tokens until next fear card.
        </div>

        <div className="generate-fear">
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.generateFear}>
            Generate Fear
          </button>
        </div>
      </div>
    );
  }
}
