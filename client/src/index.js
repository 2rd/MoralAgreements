import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Creategame from "./components/creategame/creategame.jsx";
import Homescreen from "./components/homescreen/homescreen.jsx";
import Questionaire from "./components/questionaire/questionaire.jsx";
import Summary from "./components/summary/summary.jsx";
import App from "./App";
import { HashRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Created from "./components/creategame/created/created";

const routing = (
  <HashRouter>
    <Route exact path="/test" component={App} />
    <Route exact path="/" component={Homescreen} />
    <Route path="/create" component={Creategame} />
    <Route path="/summary" component={Summary} />
    <Route path="/questionaire/:id" component={Questionaire} />
    <Route path="/created" component={Created} />
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
