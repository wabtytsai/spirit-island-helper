import React, { Component } from "react";

import "../css/App.css";
import InvaderContainer from "./invader/InvaderContainer";
import FearContainer from "./fear/FearContainer";
import BlightContainer from "./blight/BlightContainer";
import { classSet } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: 1,
      start: false,
      fearSetup: [3, 3, 3],
      invaderSetup: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3],
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.setState({ start: true });
  }

  selectPlayers(players) {
    this.setState({ players });
  }

  renderBody() {
    if (this.state.start) {
      return (
        <div className="spirit-island-body">
          <InvaderContainer setup={this.state.invaderSetup}/>
          <FearContainer
            players={this.state.players}
            fearSetup={this.state.fearSetup}
          />
          <BlightContainer players={this.state.players} />
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
              "player-count-selected": this.state.players === player,
            })}
            onClick={this.selectPlayers.bind(this, player)}
          >
            {player} Player{player > 1 ? "s" : ""}
          </div>
        ))}
        <button onClick={this.startGame}> Start </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spirit Island Helper</h1>
        </header>

        {this.renderBody()}
      </div>
    );
  }
}

export default App;
