/* @flow */

import React, { useState } from "react";

type Props = {|
  players: number
|};

function BlightContainer(props: Props) {
  const [numBlight, setNumBlight] = useState(props.players * 2);

  const addBlight = () => {
    setNumBlight(numBlight + 1);
  };

  const removeBlight = () => {
    setNumBlight(numBlight - 1);
  };

  return (
    <div className="blight-container">
      <p> Blights Counter </p>
      <p> {numBlight} Blights left </p>
      <div className="change-blight">
        <button onClick={addBlight}>Add Blight</button>
        <button onClick={removeBlight}>Remove Blight</button>
      </div>
    </div>
  );
}

export default BlightContainer;
