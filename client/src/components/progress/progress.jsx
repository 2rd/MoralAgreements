import React, { Component } from "react";
import "./progress.css";
class Progress extends Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <div className="progress-wrapper">
        <div className="progress-outer">
          <div
            className="progress-inner"
            style={{ width: this.props.percentage + "%" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Progress;
