import React, { Component } from "react";
import PlaceholderNav from "../nav/nav";
import Testy from "./newgame/newgame";
import Scenario from "./scenario/scenario";
import "./creategame.css";

class Creategame extends Component {
  state = { started: false };
  render() {
    if (!this.state.started) {
      return <button onClick={() => this.started()}>Start</button>;
    }
    return (
      <div class="Hoved">
        <h1>Add question</h1>
        <Testy />
        <Scenario />
        <PlaceholderNav />
      </div>
    );
  }

  started = () => {
    this.setState({ started: true });
  };
}

export default Creategame;
