import React from 'react';

import './Card.css';

const card = props => {
  const cardStyle = ['gamefield__card'];
  let background = {};

  let clicked = () => false;
  if (props.guessed) {
    cardStyle.push('gamefield__card--guessed');
  } else if (!props.guessed) {
    cardStyle.push('gamefield__card--guess');
    clicked = () => props.clicked(props.color);
  }

  if (props.show || props.choosed || props.guessed) {
    background = { 'background': props.color }
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