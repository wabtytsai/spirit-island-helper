import React, { Component } from "react";

export default class TerrorLevel extends Component {
  render() {
    return (
      <div className="terror-container">
        <div className="terror-level">
          Terror Level {this.props.terrorLevel}
        </div>
      </div>
    );
  }
}
