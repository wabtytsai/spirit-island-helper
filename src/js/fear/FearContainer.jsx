import React, { Component } from "react";
import _ from "lodash";

import FearDeck from "./FearDeck";
import FearPool from "./FearPool";
import fearCards from "./fear-cards.json";

export default class FearContainer extends Component {
  constructor(props) {
    super(props);

    this.totalFears = this.props.players * 4;

    this.state = {
      fears: this.totalFears,
      fearDeck: this.generateFearDeck(fearCards),
      earnedFears: [],
      discardedFears: [],
    };

    this.handleFearGeneration = this.handleFearGeneration.bind(this);
    this.revealFear = this.revealFear.bind(this);
    this.useFear = this.useFear.bind(this);
  }

  generateFearDeck(fearCards) {
    const totalCards = this.props.fearSetup.reduce(
      (total, value) => total + value,
      0
    );

    let deck = _.shuffle(fearCards).slice(0, totalCards);
    for (var card of deck) {
      card["revealed"] = false;
    }

    return deck;
  }

  getTerrorLevel() {
    const earnedTotal =
      this.state.earnedFears.length + this.state.discardedFears.length;
    const level2 = this.props.fearSetup[0];
    const level3 = this.props.fearSetup[1] + level2;

    if (earnedTotal >= level3) {
      return 3;
    } else if (earnedTotal >= level2) {
      return 2;
    } else {
      return 1;
    }
  }

  handleFearGeneration(value) {
    this.setState(function(prevState, props) {
      let fears = prevState.fears - value;
      let fearDeck = prevState.fearDeck;
      let earnedFears = prevState.earnedFears;

      while (fears <= 0 && fearDeck.length > 0) {
        fears += this.totalFears;
        earnedFears.push(fearDeck.pop());
      }

      if (fearDeck.length === 0) {
        fears = 0;
      }

      return {
        fears,
        fearDeck,
        earnedFears,
      };
    });
  }

  revealFear(cardId) {
    let earnedFears = this.state.earnedFears;
    for (let card of earnedFears) {
      if (card.id === cardId) {
        card.revealed = true;
      }
    }

    this.setState({ earnedFears });
  }

  useFear(cardId) {
    let earnedFears = this.state.earnedFears;
    let discardedFears = this.state.discardedFears;
    let selected = null;

    earnedFears.forEach((card, index) => {
      if (card.id === cardId) {
        selected = index;
      }
    });

    if (selected === null) {
      return;
    }

    let card = earnedFears[selected];
    earnedFears.splice(selected, 1);
    discardedFears.push(card);

    this.setState({
      earnedFears,
      discardedFears,
    });
  }

  render() {
    return (
      <div className="fear-container">
        <FearPool
          handleClick={this.handleFearGeneration}
          fears={this.state.fears}
          hidden={this.state.fearDeck.length === 0}
        />

        <FearDeck
          fearDeck={this.state.fearDeck}
          earnedFears={this.state.earnedFears}
          discardedFears={this.state.discardedFears}
          terrorLevel={this.getTerrorLevel()}
          handleReveal={this.revealFear}
          handleUse={this.useFear}
        />
      </div>
    );
  }
}
