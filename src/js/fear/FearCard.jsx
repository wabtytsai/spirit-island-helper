import React, { Component } from "react";
import {toFilename} from '../utils';
import cover from '../../img/fear-back.jpg';

const WIDTH = 300;
const HEIGHT = 420;

export default class FearDeck extends Component {
  constructor(props) {
    super(props);

    this.handleReveal = this.props.handleReveal.bind(this, this.props.card.id);
    this.handleUse = this.props.handleUse.bind(this, this.props.card.id);
  }

  renderCard(card) {
    if (card.revealed) {
      const filename = "./" + toFilename(card.name, "jpg");
      return (
        <img
          src={this.props.images(filename)}
          alt={card.name}
          width={WIDTH}
          height={HEIGHT}
          onClick={this.handleUse}
        />
      );
    }

    return (
      <img
        src={cover}
        alt="Fear Card"
        width={WIDTH}
        height={HEIGHT}
        onClick={this.handleReveal}
      />
    );
  }

  render() {
    let card = this.props.card;
    return (
      <div className="fear-card">
        {this.renderCard(card)}
      </div>
    );
  }
}
