import React, { Component } from 'react'
import axios from 'axios'

import Player from './Player'

export default class WorldCup extends Component {

  state = {
    players: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState({
          players: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div id="world-cup">
        {this.state.players.map(i => (
          <Player key={i.id} player={i}/>
        ))}
      </div>
    )
  }
}
