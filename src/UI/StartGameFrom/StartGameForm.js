import React from 'react';

import './StartGameForm.css';

const startGameForm = props => {
  let style = ['startGameForm__container']
  
  return (
    <div className={style}>
      <h3>Please type your name</h3>
      <input className='startGameForm__input'/>
      <button className='startGameForm__button' onClick={props.clicked}>Start</button>
    </div>
  )
}

export default startGameForm;