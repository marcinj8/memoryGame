import React from 'react';

import './Backdrop.css';

const backdrop = props => {

  let backdropSytle = ['backdrop__container'];
  if(props.show) {
    backdropSytle.push('backdrop__container--active')
  }
  
  return (
    <div 
      className={backdropSytle.join(' ')}
      onClick={props.clicked}>
    </div>
  );
};

export default backdrop;