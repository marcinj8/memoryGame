import React, { Component } from 'react';

import Navigation from '../components/Navigation/Navigation';

class Layout extends Component {
  state ={
    navigation: ['new game', 'ranking'],
    ranking: false
  };
  render() {
    return (
      <div className='mainContainer'>
        <Navigation navigation={this.state.navigation} />
        <div>Game</div>
        <div>Footer</div>
      </div>
    );
  }
}

export default Layout;