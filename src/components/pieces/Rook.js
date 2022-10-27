import React from 'react'

import { ReactComponent as WhiteRook } from '../../assets/pieces/white/rook.svg';
import { ReactComponent as BlackRook } from '../../assets/pieces/black/rook.svg';

const Rook = ({ black=false }) => {

  return (
    <div>
        { black ? <BlackRook /> : <WhiteRook /> }
    </div>
  )
}

export default Rook