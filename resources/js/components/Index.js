import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Score from './Score';

export default class Index extends Component {
    render() {
        return (
            <div className="container" style={{margin: "0 Auto", width: "800px"}}>
                <h1>Scores</h1>
                <Score />
                <h1>Scores</h1>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))
