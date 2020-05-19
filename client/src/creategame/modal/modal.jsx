import React, { Component } from "react";
class Modal extends Component {
  state = {
    id: undefined,
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

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ id: this.props.question.id });
  }

  render() {
    return (
      <div>
        <form onChange={(e) => this.handleChange(e)}>
          <input name="text"></input>
          <input name="question"></input>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    this.props.change(this.state);
  };
}

export default Modal;
