import React, { Component } from 'react';

class FearPool extends Component {
  constructor(props) {
    super(props);

    this.totalFears = this.props.players * 4;

    this.state = {
      fears: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(function(prevState, props) {
      let fears = prevState.fears + 1;
      if (fears >= this.totalFears) {
        fears = 0;
      }

      return {
        fears: fears,
      };
    });
  }

  render() {
    return (
      <div>
        <div className="fear-pending">
          There are {this.totalFears - this.state.fears} fear tokens pending.
        </div>

        <div className="fear-generated">
          There are {this.state.fears} fear tokens generated.
        </div>

        <div className="generate-fear">
          <button onClick={this.handleClick}>
            Click me
          </button>
        </div>
      </div>
    );
  }
}

export default FearPool;
