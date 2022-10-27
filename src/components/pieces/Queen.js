import React from 'react'

import { ReactComponent as WhiteQueen } from '../../assets/pieces/white/queen.svg';
import { ReactComponent as BlackQueen } from '../../assets/pieces/black/queen.svg';

const Queen = ({ black=false }) => {
  
  return (
    <div>
        { black ? <BlackQueen /> : <WhiteQueen /> }
    </div>
  )
}

export default Queen