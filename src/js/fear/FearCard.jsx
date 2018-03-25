import React, { Component } from "react";

export default class FearDeck extends Component {
  constructor(props) {
    super(props);

    this.handleReveal = this.handleReveal.bind(this);
    this.handleUse = this.handleUse.bind(this);
  }

  handleReveal() {
    this.props.handleReveal(this.props.card.id);
  }

  handleUse() {
    this.props.handleUse(this.props.card.id);
  }

  render() {
    let card = this.props.card;
    return (
      <div className="fear-card">
        {card.revealed ? card.name : "Fear Card"}
        <button onClick={this.handleReveal} hidden={card.revealed === true}>
          Reveal
        </button>
        <button onClick={this.handleUse}>Use</button>
      </div>
    );
  }
}
