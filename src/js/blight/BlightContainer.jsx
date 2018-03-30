import React, { Component } from "react";

export default class BlightContainer extends Component {
  constructor(props) {
    super(props);
    this.totalBlight = this.props.players * 2;

    this.state = { numBlight: this.totalBlight };

    this.handleAddBlight = this.handleAddBlight.bind(this);
    this.handleRemoveBlight = this.handleRemoveBlight.bind(this);

  }
  handleAddBlight(e) {
    this.setState({ numBlight: this.state.numBlight + 1 });
  }
  handleRemoveBlight(e) {
    this.setState({ numBlight: this.state.numBlight - 1 });
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
      </div>
    );
  }
}
