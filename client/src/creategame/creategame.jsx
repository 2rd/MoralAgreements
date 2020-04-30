import React, { Component } from "react";
import PlaceholderNav from "../nav/nav";
import Testy from "./newgame/newgame";
import Scenario from "./scenario/scenario";
import "./creategame.css";
import ChooseName from "../choosename/choosename";

class Creategame extends Component {
  state = { started: false };
  render() {
    if (!this.state.started) {
      return (
        <div>
          <ChooseName/>
          <button onClick={() => this.started()}>Next</button>;
        </div>
      )
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
