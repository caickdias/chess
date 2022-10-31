import React from 'react'

import Highlight from './Highlight';

const Square = ({ index, item, selected=false, onClickSquare, highlight=false }) => {
    
    const { piece } = item;
    const Piece = piece?.type?.type?.type;    
    const moveset = piece?.type?.moveset;

  return (
    <button        
        style={index % 2 === 0 ? styles.light : styles.dark}
        onClick={() => piece && onClickSquare(piece.x, piece.y, moveset)}
    >
        <div style={styles.piece}>
        {
          Piece && <Piece black={piece.side==='black'} />
        }
        
        <span>{piece?.x}</span>
        
        </div>
        <div style={styles.highlight}>
        {
            highlight === true && <Highlight />            
        }    
        </div>
    </button>
  )
}

const styles = {
    dark: {
        position: 'relative',
        width: 60,
        height: 60,
        backgroundColor: '#631616',
        borderWidth: 0,
    },
    light: {
        position: 'relative',
        width: 60,
        height: 60,
        backgroundColor: '#bc8f8f',
        borderWidth: 0,
    },
    highlight: {
        position: 'absolute',
        width: 60,
        height: 60,
        top: 0,
        right: 0,        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    piece: {
        position: 'absolute',
        width: 60,
        height: 60,
        top: 0,
        right: 0,        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',        
    }

}

export default Square