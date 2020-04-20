import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./scenario.css";
class Scenario extends Component {
//const TextInput = props => {
    state = {};
    render() {  
        return (
            <div>
                <div class="b1">
                    <textarea rows="16" cols="50" name="comment" form="text" align="middle" placeholder="Describe scenario">
                    </textarea>
                </div>
                <div class="b2">
                    <textarea rows="4" cols="50" name="comment" form="usrform" align="right" placeholder="Type question">
                    </textarea>
                </div>
                <div class="b3">
                    <textarea rows="4" cols="21" name="comment" form="usrform" align="right" placeholder="Type option A">
                    </textarea>
                </div>
                <div class="b4">
                    <textarea rows="4" cols="21" name="comment" form="usrform" align="right" placeholder="Type option B">
                    </textarea>
                </div>
                <div class="wrap">
                    <button class="unstyled-button">Back</button>
                    <button class="button">Next</button>
                </div>
            </div>
        );
    }
}

export default Scenario;