import React, { Component } from "react";
import PlaceholderNav from "../nav/nav";
class ChooseName extends Component {
  state = {};
  render() {
    return (
    <div>
      <div>
        <h1>Create Game</h1>
      </div>
      <div class="h1">
        <h1>Choose a name for your game </h1>
      </div>
      <div class="b1">
        <textarea rows="4" cols="50" name="comment" form="text" align="middle" placeholder="Type here">
        </textarea>
      </div>
      <div class="h2">
        <h1>Tell us what the game is about</h1>
      </div>
      <div class="b2">
        <textarea rows="16" cols="50" name="comment" form="usrform" align="right" placeholder="Type here">
        </textarea>
      </div>

    </div>
      
    );
  }
}


export default ChooseName;
