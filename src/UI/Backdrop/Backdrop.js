import React from 'react';

const backdrop = props => {

  let backdropSytle = ['backdrop'];
  
  return (
    <div 
      className={backdropSytle.join(' ')}
      onClick={props.clicked}>
    </div>
  );
};

export default backdrop;