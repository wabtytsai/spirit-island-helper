import React, { Component } from "react";
import _ from "lodash";
import {toFilename} from '../utils';

import invaderCards from "./invader-decks.json";

const WIDTH = 100;
const HEIGHT = 150;

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
    this.images = require.context("../../img/invader", false, /\.png/);
  }

  handleClick() {
    this.setState({ round: this.state.round + 1 });
  }

  getInvaderCard(round) {
    if (round < 0) {
      return (<div className="invader-card">None</div>);
    }

    const filename = toFilename(this.deck[round], "png");
    return (
        <img
          className="invader-card"
          src={this.images(filename)}
          alt={this.deck[round]}
          width={WIDTH}
          height={HEIGHT}
        />
    )
  }

  render() {
    if (this.state.round >= this.deck.length) {
      return (
        <div>Game Over</div>
      );
    }

    return (
      <div className="invader-container">
        <span>
          <div className="invader-header">Ravage</div>
          {this.getInvaderCard(this.state.round - 2)}
        </span>
        <span>
          <div className="invader-header">Build</div>
          {this.getInvaderCard(this.state.round - 1)}
        </span>
        <span>
          <div className="invader-header">Explore</div>
          {this.getInvaderCard(this.state.round)}
        </span>
        <span>
          <div className="invader-header">Invader Deck</div>
          <div className="invader-card">
            {this.deck.length - this.state.round - 1}
          </div>
        </span>
        <span>
          <button onClick={this.handleClick.bind(this)}>Advance</button>
        </span>
      </div>
    );
  }
}
