import React from 'react'

import Highlight from './Highlight';

const Square = ({ index, item }) => {
    
    console.log(item);
    const { piece, highlight } = item;
    const Piece = piece?.type;

  return (
    <button        
        style={index % 2 === 0 ? styles.light : styles.dark}
    >
        <div style={styles.piece}>
        {
          Piece && <Piece />
        }  
        </div>
        <div style={styles.highlight}>
            <Highlight />            
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