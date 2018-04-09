import React, { Component } from "react";
import _ from "lodash";

import blightCards from "./blight-cards.json";

export default class BlightContainer extends Component {
  constructor(props) {
    super(props);
    this.totalBlight = this.props.players * 2;

    this.state = { 
      numBlight: this.totalBlight,
      blightCard: {},
      endGameTrigger: false
    };

    this.handleAddBlight = this.handleAddBlight.bind(this);
    this.handleRemoveBlight = this.handleRemoveBlight.bind(this);

  }

  handleAddBlight(e) {
    this.setState({ numBlight: this.state.numBlight + 1 });
  }
  handleRemoveBlight(e) {
    const newBlight = this.state.numBlight - 1;
    this.setState({ numBlight: newBlight});
    if(newBlight <= 0 && this.state.endGameTrigger){
      this.setState({ blightCard: { "desc": "", "name": "GAME OVER", "newblights": 0 } });
      this.setState({ numBlight: 0 });
    }
    else if(newBlight === 0 ){
      this.setState({ endGameTrigger: true });
      let card = _.shuffle(blightCards)[0];
      this.setState({ blightCard: card });
      this.setState({ numBlight: card.newBlights*this.props.players });
    }
  }
  
  render() {
    return (
      <div className="blight-container">
        <p> Blights Counter </p>
        <p> {this.state.numBlight} Blights left </p>
        <div className="change-blight">
          <button onClick={this.handleAddBlight}>
            Add Blight
          </button>
          <button onClick={this.handleRemoveBlight}>
            Remove Blight
          </button>
        </div>
        <div className="effect-name">
          <p></p>
          <p>{this.state.blightCard.name}</p>
          <p>{this.state.blightCard.desc}</p>
        </div>
      </div>
    );
  }
}
