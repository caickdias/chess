import React from 'react'

import { ReactComponent as WhiteKnight } from '../../assets/pieces/white/knight.svg';
import { ReactComponent as BlackKnight } from '../../assets/pieces/black/knight.svg';

const Knight = ({ black=false }) => {

  return (
    <div>
        { black ? <BlackKnight /> : <WhiteKnight /> }
    </div>
  )
}

export default Knight