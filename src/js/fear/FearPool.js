/* @flow */
import React, { useState } from "react";

type Props = {|
  players: number,
  earnFearCards: number => void
|};

export default function FearPool(props: Props) {
  const totalFears = props.players * 4;
  const [value, setValue] = useState(1);
  const [fearTokens, setFearTokens] = useState(totalFears);

  const generateFear = () => {
    let fears = fearTokens - value;
    let count = 0;

    while (fears <= 0) {
      fears += totalFears;
      count += 1;
    }

    if (count > 0) {
      props.earnFearCards(count);
    }

    setValue(1);
    setFearTokens(fears);
  };

  return (
    <div className="fear-pool-container">
      <div className="fear-pool">
        {fearTokens} fear tokens until next fear card.
      </div>

      <div className="generate-fear">
        <input
          type="number"
          value={value}
          onChange={e => setValue(Math.max(e.target.value, 0))}
        />
        <button onClick={generateFear}>Generate Fear</button>
      </div>
    </div>
  );
}
