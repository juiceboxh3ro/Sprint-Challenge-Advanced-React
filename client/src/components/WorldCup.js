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
        this.setState({
          players: res.data
        })
        window.localStorage.setItem('players', JSON.stringify(res.data))
      })
      .catch(err => {
        console.log('what did you do? this was supposed to be a simple call.', err)
      })
  }

  render() {
    return (
      <div id="world-cup">
        {window.localStorage.getItem('players')
        ?
        JSON.parse(window.localStorage.getItem('players')).map(i => (
          <Player id="local" key={i.id} player={i} />
        ))
        :
        this.state.players.map(i => (
          <Player id="server" key={i.id} player={i} />
        ))
        }
      </div>
    )
  }
}
