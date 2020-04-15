import React, { Component } from "react";
import "./homescreen.css";
import PlaceholderNav from "../nav/nav";
import InputPin from "./inputpin/inputpin";

class Homescreen extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Homescreen</h1>
        <InputPin redir={(value) => this.redirect(value)} />
        <PlaceholderNav />
      </div>
    );
  }

  redirect = (value) => {
    this.props.history.push("/questionaire/" + value);
  };
}

export default Homescreen;
