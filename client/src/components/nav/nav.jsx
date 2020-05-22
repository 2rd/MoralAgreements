import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="placeholder-box">
        <div className="link-wrapper">
          <Link to="/">
            <span>{"<"}</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
