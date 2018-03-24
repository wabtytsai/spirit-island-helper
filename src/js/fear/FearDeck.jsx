import React, { Component } from 'react';
import _ from 'lodash';

import fearCards from './fear-cards.json';

class FearPool extends Component {
  constructor(props) {
    super(props);

    var temp = fearCards;
    this.fearCards = _.shuffle(fearCards);
    debugger;
  }

  render() {
    return (
      <div>
        Fear Deck:
        <ul>
          {this.fearCards.map((card) =>
            <li key={card.id}>{card.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default FearPool;
