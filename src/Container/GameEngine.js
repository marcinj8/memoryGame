import React, { Component } from 'react';

import GameField from '../components/Game/GameField/GameField';
import Modal from '../UI/Modal/Modal';
import GameSummary from '../components/GameSummary/GameSummary';

const COLORS = ['red', 'blue', 'yellow', 'green', 'purple', 'turquoise', 'pink', 'olive', 'orangered', 'red', 'blue', 'yellow', 'green', 'purple', 'turquoise', 'pink', 'olive', 'orangered'];

class GameEngine extends Component {
  state = {
    counter: 0,
    time: 0,
    name: '',
    gameCardsOrder: [],
    guessed: [],
    choosed: [],
    initialShow: true,
    score: null
  };

  componentWillMount() {
    this.setCardsHandler();
    setTimeout(() => this.setState({
      initialShow: false
    }), 1500);
  }

  componentWillUpdate() {
    if (this.state.guessed.length === 18 && this.state.score === null) {
      this.endOfGame();
    }
  }

  setCardsHandler = () => {
    const cards = COLORS.sort(function () {
      return .5 - Math.random();
    });
    this.setState({
      gameCardsOrder: cards
    });
  }

  endOfGame = () => {
    const score = { clicks: this.state.counter, time: this.state.time };
    this.setState({
      score: score
    });
  }

  newGame = () => {
    this.setState({
      counter: 0,
      time: 0,
      name: '',
      gameCardsOrder: [],
      guessed: [],
      choosed: [],
      initialShow: true,
      score: null
    })
    this.setCardsHandler();
    setTimeout(() => this.setState({
      initialShow: false
    }), 1500);
  }

  counter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  timmer = () => {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  compare = (choosedCards) => {
    if (choosedCards[0].color === choosedCards[1].color) {
      const updateGuessed = [...this.state.guessed];
      updateGuessed.push(...choosedCards);
      this.setState({
        guessed: updateGuessed,
        choosed: []
      });

    } else {
      setTimeout(() => this.setState({
        choosed: [],
      }), 500);
    }
  }

  onClickHandler = (color, no) => {
    this.counter();
    if (this.state.time === 0) {
      this.timmer();
    }

    let choosedCards = [...this.state.choosed];
    choosedCards.push({
      number: no,
      color: color
    });
    this.setState({
      choosed: choosedCards
    });
    if (choosedCards.length === 2) {
      this.compare(choosedCards);
    }
  }

  render() {


    return (
      <div>
        <span>Moves: {this.state.counter}  </span>
        <span>Time: {this.state.time} {this.state.time < 2 ? 'second' : 'seconds'}</span>
        <GameField
          initialShow={this.state.initialShow}
          clicked={this.onClickHandler}
          choosed={this.state.choosed}
          guessed={this.state.guessed}
          colors={this.state.gameCardsOrder} />
        {!!this.state.score
          ? <Modal>
            <GameSummary
              clicks={this.state.score.clicks}
              time={this.state.score.time}
              clicked={this.newGame} />
          </Modal>
          : null
        }
      </div>
    );
  }
}

export default GameEngine;