import React, { Component } from "react";

export default class BlightContainer extends Component {
  constructor(props) {
    super(props);
    this.totalBlight = this.props.players * 2;

    this.state = { value: 10 };

    this.handleClickP = this.handleClickP.bind(this);
    this.handleClickM = this.handleClickM.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClickP(e) {
    const newBlight = this.state.value++;
    this.setState({ newBlight });
  }
  handleClickM(e) {
    const newBlight = this.state.value--;
    this.setState({ newBlight });
  }

  handleChange(e) {
    this.setState({ value: Math.max(e.target.value, 0) });
  }
  render() {
    return (
      <div className="blight-container">
        Blights Counter {"\n"}
        {this.state.value} Blights left.
        <div className="change-blight">
          <button onClick={this.handleClickP}>
            Add Blight
          </button>
          <button onClick={this.handleClickM}>
            Remove Blight
          </button>
        </div>
      </div>
    );
  }
}
