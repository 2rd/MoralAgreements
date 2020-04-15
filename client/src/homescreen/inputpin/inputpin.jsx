import React, { Component } from "react";
import PinInput from "react-pin-input";
import "./inputpin.css";
class InputPin extends Component {
  state = {};
  render() {
    return (
      <div className="inputpin-wrapper">
        <h3>Enter game pin</h3>
        <PinInput
          length={4}
          initialValue=""
          onChange={(value, index) => {}}
          type="numeric"
          style={{ padding: "10px" }}
          inputStyle={{ borderColor: "gray" }}
          inputFocusStyle={{ borderColor: "red" }}
          onComplete={(value, index) => this.props.redir(value)}
        />
      </div>
    );
  }
}

export default InputPin;
