import React from 'react'

import { ReactComponent as WhiteBishop } from '../../assets/pieces/white/bishop.svg';
import { ReactComponent as BlackBishop } from '../../assets/pieces/black/bishop.svg';

const Bishop = ({ black=false }) => {

  return (
    <div>
        { black ? <BlackBishop /> : <WhiteBishop /> }
    </div>
  )
}

export default Bishop