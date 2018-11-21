import React from 'react';

import './GameSummary.css';

const summary = props => (
    <div className='gameSummary__block'>
        <h2>Your score:</h2>
        <div className='gameSummary__element'>
            Clicks: {props.clicks}
        </div>
        <div className='gameSummary__element'>
            Time: {props.time} seconds
      </div>
        <div className='gameSummary__element'>
            Points: {Math.round(1000 - props.time * 5 - props.clicks * 3)}
        </div>
        <button className='gameSummary__element' onClick={props.clicked}>New Game</button>
    </div>
)

export default summary;