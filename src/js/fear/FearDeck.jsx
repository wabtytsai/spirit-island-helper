import React, { Component } from 'react';

import FearCard from './FearCard';

export default class FearDeck extends Component {
  renderFearDeck() {
    if (this.props.fearDeck.length <= 0) {
      return (
        <div className="fear-deck">
          Victory!
        </div>
      );
    }

    return (
      <div className="fear-deck">
        <span className="fear-header">
          Fear Deck:
        </span>
        {this.props.fearDeck.length} cards remaining.
      </div>
    );
  }

  render() {
    return (
      <div className="fear-deck-container">
        <div className="terror-level">
          <div className="fear-header">
            Terror Level {this.props.terrorLevel}
          </div>
        </div>

        {this.renderFearDeck()}

        <div className="earned-fears">
          <div className="fear-header">
            Earned Fears:
          </div>
          {this.props.earnedFears.map((card) =>
            <FearCard
              key={card.id}
              card={card}
              handleReveal={this.props.handleReveal}
              handleUse={this.props.handleUse}
            />
          )}
        </div>

        <div className="discarded-fears">
          <div className="fear-header">
            Discarded Fears:
          </div>
          {this.props.discardedFears.map((card) =>
            <div key={card.id}> {card.name} </div>
          )}
        </div>
      </div>
    );
  }
};
