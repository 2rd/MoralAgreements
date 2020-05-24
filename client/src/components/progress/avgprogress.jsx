import React, { Component } from "react";
import "./avgprogress.css";
class AvgProgress extends Component {
  state = {};
  render() {
    return (
      <div className="avg-progress-wrapper">
        <div className="avg-progress-outer">
          <div
            className="avg-progress-inner"
            style={{ width: this.props.percentage + "%" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default AvgProgress;
