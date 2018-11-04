import React from 'react';

const summary = props => (
    <div>
      <h2>Your score:</h2>
      <div>
          Clicks: {props.clicks}
      </div>
      <div>
          Time: {props.time}
      </div>
    </div>
)

export default summary;