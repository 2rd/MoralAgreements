import React, { Component } from "react";
import PlaceholderNav from "../nav/nav";
import Testy from "./newgame/newgame";
import TextInput from "./scenario/scenario";
import "./creategame.css";

class Creategame extends Component {
  state = {};
  render() {
    return (
      <div class="Hoved">
        <h1>Add question</h1>
        <Testy />
        <TextInput />
        <PlaceholderNav />
      </div>
    );
  }
}


export default Creategame;
