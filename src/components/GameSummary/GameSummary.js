import React from 'react';

const summary = props => (
    <div>
        <h2>Your score:</h2>
        <div>
            Clicks: {props.clicks}
        </div>
        <div>
            Time: {props.time} seconds
      </div>
        <div>
            Points: {Math.round(1000 - props.time * 5 - props.clicks * 3)}
        </div>
        <button onClick={props.clicked}>New Game</button>
    </div>
)

export default summary;