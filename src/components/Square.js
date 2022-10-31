import React from 'react'

import Highlight from './Highlight';

const Square = ({ index, item, selected=false, onClickSquare }) => {
    
    const { piece, highlight } = item;
    const Piece = piece?.type?.type;

  return (
    <button        
        style={index % 2 === 0 ? styles.light : styles.dark}
        onClick={() => onClickSquare(piece.x, piece.y)}
    >
        <div style={styles.piece}>
        {
          Piece && <Piece black={piece.side==='black'} />
        }  
        {
            selected && <p>ad</p>
        }
        </div>
        <div style={styles.highlight}>
        {
            highlight !== 'none' ?? <Highlight />            
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
        opacity: 0.6,
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