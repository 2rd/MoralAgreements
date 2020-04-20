import React, { Component } from "react";
import PlaceholderNav from "../nav/nav";
import Textb from "./textbox/textbox";
class ChooseName extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Create Game</h1>
        <Textb/>
      </div>
    );
  }
}


export default ChooseName;
