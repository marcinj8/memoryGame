import React, { Component } from 'react';
import axios from 'axios';

import GameField from '../components/Game/GameField/GameField';
import Modal from '../UI/Modal/Modal';
import GameSummary from '../components/GameSummary/GameSummary';
import StartGameForm from '../UI/StartGameFrom/StartGameForm';

const COLORS = ['red', 'blue', 'yellow', 'green', 'purple', 'turquoise', 'pink', 'olive', 'silver', 'red', 'blue', 'yellow', 'green', 'purple', 'turquoise', 'pink', 'olive', 'silver'];

class GameEngine extends Component {
  state = {
    counter: 0,
    time: 0,
    startTime: 0,
    currentTime: 0,
    name: '',
    points: 0,
    gameCardsOrder: [],
    guessed: [],
    choosed: [],
    showStartModal: false,
    initialShow: true,
    score: null
  };

  startTimmer = '';
  componentWillMount() {
    this.setNewGame();
  }

  componentWillUnmount() {
    clearInterval(this.startTimmer);
  }

  initialShowCards = () => {
    this.setState({
      initialShow: false
    });
  }

  setCardsHandler = () => {
    const cards = COLORS.sort(function () {
      return .5 - Math.random();
    });
    this.setState({
      gameCardsOrder: cards,
      showStartModal: false,
    });
    setInterval(this.initialShowCards, 1500);
  }

  setNewGame = () => {
    this.setState({
      playerName: '',
      showStartModal: true
    });
  }

  saveScore = (score) => {
    axios.post('https://memory-game-c413d.firebaseio.com/scores.json', score);
  }

  endOfGame = () => {
    const score = { name: this.state.playerName, clicks: this.state.counter, time: this.state.time, points: Math.round(1000 - this.state.time * 5 - this.state.counter * 3) };
    clearInterval(this.startTimmer);
    this.saveScore(score);
    this.setState({
      score: score
    });
  }

  newGame = () => {
    this.setState({
      counter: 0,
      startTime: 0,
      currentTime: 0,
      time: 0,
      gameCardsOrder: [],
      guessed: [],
      choosed: [],
      initialShow: true,
      score: null
    });
    clearInterval(this.startTimmer);
    this.setCardsHandler();
  }

  counter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  timmer = () => {
    const currentTime = new Date().getTime();
    const gameDuration = Math.round((currentTime - this.state.startTime) / 1000);
    this.setState({ time: gameDuration });
  }

  compare = (choosedCards) => {
    if (choosedCards[0].color === choosedCards[1].color) {
      const updateGuessed = [...this.state.guessed];
      updateGuessed.push(...choosedCards);
      this.setState({
        guessed: updateGuessed,
        choosed: []
      });
      if (updateGuessed.length === 18 && this.state.score === null) {
        this.endOfGame();
      }
    } else {
      setTimeout(() => this.setState({
        choosed: [],
      }), 500);
    }
  }

  setStartTime = () => {
    const startTime = new Date().getTime();
    this.setState({
      startTime: startTime,
      currentTime: startTime
    })
    this.startTimmer = setInterval(this.timmer, 1000);

  }

  onClickHandler = (color, no) => {
    this.counter();
    if (this.state.time === 0 && this.state.startTime === 0) {
      console.log('zero')
      this.setStartTime();
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

  setPlayerNameHandler = event => {
    const playerName = event.target.value;
    this.setState({
      playerName: playerName
    })
  }

  render() {

    return (
      <div>
        <h3>Hello {this.state.playerName}</h3>
        <span>Moves: {this.state.counter}  </span>
        <span>Time: {this.state.time} {this.state.time < 2 ? 'second' : 'seconds'}</span>
        <GameField
          blockChoosing={this.state.choosed.length === 2}
          initialShow={this.state.initialShow}
          clicked={this.onClickHandler}
          choosed={this.state.choosed}
          guessed={this.state.guessed}
          colors={this.state.gameCardsOrder} />
        {!!this.state.score
          ? <Modal show>
            <GameSummary
              clicks={this.state.score.clicks}
              time={this.state.score.time}
              points={this.state.score.points}
              clicked={this.newGame} />
          </Modal>
          : null
        }
        <Modal show={this.state.showStartModal}>
          <StartGameForm
            activateButton={this.state.playerName !== undefined && this.state.playerName.length > 2 ? true : false}
            changedInput={this.setPlayerNameHandler}
            clicked={this.setCardsHandler} />
        </Modal>
      </div>
    );
  }
}

export default GameEngine;