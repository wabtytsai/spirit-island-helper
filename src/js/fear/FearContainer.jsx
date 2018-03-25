import React, { Component } from 'react';
import _ from 'lodash';

import FearDeck from './FearDeck';
import FearPool from './FearPool';
import fearCards from './fear-cards.json';

export default class FearContainer extends Component {
  constructor(props) {
    super(props);

    this.totalFears = this.props.players * 4;

    const totalCards = this.props.fearSetup.reduce(
      (total, value) => total + value,
      0
    );

    this.state = {
      fears: this.totalFears,
      fearDeck: _.shuffle(fearCards).slice(0, totalCards),
      earnedFears: [],
      discardedFears: [],
    };

    this.handleFearGeneration = this.handleFearGeneration.bind(this);
  }

  handleFearGeneration(e) {
    this.setState(function(prevState, props) {
      let fears = prevState.fears - 1;
      let fearDeck = prevState.fearDeck;
      let earnedFears = prevState.earnedFears;

      if (fears <= 0) {
        fears = this.totalFears;
        earnedFears.push(fearDeck.pop());
      }

      return {
        fears,
        fearDeck,
        earnedFears,
      };
    });
  }

  getTerrorLevel() {
    const earnedTotal = this.state.earnedFears.length + this.state.discardedFears.length;
    const level1 = 0;
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

  render() {
    return (
      <div>
        <FearPool
          handleClick={this.handleFearGeneration}
          fears={this.state.fears}
        />

        <FearDeck
          fearDeck={this.state.fearDeck}
          earnedFears={this.state.earnedFears}
          discardedFears={this.state.discardedFears}
          terrorLevel={this.getTerrorLevel()}
        />
      </div>
    );
  }
};
