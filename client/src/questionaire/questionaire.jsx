import React, { Component } from "react";
import Loading from "./loading/loading";
import PlaceholderNav from "../nav/nav";
import axios from "axios";
import "./questionaire.css";
class Questionaire extends Component {
  state = { id: "", isLoading: true, questionaire: [] };
  componentDidMount() {
    this.setState({ id: this.props.match.params["id"] });
    this.fetchQuestionaire();
  }
  render() {
    return (
      <div className="questionaire-wrapper">
        <div>
          <h1> Header section </h1>
          <h2>Questionaire ID: {this.state.id}</h2>
        </div>
        <div>
          <h1> Question section</h1>
        </div>
        <div>
          <h1> Button section</h1>
        </div>
        <PlaceholderNav />
      </div>
    );
  }

  fetchQuestionaire = (async) => {
    let id = this.state.id;
    axios
      .post("/getQuestionaire", id)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default Questionaire;
