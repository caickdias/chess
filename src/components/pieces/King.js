import React from 'react'

import { ReactComponent as WhiteKing } from '../../assets/pieces/white/king.svg';
import { ReactComponent as BlackKing } from '../../assets/pieces/black/king.svg';

const King = ({ black=false }) => {

  return (
    <div>
        { black ? <BlackKing /> : <WhiteKing /> }
    </div>
  )
}

export default King