import React from 'react';

import './Card.css';

const card = props => {
  const cardStyle = ['gamefield__card'];
  let background = {'background': 'gray'};

  let clicked = () => false;
  if (props.guessed) {
    cardStyle.push('gamefield__card--guessed');
  } else if (!props.guessed) {
    cardStyle.push('gamefield__card--guess');
    clicked = () => props.clicked(props.color);
  }

  if(true ||props.clicked) {
    background = {'background': props.color}
  }
  
  return (
    <div 
      onClick={clicked} 
      style={background} 
      className={cardStyle.join(' ')}>
    </div>
  );
};

export default card;