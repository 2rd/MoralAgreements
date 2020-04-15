import React, { Component } from "react";
import "./summary.css";
import PlaceholdeNav from "../nav/nav";
class Summary extends Component {
  state = {};
  componentDidMount = () => {
    console.log(this.props.history.location.state);
  };
  render() {
    return (
      <div>
        <h1>Summary</h1>
        <PlaceholdeNav />
      </div>
    );
  }
}

export default Summary;
