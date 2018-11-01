import React from 'react';

import './NavigationItem.css';

const navigationItem = props => {
  const navigationItemStyle = ['navigation__navigationItem'];
  if (props.active) {
    navigationItemStyle.push('navigation__navigationItem--active');
  }
  
  return (
    <span className={navigationItemStyle.join(' ')}>
      {props.children}
    </span>
  );
};

export default navigationItem;