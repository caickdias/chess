import React from 'react'
import { NavLink } from 'react-router-dom'

const RoomCard = () => {
  return (
    <div>
      <p>ROOM #1</p>
      <NavLink to='/game'>
        JOIN
      </NavLink>
    </div>
  )
}

export default RoomCard