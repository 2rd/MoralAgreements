import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
class PlaceholdeNav extends Component {
  state = {};
  render() {
    return (
      <div className="placeholder-box">
        <p>This is just a navigation to use while developing</p>
        <div className="link-wrapper">
          <Link to="/">Home</Link>
          <br />
          <Link to="/inputpin">Questionaire</Link>
          <br />
          <Link to="/create">Create Questionaire</Link>
          <br />
          <Link to="/summary">Summary</Link>
        </div>
      </div>
    );
  }
}

export default PlaceholdeNav;
