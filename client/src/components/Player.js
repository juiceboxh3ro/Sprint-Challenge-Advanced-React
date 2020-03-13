import React from 'react'

const Player = ({id, player}) => {
  return (
    <div className={id} id="player-card">
      <h3>{player.name}</h3>
      <p>{player.country}</p>
      <p>{player.searches}</p>
    </div>
  )
}

export default Player