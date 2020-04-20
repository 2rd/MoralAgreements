import React from "react";
import "./textbox.css";
class Textb extends Component {
//const TextInput = props => {
  state = {};
  render() {  
    return (
        <div>
        <div class="h1">
             <h1>Choose a name for your game </h1>
       </div>
       <div class="b1">
             <textarea rows="2" cols="50" name="comment" form="text" align="middle" placeholder="Type here">
             </textarea>
       </div>
           <div class="h2">
             <h1>Tell us what the game is about</h1>
       </div>
       <div class="b2">
           <textarea rows="4" cols="50" name="comment" form="usrform" align="right" placeholder="Type here">
           </textarea>
       </div>
       <div class="button1">
           <button type="button">FLYTT MEG TIL MIDTEN DRITT CSS</button>
       </div>/div>
       <div class="button2">
             <button type="button">kan godt flytte meg og</button>
       </div>
     </div>
    );
    }
 }