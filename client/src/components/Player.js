import React from 'react'

const Player = ({player}) => {
  console.log(player)

  return (
    <div id="player-card">
      <h3>{player.name}</h3>
      <p>{player.country}</p>
      <p>{player.searches}</p>
    </div>
  )
}

export default Player