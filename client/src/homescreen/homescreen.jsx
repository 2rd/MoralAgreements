import React, { Component } from 'react';
import "./homescreen.css"

class Homescreen extends Component {
    state = {name:"Magnus"  }
    render() { 
        return (<div>
            <h1>{this.state.name}</h1>
        </div>  );
    }
}
 
export default Homescreen;