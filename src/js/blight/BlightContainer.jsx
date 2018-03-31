import React, { Component } from "react";

export default class BlightContainer extends Component {
  constructor(props) {
    super(props);
    this.totalBlight = this.props.players * 2;

    this.state = { 
      numBlight: this.totalBlight,
      blightCardName: "No Effects",
      blightCardEffect: "",
      endGameTrigger: 0
    };

    this.handleAddBlight = this.handleAddBlight.bind(this);
    this.handleRemoveBlight = this.handleRemoveBlight.bind(this);
    this.renderBlightCard = this.renderBlightCard.bind(this);

  }
  renderBlightCard(blights) {
    if (blights <= 1 && !this.state.endGameTrigger) {
      var rngBlight = Math.round(Math.random());
      if(rngBlight){
        this.setState({ blightCardName: "Downward Spiral" });
        this.setState({ blightCardEffect: "At the start of each invader phase, each spirit loses one presence." });
        this.setState({ numBlight: 5 * this.props.players }); 
      }
      else{
        this.setState({ blightCardName: "Memory Fades" });
        this.setState({ blightCardEffect: "At the start of each invader phase, each spirit forgets one power or loses one presence." });
        this.setState({ numBlight: 4 * this.props.players });
      }
      this.setState({ endGameTrigger: 1 });
    }
    if (blights <=1 && this.state.endGameTrigger) {
      this.setState({ blightCardName: "GAME OVER" });
      this.setState({ blightCardEffect: "" });
    }
  }

  handleAddBlight(e) {
    this.setState({ numBlight: this.state.numBlight + 1 });
  }
  handleRemoveBlight(e) {
    this.setState({ numBlight: this.state.numBlight - 1 });
    this.renderBlightCard(this.state.numBlight);
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
          <p>{this.state.blightCardName}</p>
          <p>{this.state.blightCardEffect}</p>
        </div>
      </div>
    );
  }
}
