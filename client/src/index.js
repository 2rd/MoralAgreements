import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Creategame from "./creategame/creategame.jsx";
import Homescreen from "./homescreen/homescreen.jsx";
import Questionaire from "./questionaire/questionaire.jsx";
import Summary from "./summary/summary.jsx";
import App from './App';
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';




const routing = (
  <HashRouter>
    <div style={{ width: 100 + "%", height: 100 + "%" }}>
    <Route exact path="/test" component={App} />
      <Route exact path="/" component={Homescreen} />
      <Route path="/create" component={Creategame} />
      <Route path="/summary" component={Summary} />
      <Route path="/questionaire/:questionaireid" component={Questionaire} />
    </div>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
