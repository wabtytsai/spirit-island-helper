import React, { Component } from "react";
import {toFilename} from '../utils';

const WIDTH = 300;
const HEIGHT = 420;

export default class DiscardedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.showToolTip = this.showToolTip.bind(this);
    this.hideToolTip = this.hideToolTip.bind(this);
  }

  showToolTip() {
    this.setState({hover: true});
  }

  hideToolTip() {
    this.setState({hover: false});
  }

  renderImage(card) {
    const filename = toFilename(card.name, "jpg");
    return (
      <img
        src={this.props.images(filename)}
        alt={card.name}
        width={WIDTH}
        height={HEIGHT}
      />
    );
  }

  render() {
    let card = this.props.card;
    return (
      <div className="discarded-card">
        <p
          onMouseEnter={this.showToolTip}
          onMouseLeave={this.hideToolTip}
        >
          {card.name}
        </p>
        {this.state.hover && this.renderImage(card)}
      </div>
    );
  }
}
