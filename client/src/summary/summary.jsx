import React, { Component } from "react";
import axios from "axios";
import "./summary.css";
import PlaceholdeNav from "../nav/nav";
class Summary extends Component {
  state = { summary: {} };

  async componentDidMount() {
    await this.setState({ summary: this.props.history.location.state });
    this.pushAnswers();
  }
  render() {
    return (
      <div>
        <h1>Summary</h1>
        <PlaceholdeNav />
      </div>
    );
  }

  pushAnswers = () => {
    console.log(this.state.summary);
    axios
      .post("/postAnswers", {
        params: { summary: this.state.summary },
      })
      .then((response) => {
        console.log(response);
      });
  };
}

export default Summary;
