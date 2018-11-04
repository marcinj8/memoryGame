import React from 'react';

import Card from '../Cards/Card';

import './GameField.css';

const gameField = props => {

  const choosedCards = props.choosed.map(
    card => card.number
  )
  const guessedCards = props.guessed.map(
    card => card.number
  )
  const gameField = props.colors.map((color, index) => (
    <Card
      show={props.initialShow}
      clicked={() => props.clicked(color, index)}
      choosed={choosedCards.indexOf(index) > -1}
      guessed={guessedCards.indexOf(index) > -1}
      key={index}
      color={color}
      index={index}></Card>
  ));

  return <div className='gameField' >{gameField}</div>;
};

export default gameField;