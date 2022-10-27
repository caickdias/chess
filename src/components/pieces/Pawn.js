import React from 'react'

import { ReactComponent as WhitePawn } from '../../assets/pieces/white/pawn.svg';
import { ReactComponent as BlackPawn } from '../../assets/pieces/black/pawn.svg';

const Pawn = ({ black=false }) => {        

  return (
    <div>
        { black ? <BlackPawn /> : <WhitePawn /> }
    </div>
  )
}

export default Pawn