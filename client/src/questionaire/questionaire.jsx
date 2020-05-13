import React, { Component } from "react";
import Loading from "./loading/loading";
import PlaceholderNav from "../nav/nav";
import { Link } from "react-router-dom";
import axios from "axios";
import "./questionaire.css";
class Questionaire extends Component {
  state = {
    started: false,
    isLoading: true,
    questionaire: {},
    currentQuestionIndex: 0,
    currentQuestion: {},
    answers: [],
  };
  async componentDidMount() {
    await this.setState({ id: this.props.match.params["id"] });
    this.fetchQuestionaire();
  }
  render() {
    /** Loading while getting questionaire from backend/mongodb */
    if (this.state.isLoading) {
      return (
        <div className="questionaire-wrapper">
          <Loading />
        </div>
      );
    }

    if (this.state.notFound) {
      return (
        <div className="questionaire-wrapper">
          <h1>Not found..</h1>
          <Link to="/">Back</Link>
        </div>
      );
    }
    /**If a questionaire of ID from input can't be found */
    return !this.state.started ? (
      <div className="questionaire-wrapper">
        <div>
          <h1>{this.state.questionaire.title}</h1>
          <p>{this.state.questionaire.description}</p>
          <button
            onClick={() => {
              this.setState({ started: true });
            }}
          >
            Start
          </button>
        </div>
      </div>
    ) : (
      /**If a questionaire matches ID */
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
              <button
                className="option-btn option-btn-1 btn"
                onClick={() =>
                  this.nextQuestion(this.state.currentQuestion.option_1.text)
                }
              >
                {this.state.currentQuestion.option_1.text}
              </button>
              <button
                className="option-btn option-btn-2 btn"
                onClick={() =>
                  this.nextQuestion(this.state.currentQuestion.option_2.text)
                }
              >
                {this.state.currentQuestion.option_2.text}
              </button>
            </div>
            <button
              className="flip-btn btn"
              onClick={() => this.nextQuestion("Flip a coin")}
            >
              flip a coin
            </button>
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
    );
  }

  nextQuestion = (option) => {
    let curr = this.state.currentQuestionIndex;
    let answers = this.state.answers;
    answers.push(option);
    if (curr < this.state.questionaire.questions.length - 1) {
      curr++;
      this.setState({
        currentQuestionIndex: curr,
        currentQuestion: this.state.questionaire.questions[curr],
        answers: answers,
      });
    } else {
      this.setState({ answers: answers });
      this.props.history.push({
        pathname: "/summary",
        state: { answers: this.state.answers },
      });
    }
  };
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
