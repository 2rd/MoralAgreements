import React, { Component } from "react";
import Loading from "../loading/loading";
import { v1 as uuidv1 } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
import "./questionaire.css";
import Nav from "../nav/nav";
import Progress from "../progress/progress";
import TheoryModal from "./theorymodal/theorymodal";
class Questionaire extends Component {
  state = {
    started: false,
    isLoading: true,
    questionaire: {},
    currentQuestionIndex: 0,
    currentQuestion: {},
    scores: [],
    answers: [],
    theoryData: [
      {
        theory: "Act Utilitarianism",
        iconText: "twemoji:brain",
        description:
          "An action is right or wrong depending on the amount of benefit it provides to  the most people.",
        quote: "The greatest amount of good for the greatest amount of people",
        summaryText:
          "Utilitarianism believe that an action is right or wrong based on their effect. If the action benefits the most people, it is right and is chosen over the other bad actions.  Its calculated from the amount of happiness gained minus pain it causes",
        philosophers: ["John Stuart", "Jeremy Bentham"],
      },
      {
        theory: "Kantian Ethics",
        iconText: "twemoji:balance-scale",
        description:
          "People have a duty to do the right thing no matter the result of said action. Everyone should act the way they want others to act in the same situation as a general law. ",
        quote:
          "Act only according to that maxim by which you can at the same time will that it should be a universal law",
        summaryText:
          "Kantian Ethics believe that an action is only morally good if it follows the categorical imperative: Universalizability, Humanity, Autonomy. Categorical imperative must always be followed no matter the situation or what you desire to do. The only good is goodwill which is achieved when people follow their duty and act within moral law. ",
        philosophers: ["Immanuel Kant"],
      },
      {
        theory: "Aristotelianism",
        iconText: "noto:man-superhero",
        description:
          "A person’s action reflects their inner identity. If a person inhabits a moral identity, then his or her actions will also be moral. ",
        quote:
          "In order to make a judgement about right or wrong, one must analyse and conclude what an individual who possesses all those virtues, would do in that particular situation",
        summaryText:
          "Aristotelianism believe that is not one’s actions, but rather one’s inner identity and character that represent the root of morality. The action a person carries out is just a reflection of their inner identity and therefore it is moral if the person inhabits a moral inner identity",
        philosophers: ["Aristoteles"],
      },
      {
        theory: "Ethical Egoism",
        iconText: "emojione:hammer",
        description:
          "People act in their own self-interests and therefore it’s ethical correct to pursue and maximize one’s own self-interest",
        quote: "An act is moral if it maximizes the self-interest of the doer",
        summaryText:
          "Ethical egoists believe that all people act in their own self-interests and therefore it’s ethical correct to pursue and maximize one’s own self-interest. Self-interests  is  defined  in  the  long-term  perspective  and  do  not  include short-term desires.",
        philosophers: ["Henry Sidgwick"],
      },
      {
        theory: "Classical Natural Law Theory",
        iconText: "openmoji:trump",
        description:
          "An act can only be truly moral if the motives behind the act is right . What we can consider right depends solely on the rational nature of human beings which means that the right thing to do is the natural thing. What we constitute as right or wrong Is the same for everyone.",
        quote:
          "Live peacefully, be reasonable, express gratitude, procreate and acquire wisdom and pass it on",
        summaryText:
          "Classical Natural Law Theory believe that not only an act itself but also a person’s motives must be right in order to be truly moral. The right thing to do is therefore the natural thing to do",
        philosophers: ["Thomas Aquinas"],
      },
    ],
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
          <div className="moral-theories-header">
            <h3>Moral Theories</h3>
            <h4>(click for more info)</h4>

            <div className="moral-theories-container">
              {this.state.questionaire.theories.map((theory) => {
                return <TheoryModal data={this.getTheoryData(theory)} />;
              })}
            </div>
            <button
              className="start-btn"
              onClick={() => {
                this.setState({ started: true });
              }}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    ) : (
      /**If a questionaire matches ID */
      <div className="questionaire-wrapper">
        <Nav />
        <div className="section top-section">
          <div className="score-container">
            {this.state.scores.map((score) => {
              let theories = this.state.theoryData;
              for (let index in theories) {
                if (theories[index].theory === score.theory) {
                  return (
                    <div className="score-box">
                      <span
                        className="theory-icon"
                        class="iconify"
                        data-icon={theories[index].iconText}
                        data-inline="false"
                      ></span>
                      <Progress
                        percentage={this.calculateScorePercentage(score.score)}
                      />
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
        <div className="question-section section">
          {/* {this.state.currentQuestion.img ? (
            <img src={this.state.currentQuestion.img} />
          ) : (
            ""
          )} */}
          <p className="question-text">{this.state.currentQuestion.text}</p>
        </div>
        <div className="button-section section">
          <p className="question-question">
            {this.state.currentQuestion.question}
          </p>
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
                Flip a coin
              </button>
            ) : (
              <button className="flip-btn btn btn-disabled" disabled>
                Flip a coin
              </button>
            )}
          </div>
          <Progress percentage={this.getProgress()} />
        </div>
      </div>
    );
  }

  getProgress = () => {
    let curr =
      this.state.questionaire.questions.indexOf(this.state.currentQuestion) + 1;
    let total = this.state.questionaire.questions.length;

    return (curr / total) * 100;
  };

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
  calculateScorePercentage = (score) => {
    let totalscore = this.state.questionaire.questions.length;
    let percentage = (score / totalscore) * 100;
    return percentage;
  };
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
            numOfQuestions: this.state.questionaire.questions.length,
            theoryData: this.state.theoryData,
            date: new Date(),
          },
        },
      });
    }
  };

  getTheoryData = (theory) => {
    let theories = this.state.theoryData;

    for (let i in theories) {
      if (theories[i].theory == theory) {
        return theories[i];
      }
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
