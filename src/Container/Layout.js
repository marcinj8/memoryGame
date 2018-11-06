import React, { Component } from 'react';

import Navigation from '../components/Navigation/Navigation';
import GameEngine from './GameEngine';

class Layout extends Component {
  state = {
    navigation: ['new game', 'ranking'],
    ranking: false,
    game: true
  };

  componentDidUpdate() {
    if (!this.state.ranking && !this.state.game) {
      this.setState({
        game: true,
      })
    }
  }

  newGameHandler = () => {
    this.setState({
      ranking: false,
      game: false
    })
  }

  showRankingHandler = () => {
    this.setState({
      ranking: true,
      game: false
    })
  }

  render() {
    let game = null;
    if(this.state.game) {
      game = <GameEngine />
    }
    return (
      <div className='mainContainer'>
        <Navigation
          newGame={this.newGameHandler}
          showRanking={this.showRankingHandler}
          navigation={this.state.navigation} />
          {game}
        <div>Footer</div>
      </div>
    );
  }
}

export default Layout;