import React from 'react';

import './Card.css';

const card = props => {
  let cardStyle = ['gamefield__card', 'gamefield__card--hover'];
  let background = {};

  let clicked = () => props.clicked(props.color);

  if (props.show || props.choosed || props.guessed) {
    background = { 'background': props.color };
    cardStyle = ['gamefield__card'];
    clicked = () => false;
  }
  if(props.initialShow || props.blockChoosing) {
    clicked = () => false;
    cardStyle = ['gamefield__card'];
  }
  if (props.guessed) {
    cardStyle.push('gamefield__card--guessed');
  } else if (!props.guessed) {
    cardStyle.push('gamefield__card--guess');
  } 

 

  return (
    <div
      onClick={clicked}
      className={cardStyle.join(' ')}
      style={background}
    >
    </div>
  );
};

export default card;