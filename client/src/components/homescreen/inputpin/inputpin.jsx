import React, { Component } from "react";
import PinInput from "react-pin-input";
import "./inputpin.css";
class InputPin extends Component {
  state = {};
  render() {
    return (
      <div className="inputpin-wrapper">
        <h3 style={{ color: "white" }}>Enter game code</h3>
        <PinInput
          length={4}
          initialValue=""
          onChange={(value, index) => {}}
          type="numeric"
          style={{ padding: "10px" }}
          inputStyle={{
            border: "none",
            borderBottom: "2px solid",
            borderColor: "white",
            color: "white",
            fontSize: "20px",
            margin: "5px",
          }}
          inputFocusStyle={{ borderColor: "#F1C281" }}
          onComplete={(value, index) => this.props.redir(value)}
        />
      </div>
    );
  }
}

export default InputPin;
