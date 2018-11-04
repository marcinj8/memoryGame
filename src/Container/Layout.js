import React, { Component } from 'react';

import Navigation from '../components/Navigation/Navigation';
import GameEngine from './GameEngine';

class Layout extends Component {
  state ={
    navigation: ['new game', 'ranking'],
    ranking: false,
  };
  render() {
    return (
      <div className='mainContainer'>
        <Navigation navigation={this.state.navigation} />
        <GameEngine />
        <div>Footer</div>
      </div>
    );
  }
}

export default Layout;