import React, { Component } from "react";
import Loading from "./loading/loading";
import { v1 as uuidv1 } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
import "./questionaire.css";
import Nav from "../nav/nav";
class Questionaire extends Component {
  state = {
    started: false,
    isLoading: true,
    questionaire: {},
    currentQuestionIndex: 0,
    currentQuestion: {},
    scores: [],
    answers: [],
  };
  async componentDidMount() {
    console.log(uuidv1());
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
        <Nav />
        <div className="questionaire-init">
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
        <Nav />
        <div className="section">
          <h1 className="questionaire-title">
            {this.state.questionaire.title}
          </h1>
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
                  this.nextQuestion(
                    this.state.currentQuestion,
                    this.state.currentQuestion.option_1
                  )
                }
              >
                {this.state.currentQuestion.option_1.text}
              </button>
              <button
                className="option-btn option-btn-2 btn"
                onClick={() =>
                  this.nextQuestion(
                    this.state.currentQuestion,
                    this.state.currentQuestion.option_2
                  )
                }
              >
                {this.state.currentQuestion.option_2.text}
              </button>
            </div>

            {this.state.currentQuestion.option_3 ? (
              <button
                className="flip-btn btn"
                onClick={() =>
                  this.nextQuestion(
                    this.state.currentQuestion,
                    this.state.currentQuestion.option_3
                  )
                }
              >
                flip a coin
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }

  reloadImg = () => {
    return this.state.currentQuestion.img + "#" + uuidv1();
  };
  incrementScore = (theories) => {
    let currentScores = this.state.scores;
    theories.map((theory) => {
      currentScores.map((score) => {
        if (score.theory == theory) {
          let newScore = score.score + 1;
          score.score = newScore;
        }
      });
    });

    this.setState({ scores: currentScores });
  };
  decrementScore = () => {};
  generateScores = () => {
    let theories = this.state.questionaire.theories;
    let scores = [];
    theories.map((theory) => {
      let temp = { theory: theory, score: 0 };
      scores.push(temp);
    });
    this.setState({ scores: scores });
  };
  nextQuestion = (question, option) => {
    let curr = this.state.currentQuestionIndex;
    let answers = this.state.answers;
    let answer = {
      question_id: question.question_id,
      answer: option.text,
      theories: option.theories,
    };
    answers.push(answer);
    this.incrementScore(option.theories);
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
        state: {
          summary: {
            questionaire_id: this.state.questionaire.id,
            scores: this.state.scores,
            answers: answers,
            date: new Date(),
          },
        },
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
          this.generateScores();
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
