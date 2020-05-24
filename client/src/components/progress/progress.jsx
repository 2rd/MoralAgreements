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
          {this.props.avg ? (
            <div
              className="progress-inner-avg"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "10px",
                width: "2px",
                background: "white",
                marginLeft: this.props.avg + "%",
              }}
            >
              <p>others</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Progress;
