import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

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
  return <div style={{ 'height': '100px' }}>{navigationItems}</div>
};

export default navigation;