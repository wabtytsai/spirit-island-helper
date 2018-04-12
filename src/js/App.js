import React, { Component } from "react";

import "../css/App.css";
import InvaderContainer from "./invader/InvaderContainer";
import FearContainer from "./fear/FearContainer";
import FearPool from "./fear/FearPool";
import TerrorLevel from "./fear/TerrorLevel";
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
      earnedFearCards: 0,
      terrorLevel: 1,
    };
  }

  startGame() {
    this.setState({ start: true });
  }

  selectPlayers(players) {
    this.setState({ players });
  }

  earnFearCards(count) {
    this.setState({ earnedFearCards: count });
  }

  resetEarnedFearCards() {
    this.setState({ earnedFearCards: 0 });
  }

  updateTerrorLevel(terrorLevel) {
    if (terrorLevel !== this.state.getTerrorLevel) {
      this.setState({ terrorLevel });
    }
  }

  renderBody() {
    if (this.state.start) {
      return(
        <div className="main-container">
          <FearContainer
            fearSetup={this.state.fearSetup}
            earnedFearCards={this.state.earnedFearCards}
            resetEarnedFearCards={this.resetEarnedFearCards.bind(this)}
            updateTerrorLevel={this.updateTerrorLevel.bind(this)} />
          <FearPool
            players={this.state.players}
            earnFearCards={this.earnFearCards.bind(this)} />
          <TerrorLevel terrorLevel={this.state.terrorLevel} />
          <BlightContainer players={this.state.players} />
          <InvaderContainer setup={this.state.invaderSetup}/>
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
        <button onClick={this.startGame.bind(this)}> Start </button>
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
