import React, { Component } from "react";
import Loading from "./loading/loading";
import PlaceholderNav from "../nav/nav";
import axios from "axios";
import "./questionaire.css";
class Questionaire extends Component {
  state = {
    id: "",
    isLoading: true,
    questionaire: {
      id: "0001",
      title: "Corona Dilemmas",
      description:
        "infectious disease outbreaks are frequently characterized by scientific uncertainty, social and institutional disruption, and an overall climate of fear and distrust. policy makers and public health professionals may be forced to weigh and prioritize potentially competing ethical values in the face of severe time and resource constraints. ",
      questions: [
        {
          text:
            "a 16-year-old boy with diabetes and a 75-year-old grandfather are in a hospital and struggling to breathe. the hospital only has one ventilator left.",
          img: "https://picsum.photos/200/300",
          question: "who gets the ventilator?",
          option_1: "the boy",
          option_2: "the grandfather",
        },
        {
          text:
            "a 16-year-old boy with diabetes and a 75-year-old grandfather are in a hospital and struggling to breathe. the hospital only has one ventilator left.",
          img: "https://picsum.photos/200/300",
          question: "who gets the ventilator?",
          option_1: "the boy",
          option_2: "the grandfather",
        },
        {
          text:
            "a 16-year-old boy with diabetes and a 75-year-old grandfather are in a hospital and struggling to breathe. the hospital only has one ventilator left.",
          img: "https://picsum.photos/200/300",
          question: "who gets the ventilator?",
          option_1: "the boy",
          option_2: "the grandfather",
        },
      ],
    },
    currentQuestion: {
      img: "https://picsum.photos/200/300",
      text:
        "a 16-year-old boy with diabetes and a 75-year-old grandfather are in a hospital and struggling to breathe. the hospital only has one ventilator left.",
      question: "who gets the ventilator?",
      option_1: "the 16-year-old boy",
      option_2: "the 75-year-old grandfather",
    },
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
    return (
      <div className="questionaire-wrapper">
        <div className="section">
          <h1 className="questionaire-title">
            {this.state.questionaire.title}
          </h1>
          <p className="questionaire-id">id: {this.state.questionaire.id}</p>
        </div>
        <div className="question-section section">
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
        this.setState({ isLoading: false });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default Questionaire;
