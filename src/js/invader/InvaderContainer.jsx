import React, { Component } from "react";
import _ from "lodash";

import invaderCards from "./invader-decks.json";

export default class InvaderContainer extends Component {
  constructor(props) {
    super(props);

    let shuffledInvaderCards = {
      "1": _.shuffle(invaderCards["1"]),
      "2": _.shuffle(invaderCards["2"]),
      "3": _.shuffle(invaderCards["3"]),
    };

    this.deck = [];
    for (let stage of props.setup) {
      this.deck.push(shuffledInvaderCards[stage].pop());
    }

    this.state = { round: 0 };
  }

  handleClick() {
    this.setState({ round: this.state.round + 1 });
  }

  getInvaderCard(round) {
    if (round < 0) {
      return "None";
    }

    return this.deck[round];
  }

  render() {
    return (
      <div className="invader-container">
        <span>
          <div className="invader-header">Ravage</div>
          <div>{this.getInvaderCard(this.state.round - 2)}</div>
        </span>
        <span>
          <div className="invader-header">Build</div>
          <div>{this.getInvaderCard(this.state.round - 1)}</div>
        </span>
        <span>
          <div className="invader-header">Explore</div>
          <div>{this.getInvaderCard(this.state.round)}</div>
        </span>
        <span>
          <div className="invader-header">Invader Deck</div>
          <div>{this.deck.length - this.state.round - 1}</div>
        </span>
        <span>
          <button onClick={this.handleClick.bind(this)}>Advance</button>
        </span>
      </div>
    );
  }
}
