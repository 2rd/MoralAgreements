import React, { Component } from "react";
import Loading from "./loading/loading";
import PlaceholderNav from "../nav/nav";
import { Link } from "react-router-dom";
import axios from "axios";
import "./questionaire.css";
class Questionaire extends Component {
  state = {
    id: "",
    isLoading: true,
    questionaire: {},
    currentQuestion: {},
  };
  async componentDidMount() {
    await this.setState({ id: this.props.match.params["id"] });
    this.fetchQuestionaire();
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div className="questionaire-wrapper">
          <Loading />
        </div>
      );
    }
    return this.state.notFound ? (
      <div className="questionaire-wrapper">
        <h1>Not found..</h1>
        <Link to="/">Back</Link>
      </div>
    ) : (
      <div className="questionaire-wrapper">
        <div className="section">
          <h1 className="questionaire-title">
            {this.state.questionaire.title}
          </h1>
          <p className="questionaire-id">id: {this.state.questionaire.id}</p>
        </div>
        <div className="question-section section">
          {this.state.currentQuestion.img ? (
            <img src={this.state.currentQuestion.img} />
          ) : (
            ""
          )}
          <p>{this.state.currentQuestion.text}</p>
        </div>
        <div className="button-section section">
          <p>{this.state.currentQuestion.question}</p>
          <div className="button-container">
            <div className="horizontal-buttons">
              <button className="option-btn option-btn-1 btn">
                {this.state.currentQuestion.option_1}
              </button>
              <button className="option-btn option-btn-2 btn">
                {this.state.currentQuestion.option_2}
              </button>
            </div>
            <button className="flip-btn btn">flip a coin</button>
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
    );
  }

  nextQuestion = () => {};
  fetchQuestionaire = () => {
    axios
      .get("/getQuestionaire", {
        params: {
          ID: this.state.id,
        },
      })
      .then((response) => {
        console.log(response);
        let questionaire = response.data[0];
        if (questionaire) {
          this.setState({
            isLoading: false,
            questionaire: questionaire,
            currentQuestion: questionaire["questions"][0],
          });
        } else {
          this.setState({
            isLoading: false,
            notFound: true,
            questionaire: { title: "Not found.." },
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default Questionaire;
