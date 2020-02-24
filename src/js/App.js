/* @flow */
import React, { useState } from "react";

import "../css/App.css";
import InvaderContainer from "./invader/InvaderContainer";
import FearContainer from "./fear/FearContainer";
import FearPool from "./fear/FearPool";
import TerrorLevel from "./fear/TerrorLevel";
import BlightContainer from "./blight/BlightContainer";
import { classSet } from "./utils";

function App() {
  const [players, setPlayers] = useState(1);
  const [start, setStart] = useState(false);
  const [fearSetup, _setFearSetup] = useState([3, 3, 3]);
  const [invaderSetup, _setInvaderSetup] = useState([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]);
  const [earnedFearCards, setEarnedFearCards] = useState(0);
  const [terrorLevel, setTerrorLevel] = useState(1);

  const renderBody = () => {
    if (start) {
      return(
        <div className="main-container">
          <FearContainer
            fearSetup={fearSetup}
            earnedFearCards={earnedFearCards}
            resetEarnedFearCards={() => setEarnedFearCards(0)}
            updateTerrorLevel={level => setTerrorLevel(level)} />
          <FearPool
            players={players}
            earnFearCards={count => {setEarnedFearCards(count)}} />
          <TerrorLevel terrorLevel={terrorLevel} />
          <BlightContainer players={players} />
          <InvaderContainer setup={invaderSetup} />
        </div>
      );
    }

    const playerCounts = [1, 2, 3, 4];
    return (
      <div className="spirit-island-setup">
        {playerCounts.map(player => (
          <div
            key={player}
            className={classSet({
              "player-count": true,
              "player-count-selected": players === player,
            })}
            onClick={player => {setPlayers(player)}}
          >
            {player} Player{player > 1 ? "s" : ""}
          </div>
        ))}
        <button onClick={() => {setStart(true)}}> Start </button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Spirit Island Helper</h1>
      </header>

      {renderBody()}
    </div>
  );
}

export default App;
