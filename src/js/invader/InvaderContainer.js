/* @flow */

import React, { useState, useEffect } from "react";
import _ from "lodash";
import { toFilename } from "../utils";

import invaderCards from "./invader-decks.json";

const WIDTH = 100;
const HEIGHT = 150;

type Props = {|
  setup: Array<number>
|};

export default function InvaderContainer(props: Props) {
  const [round, setRound] = useState(0);
  const [deck, setDeck] = useState([]);
  const images = require.context("../../img/invader", false, /\.png/);

  useEffect(() => {
    let shuffledInvaderCards = {
      "1": _.shuffle(invaderCards["1"]),
      "2": _.shuffle(invaderCards["2"]),
      "3": _.shuffle(invaderCards["3"])
    };

    let deck = [];
    for (let stage of props.setup) {
      deck.push(shuffledInvaderCards[stage].pop());
    }
    setDeck(deck);
  }, [props.setup, setDeck]);

  const getInvaderCard = round => {
    if (round < 0) {
      return <div className="invader-card">None</div>;
    }

    const filename = toFilename(deck[round], "png");
    return (
      <img
        className="invader-card"
        src={images(filename)}
        alt={deck[round]}
        width={WIDTH}
        height={HEIGHT}
      />
    );
  };

  if (round >= deck.length) {
    return <div>Game Over</div>;
  }

  return (
    <div className="invader-container">
      <span>
        <div className="invader-header">Ravage</div>
        {getInvaderCard(round - 2)}
      </span>
      <span>
        <div className="invader-header">Build</div>
        {getInvaderCard(round - 1)}
      </span>
      <span>
        <div className="invader-header">Explore</div>
        {getInvaderCard(round)}
      </span>
      <span>
        <div className="invader-header">Invader Deck</div>
        <div className="invader-card">{deck.length - round - 1}</div>
      </span>
      <span>
        <button
          onClick={() => {
            setRound(round + 1);
          }}
        >
          Advance
        </button>
      </span>
    </div>
  );
}
