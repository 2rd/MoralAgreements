import React, { Component } from "react";
import axios from "axios";
import "./summary.css";
import PlaceholdeNav from "../nav/nav";
import Progress from "../progress/progress";
import { Link } from "react-router-dom";
class Summary extends Component {
  state = {
    highest: {
      iconText: "",
      theoryData: { summaryText: "", quote: "", philosophers: [] },
    },
    summary: {
      answers: [],
      date: "",
      icons: [],
      numOfQuestions: 0,
      questionaire_id: "",
      scores: [],
    },
  };

  async componentDidMount() {
    if (this.props.history.location.state) {
      await this.setState({
        summary: this.props.history.location.state.summary,
      });
      this.findHighest();
      this.pushAnswers();
    }
  }
  render() {
    return (
      <div className="summary-wrapper">
        <div className="summary-header">
          <h3>Your score:</h3>
        </div>
        <div className="summary-scores">
          {this.state.summary.scores.map((score) => {
            let theories = this.state.summary.theoryData;
            for (let index in theories) {
              if (theories[index].theory === score.theory) {
                return (
                  <div className="summary-score-box">
                    <div className="summary-icon-container">
                      <span
                        className="theory-icon"
                        class="iconify"
                        data-icon={theories[index].iconText}
                        data-inline="false"
                      ></span>
                      <p className="score-theory-name">{score.theory}</p>
                    </div>
                    <div className="progress-container">
                      <Progress
                        percentage={this.calculateScorePercentage(score.score)}
                      />
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
        <div className="summary-highest">
          <div className="highest-container">
            <span
              className="theory-icon"
              class="iconify"
              data-icon={this.state.highest.iconText}
              data-inline="false"
            ></span>

            <h3 className="highest-title">
              Your morality is most aligned with{" "}
              <strong>{this.state.highest.theory}</strong>
            </h3>
            <p className="highest-description">
              {this.state.highest.theoryData.summaryText}
            </p>
            <p className="highest-quote">
              {'"' + this.state.highest.theoryData.quote + '"'}
            </p>
          </div>
        </div>
        <Link to="/">Home</Link>
      </div>
    );
  }

  findHighest = () => {
    let scores = this.state.summary.scores;
    let highest = { score: 0 };
    for (let i in scores) {
      if (scores[i].score > highest.score) {
        highest = scores[i];
        highest.iconText = this.getIcon(highest.theory);
        highest.theoryData = this.getTheoryData(highest.theory);
      }
    }
    this.setState({ highest });
  };

  getTheoryData = (theory) => {
    let theories = this.state.summary.theoryData;

    for (let i in theories) {
      if (theories[i].theory == theory) {
        return theories[i];
      }
    }
  };
  getIcon = (theory) => {
    let theories = this.state.summary.theoryData;

    for (let i in theories) {
      if (theories[i].theory == theory) {
        return theories[i].iconText;
      }
    }
  };

  calculateScorePercentage = (score) => {
    let totalscore = this.state.summary.numOfQuestions;
    let percentage = (score / totalscore) * 100;
    return percentage;
  };
  pushAnswers = () => {
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
