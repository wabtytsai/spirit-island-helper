import React, { Component } from 'react';

export default class FearPool extends Component {
  render() {
    return (
      <div>
        <div className="fear-pool">
          {this.props.fears} fear tokens until next fear card.
        </div>

        <div className="generate-fear">
          <button onClick={this.props.handleClick}>
            Click me
          </button>
        </div>
      </div>
    );
  }
};
