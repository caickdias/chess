import React from 'react'

import Highlight from './Highlight';

const Square = ({ x, y, item, selected=false, onClickSquare, highlight=false }) => {
    
    const { piece } = item;
    const isLight = (x + y) % 2 === 0;
    const Piece = piece?.type?.type?.type;    
    const moveset = piece?.type?.moveset;

    return (
        <button        
            style={{ 
                ...(isLight ? styles.light : styles.dark), 
                ...(selected===true && {backgroundColor: 'yellow', opacity: 0.4}) 
            }}
            onClick={() => onClickSquare(x, y, piece || {})}
        >
            <div style={styles.piece}>
            {
                Piece && <Piece black={piece.side==='black'} />
            }        
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