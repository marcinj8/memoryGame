import React from 'react';

const navigationItem = props => {
  const navigationItemStyle = ['navigationItem'];
  if (props.active) {
    navigationItemStyle.push('active');
  }
  
  return (
    <span className={navigationItemStyle.join(' ')}>
      {props.children}
    </span>
  );
};

export default navigationItem;