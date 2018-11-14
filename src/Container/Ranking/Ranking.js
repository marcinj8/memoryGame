import React, { Component } from 'react';
import axios from 'axios';

import './Ranking.css';

class Ranking extends Component {
  state = {
    ranking: null
  };

  componentWillMount() {
    axios.get('https://memory-game-c413d.firebaseio.com/scores.json')
      .then(res => this.setRanking(res.data));
  }

  compare(a,b) {
    if (a.score < b.score)
      return -1;
    if (a.score > b.score)
      return 1;
    return 0;
  }

  sortResults = data => {
    const sortedResults = data.sort(this.compare).reverse().slice(0,10);
    this.setState({
      ranking: sortedResults
    })
  }

  setRanking = data => {
    let updateRanking = [];
    for (let key in data) {
        updateRanking.push({
          key: key,
          score: data[key].points,
          clicks: data[key].clicks,
          time: data[key].time,
          name: data[key].name
        });
     this.sortResults(updateRanking)
    }
  }

  render() {
    let ranking = 'loading...';
    if (this.state.ranking) {
      ranking = this.state.ranking.map((position, index) => (
        <div className='ranking__position' key={position.key}>
          <h3>{index+1}. {position.name}</h3>
          <div>Points: {position.score}</div>
          <div>Win after {position.clicks} clicks in {position.time} seconds.</div>
        </div>
      ));
    }

    return (
      <div>
        <h2>TOP 10</h2>
        {ranking}
      </div>
    )
  }
}

export default Ranking;