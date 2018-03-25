import React, { Component } from "react";

export default class FearPool extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 1 };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    const value = this.state.value;
    this.setState({ value: 1 });
    this.props.handleClick(value);
  }

  handleChange(e) {
    this.setState({ value: Math.max(e.target.value, 1) });
  }

  render() {
    return (
      <div className="fear-pool-container">
        <div className="fear-pool">
          {this.props.fears} fear tokens until next fear card.
        </div>

        <div className="generate-fear">
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            hidden={this.props.hidden}
          />
          <button onClick={this.handleClick} hidden={this.props.hidden}>
            Generate Fear
          </button>
        </div>
      </div>
    );
  }
}
