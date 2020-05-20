import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./homescreen.css";
import Nav from "../nav/nav";
import InputPin from "./inputpin/inputpin";

class Homescreen extends Component {
  state = {};
  render() {
    return (
      <div className="homescreen-wrapper">
        <InputPin redir={(value) => this.redirect(value)} />
        <h3>or..</h3>
        <Link to="/create">Create a new game</Link>
        <Nav />
      </div>
    );
  }

  redirect = (value) => {
    this.props.history.push("/questionaire/" + value);
  };
}

export default Homescreen;
