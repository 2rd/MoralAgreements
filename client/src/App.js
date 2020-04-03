import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={response:[]}
  render(){
    return (
      <div className="App">
        <h1>Press the button to recieve a message from the back-end</h1>
        <button onClick={() => this.testBackend()}>Click</button>
        <h3>Message:</h3>
        <h2>{this.state.response.data}</h2>
      </div>
    );
  }
  

   testBackend = async =>{
    axios.get('/message').then(response=>{
      console.log(response)
      if(response.status===200){
        this.setState({response:response})
      }
     
    }).catch(function (error) {
      console.log(error);
    });
    
  }
}

export default App;
