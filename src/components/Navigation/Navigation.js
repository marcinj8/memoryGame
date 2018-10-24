import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigation = props => {
  const navigationItems = props.navigation.map((item,i) => (
    <NavigationItem key={i}>{item}</NavigationItem>
  ));
  return navigationItems
};

export default navigation;