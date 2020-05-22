import React, { Component } from "react";
import "./creategame.css";
import axios from "axios";
import { v1 as uuidv1 } from "uuid";
import Nav from "../nav/nav";
import Loading from "../loading/loading";

class CreateGame extends Component {
  state = {
    title: "",
    description: "",
    theories: [],
    questions: [],
    initiated: false,
    currentlyChaning: 0,
    flipCoin: false,
    awaitingCreation: false,
  };

  componentDidMount() {}
  render() {
    return (
      <div className="creategame-wrapper">
        <Nav />
        {!this.state.initiated ? (
          <div className="form-init-wrapper">
            <form
              className="init-form"
              onSubmit={(e) => this.handleInitFormSubmit(e)}
              onChange={(e) => this.handleInitFormChange(e)}
            >
              <label>Title</label>
              <input name="title" type="text" required></input>
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                className=" textarea textarea-big"
                required
              ></textarea>
              <input className="nextbutton" type="submit" value="next"></input>
            </form>
          </div>
        ) : (
          <div className="form-questions-wrapper">
            <form
              name="question-form"
              className="question-form"
              onSubmit={(e) => {
                this.submitQuestion(e);
              }}
            >
              <h2 style={{ color: "white" }}>
                Dilemma {this.state.currentlyChaning + 1}
              </h2>
              <label>Image Link</label>
              <input type="text" name="img" placeholder="optional"></input>
              <label>Text</label>
              <textarea
                className="textarea"
                type="text"
                name="text"
                required
              ></textarea>
              <label>Question</label>
              <input type="text" name="question" required></input>
              <div className="options-container">
                <div className="option-box">
                  <div className="option-header">
                    <label>Option 1</label>
                    <input
                      type="text"
                      name="option_1"
                      className="option-text"
                      required
                    ></input>
                  </div>
                  <div className="chexbox-containers-wrapper">
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Act Utilitarianism</label>
                      <input
                        name="au1"
                        value="Act Utilitarianism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Kantian Ethics</label>
                      <input
                        name="ke1"
                        value="Kantian Ethics"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Aristotelianism</label>
                      <input
                        name="ar1"
                        value="Aristotelianism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Ethical Egoism</label>
                      <input
                        name="ee1"
                        value="Ethical Egoism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Classical Natural Law Theory</label>
                      <input
                        name="cnlt1"
                        value="Classical Natural Law Theory"
                        type="checkbox"
                      ></input>
                    </div>
                  </div>
                </div>
                <div></div>
                <div className="option-box">
                  <div className="option-header">
                    <label>Option 2</label>
                    <input
                      type="text"
                      name="option_2"
                      className="option-text"
                      required
                    ></input>
                  </div>
                  <div className="chexbox-containers-wrapper">
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Act Utilitarianism</label>
                      <input
                        name="au2"
                        value="Act Utilitarianism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Kantian Ethics</label>
                      <input
                        name="ke2"
                        value="Kantian Ethics"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Aristotelianism</label>
                      <input
                        name="ar2"
                        value="Aristotelianism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Ethical Egoism</label>
                      <input
                        name="ee2"
                        value="Ethical Egoism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Classical Natural Law Theory</label>
                      <input
                        name="cnlt2"
                        value="Classical Natural Law Theory"
                        type="checkbox"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-coin-container">
                <input
                  onChange={(e) => this.handleFlipCheck(e)}
                  t
                  type="checkbox"
                ></input>
                <label>"Flip a coin"-option?</label>
              </div>
              {this.state.flipCoin ? (
                <div className="option-box">
                  <div className="option-header">
                    <label>Option 3</label>
                    <input
                      disabled
                      type="text"
                      name="option_3"
                      value="Flip a coin"
                      required
                    ></input>
                  </div>
                  <div className="chexbox-containers-wrapper">
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Act Utilitarianism</label>
                      <input
                        name="au3"
                        value="Act Utilitarianism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Kantian Ethics</label>
                      <input
                        name="ke3"
                        value="Kantian Ethics"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Aristotelianism</label>
                      <input
                        name="ar3"
                        value="Aristotelianism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Ethical Egoism</label>
                      <input
                        name="ee3"
                        value="Ethical Egoism"
                        type="checkbox"
                      ></input>
                    </div>
                    <div className="checkbox-container">
                      <div className="filler"></div>
                      <label>Classical Natural Law Theory</label>
                      <input
                        name="cnlt3"
                        value="Classical Natural Law Theory"
                        type="checkbox"
                      ></input>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <input className="addbutton" type="submit" value="Add"></input>
            </form>
            <button
              className={
                this.state.questions.length > 0
                  ? "createbutton"
                  : "createbutton unclickable"
              }
              onClick={() => this.createQuestionaire()}
            >
              Create
            </button>
          </div>
        )}

        {this.state.awaitingCreation ? (
          <div className="fullscreen-modal">
            <h3 className="modal-text">Creating game</h3>
            <div className="modal-content">
              <Loading />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
  submitQuestion = (e) => {
    e.preventDefault();
    let target = e.target;
    let currentQuestions = this.state.questions;
    console.log(target);
    let question = {
      /**TODO: ADD NAMES TO CHECKBOXES AND ADD TO THIS OBJECT */

      question_id: this.state.currentlyChaning,
      text: target.text.value,
      img: target.img.value,
      question: target.question.value,
      option_1: {
        text: target.option_1.value,
        theories: this.getQuestionTheories(target, 1),
      },
      option_2: {
        text: target.option_2.value,
        theories: this.getQuestionTheories(target, 2),
      },
    };

    if (this.state.flipCoin) {
      question.option_3 = {
        text: target.option_3.value,
        theories: this.getQuestionTheories(target, 3),
      };
    }

    currentQuestions.push(question);
    let currentlyChaning = this.state.currentlyChaning + 1;
    this.setState({
      questions: currentQuestions,
      currentlyChaning,
      flipCoin: false,
    });

    var frm = document.getElementsByName("question-form")[0];
    frm.reset();
  };
  handleInitFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleInitFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ initiated: true });
  };
  handleFlipCheck = (e) => {
    this.setState({ flipCoin: e.target.checked });
  };

  getQuestionTheories = (form, optionIndex) => {
    let allTheories = this.state.theories;
    let theories = [];
    for (let i = 0; i < form.length; i++) {
      if (
        form[i].type == "checkbox" &&
        form[i].checked &&
        form[i].name.includes(optionIndex)
      ) {
        theories.push(form[i].value);
        //*ADDS THEORY TO QUESTIONAIRE IF NOT ALREADY ADDED */
        if (allTheories.indexOf(form[i].value) === -1) {
          allTheories.push(form[i].value);
          console.log(allTheories);
          this.setState({ theories: allTheories });
        }
      }
    }
    return theories;
  };
  getAllTheories = () => {};
  createQuestionaire = (async) => {
    this.setState({ awaitingCreation: true });
    let questionaire = {
      title: this.state.title,
      description: this.state.description,
      theories: this.state.theories,
      questions: this.state.questions,
    };

    axios
      .post("/addQuestionaire", {
        params: {
          questionaire: questionaire,
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ awaitingCreation: false });
        this.props.history.push({
          pathname: "/created",
          state: {
            data: response.data,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default CreateGame;
