import React from 'react';

import Card from '../Cards/Card';

import './GameField.css';

const gameField = props => {
  const gameField = props.colors.map((color, index) => (
    <Card
      clicked={() => props.clicked(color, index)}
      key={index}
      color={color}
      index={index}></Card>
  ));

  return <div className='gameField' >{gameField}</div>;
};

export default gameField;