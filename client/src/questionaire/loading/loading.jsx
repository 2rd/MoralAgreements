import React, { Component } from 'react';
import "./loading.css"
class Loading extends Component {
    state = {}
    render() {
        return (<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
    }
}

export default Loading;