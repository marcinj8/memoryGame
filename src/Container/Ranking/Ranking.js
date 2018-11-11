import React, { Component } from 'react';
import axios from 'axios';

class Ranking extends Component {
  state = {
    ranking: null
  };

  componentWillMount() {
    axios.get('https://memory-game-c413d.firebaseio.com/scores.json')
      .then(res => this.setRanking(res.data));
  }

  setRanking = data => {
    let updateRanking = [];
    for (let key in data) {
      if(updateRanking.length <= 20){
        updateRanking.push({
          key: key,
          score: data[key].points,
          clicks: data[key].clicks,
          time: data[key].time,
        });
      };
      this.setState({
        ranking: updateRanking
      })
    }
  }

  render() {
    let ranking = 'loading...'
    if (this.state.ranking) {
      ranking = this.state.ranking.map((position, index) => (
        <div key={position.key}>
          <span>{index+1}</span>
          <h4>{position.score}</h4>
        </div>
      ))
    }
    return ranking;
  }
}

export default Ranking;