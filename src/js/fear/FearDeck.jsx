import React, { Component } from 'react';

import FearCard from './FearCard';
import DiscardedCard from './DiscardedCard';

export default class FearDeck extends Component {
  render() {
    const images = require.context("../../img/fear", false, /\.jpg$/);

    return (
      <div className="fear-deck-container">
        <div className="fear-deck">
          <span className="fear-header">
            Fear Deck:
          </span>
          {this.props.fearDeck.length} cards remaining.
        </div>

        <div className="earned-fears">
          <div className="fear-header">
            Active Fears:
          </div>
          {this.props.activeFears.map((card) =>
            <FearCard
              key={card.id}
              card={card}
              handleReveal={this.props.handleReveal}
              handleUse={this.props.handleUse}
              images={images}
            />
          )}
        </div>

        <div className="discarded-fears">
          <div className="fear-header">
            Discarded Fears:
          </div>
          {this.props.discardedFears.map((card) =>
            <DiscardedCard
              key={card.id}
              card={card}
              images={images}
            />
          )}
        </div>
      </div>
    );
  }
};
