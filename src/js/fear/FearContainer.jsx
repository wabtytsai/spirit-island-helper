import React, { Component } from "react";
import _ from "lodash";

import FearDeck from "./FearDeck";
import fearCards from "./fear-cards.json";

export default class FearContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fearDeck: this.generateFearDeck(fearCards),
      activeFears: [],
      discardedFears: [],
    };

    this.revealFear = this.revealFear.bind(this);
    this.useFear = this.useFear.bind(this);
  }

  componentDidUpdate() {
    if (this.props.earnedFearCards > 0) {
      this.earnFearCards();
    }
  }

  generateFearDeck(fearCards) {
    const totalCards = this.props.fearSetup.reduce(
      (total, value) => total + value,
      0
    );

    let deck = _.shuffle(fearCards).slice(0, totalCards);
    for (let card of deck) {
      card["revealed"] = false;
    }

    return deck;
  }

  getTerrorLevel() {
    const earnedTotal =
      this.state.activeFears.length + this.state.discardedFears.length;
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

  earnFearCards() {
    let fearDeck = this.state.fearDeck;
    let activeFears = this.state.activeFears;
    let count = this.props.earnedFearCards;

    while (count > 0 && fearDeck.length > 0) {
      count -= 1;
      activeFears.push(fearDeck.pop());
    }

    this.setState({
      fearDeck,
      activeFears,
    });
    this.props.resetEarnedFearCards();

    this.props.updateTerrorLevel(this.getTerrorLevel());
  }

  revealFear(cardId) {
    let activeFears = this.state.activeFears;
    for (let card of activeFears) {
      if (card.id === cardId) {
        card.revealed = true;
      }
    }

    this.setState({ activeFears });
  }

  useFear(cardId) {
    let activeFears = this.state.activeFears;
    let discardedFears = this.state.discardedFears;
    let selected = null;

    activeFears.forEach((card, index) => {
      if (card.id === cardId) {
        selected = index;
      }
    });

    if (selected === null) {
      return;
    }

    let card = activeFears[selected];
    activeFears.splice(selected, 1);
    discardedFears.push(card);

    this.setState({
      activeFears,
      discardedFears,
    });
  }

  render() {
    return (
      <div className="fear-container">
        <FearDeck
          fearDeck={this.state.fearDeck}
          activeFears={this.state.activeFears}
          discardedFears={this.state.discardedFears}
          handleReveal={this.revealFear}
          handleUse={this.useFear}
        />
      </div>
    );
  }
}
