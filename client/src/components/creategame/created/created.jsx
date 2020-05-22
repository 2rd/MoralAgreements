import React, { Component } from "react";
import "./created.css";
import { Link } from "react-router-dom";
class Created extends Component {
  state = { createdgame: { data: { id: "0000" } }, link: "" };

  async componentDidMount() {
    if (this.props.history.location.state) {
      await this.setState({ createdgame: this.props.history.location.state });
      this.generateLink();
    }
    this.generateLink();
  }
  render() {
    return (
      <div className="created-wrapper">
        <h3>Success!</h3>
        <p>
          Your game has been created with pin code:{" "}
          <strong>{this.state.createdgame.data.id}</strong>
        </p>
        <input type="text" value={this.state.link} disabled></input>
        <Link cn="" to="/">
          Home
        </Link>
      </div>
    );
  }

  generateLink = () => {
    let url =
      "https://moral-agreements.herokuapp.com/#/questionaire/" +
      this.state.createdgame.data.id;
    this.setState({ link: url });
  };
}

export default Created;
