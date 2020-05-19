import React, { Component } from "react";
import "./creategame.css";
import PlaceholdeNav from "../nav/nav";
import { v1 as uuidv1 } from "uuid";
import Modal from "./modal/modal";

class CreateGame extends Component {
  state = {
    title: "",
    description: "",
    theories: [],
    questions: [],
    initiated: false,
  };

  componentDidMount() {}
  render() {
    return (
      <div className="creategame-wrapper">
        {!this.state.initiated ? (
          <div className="form-init-wrapper">
            <form
              className="init-form"
              onSubmit={(e) => this.handleInitFormSubmit(e)}
              onChange={(e) => this.handleInitFormChange(e)}
            >
              <label>Title</label>
              <input name="title"></input>
              <label>Description</label>
              <input name="description"></input>
              <input type="submit" value="next"></input>
            </form>
          </div>
        ) : (
          <div className="form-questions-wrapper">
            {this.state.questions.map((question, index) => {
              return (
                <Modal
                  key={uuidv1()}
                  change={(question) => {
                    this.setState({
                      questions: [
                        ...this.state.questions.slice(0, index),
                        question,
                        ...this.state.questions.slice(index + 1),
                      ],
                    });
                  }}
                  state={question}
                />
              );
            })}

            <h1>Add questions to your game</h1>

            <button onClick={() => this.addQuestion()}>Add</button>
          </div>
        )}
        <PlaceholdeNav />
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    );
  }

  handleInitFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleInitFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ initiated: true });
  };

  handleQuestionChange = (question) => {
    console.log(question);
  };
  previousQuestion = () => {};
  nextQuestion = () => {};
  addQuestion = () => {
    let temp = this.state.questions;
    let question = {
      id: this.state.questions.length,
      text: "",
      img: "",
      question: "",
      option_1: {
        text: "",
        theories: [],
      },
      option_2: {
        text: "",
        theories: [],
      },
    };
    temp.push(question);
    this.setState({ temp });
  };
}

export default CreateGame;
