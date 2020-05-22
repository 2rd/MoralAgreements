import React, { Component } from "react";
import "./theorymodal.css";
class TheoryModal extends Component {
  state = { fullscreen: false, data: {} };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  render() {
    return (
      <div className="theory-modal-wrapper" onClick={() => this.toggleModal()}>
        <span
          className="theory-icon"
          class="iconify"
          data-icon={this.state.data.iconText}
          data-inline="false"
        ></span>
        <h3 className="theory-modal-title">{this.state.data.theory}</h3>
        {this.state.fullscreen ? (
          <div className="modal-fullscreen">
            <div className="theory-modal-content">
              <span
                className="theory-icon"
                class="iconify"
                data-icon={this.state.data.iconText}
                data-inline="false"
              ></span>
              <h3 className="theory-modal-title-large">
                {this.state.data.theory}
              </h3>
              <p>{this.state.data.description}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  toggleModal = () => {
    this.setState({ fullscreen: !this.state.fullscreen });
  };
}

export default TheoryModal;
