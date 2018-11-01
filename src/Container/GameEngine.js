import React, { Component } from 'react';

import GameField from '../components/Game/GameField/GameField';

const COLORS = ['red', 'blue', 'yellow', 'green', 'purple', 'turquoise', 'pink', 'olive', 'orangered', 'red', 'blue', 'yellow', 'green', 'purple', 'turquoise', 'pink', 'olive', 'orangered'];

class GameEngine extends Component {
  state = {
    counter: 0,
    time: 0,
    name: '',
    gameCardsOrder: [],
    guessed: [],
    choosed: [],
  };

  componentWillMount() {
    this.setCardsHandler();
  }

  setCardsHandler = () => {
    const cards = COLORS.sort(function () {
      return .5 - Math.random();
    });
    this.setState({
      gameCardsOrder: cards
    });
  }

  counter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  runTimmer = () => {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  compare = () => {
    if (this.state.choosed[0].color === this.state.choosed[1].color) {
      const updateGuessed = [...this.state.guessed];
      updateGuessed.push(...this.state.choosed)
      this.setState({
        choosed: [],
        guessed: updateGuessed
      });
    } else {
      this.setCardsHandler({
        choosed: [],
      })
    }
  }

  onClickHandler = (color, no) => {
    this.counter()
    if (this.state.time === 0) {
      // this.runTimmer();
    }

    let choosedCards = [...this.state.choosed];
    choosedCards.push({
      number: no,
      color: color
    });
    this.setState({
      choosed: choosedCards
    });
    console.log(this.state.choosed)

    if (this.state.choosed.length === 2) {
      this.compare();
    }
  }

  render() {
    console.log(this.state.guessed, this.state.choosed)
    return (
      <div>
        <span>Moves: {this.state.counter}  </span>
        <span>Time: {this.state.time} s</span>
        <GameField
          clicked={this.onClickHandler}
          colors={this.state.gameCardsOrder} />
      </div>
    );
  }
}

export default GameEngine;