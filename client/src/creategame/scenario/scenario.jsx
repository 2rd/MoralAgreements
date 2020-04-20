import React from "react";
import "./scenario.css";

const TextInput = props => {
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
        <div class="button1">
            <button type="button">Back</button>
        </div>
        <div class="button2">
            <button type="button">Next</button>
        </div>
    </div>
  );
};

export default TextInput;