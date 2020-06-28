import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './Navigation.css';

const navigation = props => {
  const navigationItems = props.navigation.map((item, i) => (
    <NavigationItem
      clicked={
        item === 'new game'
          ? props.newGame
          : props.showRanking
      }
      key={i}>{item}</NavigationItem>
  ));
  return <div className='navigationContainer'>{navigationItems}</div>
};

export default navigation;