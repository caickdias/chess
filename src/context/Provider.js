import { useState } from 'react';

import AppContext from './Context';

import { king, bishop, rook, queen, knight, pawn } from '../data/pieces';


export const AppProvider = ({ children }) => {
    
    const [selectedSquare, setSelectedSquare] = useState({});
    const [highlightedSquares, setHighlightedSquares] = useState([])    

    return(
        <AppContext.Provider value={{             
            selectedSquare, setSelectedSquare, 
            highlightedSquares, setHighlightedSquares, 
            }}>
            {children}
        </AppContext.Provider>
    )
}

