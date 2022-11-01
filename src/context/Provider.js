import { useState } from 'react';

import AppContext from './Context';

import { king, bishop, rook, queen, knight, pawn } from '../data/pieces';

const initialBoard = [
    [{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false }],
    [{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false }],
    [{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false }],
    [{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false }],
    [{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false }],
    [{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false }],
    [{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false }],
    [{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false },{piece: null, highlight: false }],
];

const initialWhitePieces = [
    { type: { ...pawn }, id: '06', x: 0, y: 6, side: 'white'},
    { type: { ...pawn }, id: '16', x: 1, y: 6, side: 'white'},
    { type: { ...pawn }, id: '26', x: 2, y: 6, side: 'white'},
    { type: { ...pawn }, id: '36', x: 3, y: 6, side: 'white'},
    { type: { ...pawn }, id: '46', x: 4, y: 6, side: 'white'},
    { type: { ...pawn }, id: '56', x: 5, y: 6, side: 'white'},
    { type: { ...pawn }, id: '66', x: 6, y: 6, side: 'white'},    
    { type: { ...pawn }, id: '76', x: 7, y: 6, side: 'white'},
    { type: { ...rook }, id: '07', x: 0, y: 7, side: 'white'},
    { type: { ...knight }, id: '17', x: 1, y: 7, side: 'white'},
    { type: { ...bishop }, id: '27', x: 2, y: 7, side: 'white'},
    { type: { ...queen }, id: '37', x: 3, y: 7, side: 'white'},
    { type: { ...king }, id: '47', x: 4, y: 7, side: 'white'},
    { type: { ...bishop }, id: '57', x: 5, y: 7, side: 'white'},
    { type: { ...knight }, id: '67', x: 6, y: 7, side: 'white'},
    { type: { ...rook }, id: '77', x: 7, y: 7, side: 'white'},
];

const initialBlackPieces = [
    { type: { ...pawn }, id: '01', x: 0, y: 1, side: 'black'},
    { type: { ...pawn }, id: '11', x: 1, y: 1, side: 'black'},
    { type: { ...pawn }, id: '21', x: 2, y: 1, side: 'black'},
    { type: { ...pawn }, id: '31', x: 3, y: 1, side: 'black'},
    { type: { ...pawn }, id: '41', x: 4, y: 1, side: 'black'},
    { type: { ...pawn }, id: '51', x: 5, y: 1, side: 'black'},
    { type: { ...pawn }, id: '61', x: 6, y: 1, side: 'black'},    
    { type: { ...pawn }, id: '71', x: 7, y: 1, side: 'black'},
    { type: { ...rook }, id: '00', x: 0, y: 0, side: 'black'},
    { type: { ...knight }, id: '10', x: 1, y: 0, side: 'black'},
    { type: { ...bishop }, id: '20', x: 2, y: 0, side: 'black'},
    { type: { ...queen }, id: '30', x: 3, y: 0, side: 'black'},
    { type: { ...king }, id: '40', x: 4, y: 0, side: 'black'},
    { type: { ...bishop }, id: '50', x: 5, y: 0, side: 'black'},
    { type: { ...knight }, id: '60', x: 6, y: 0, side: 'black'},
    { type: { ...rook }, id: '70', x: 7, y: 0, side: 'black'},
];

export const AppProvider = ({ children }) => {

    const [board, setBoard] = useState(initialBoard);
    const [selectedSquare, setSelectedSquare] = useState({});
    const [highlightedSquares, setHighlightedSquares] = useState([])
    const [whitePieces, setWhitePieces] = useState(initialWhitePieces);
    const [blackPieces, setBlackPieces] = useState(initialBlackPieces);

    return(
        <AppContext.Provider value={{ 
            board, setBoard, 
            selectedSquare, setSelectedSquare, 
            highlightedSquares, setHighlightedSquares,
            whitePieces, setWhitePieces, 
            blackPieces, setBlackPieces 
            }}>
            {children}
        </AppContext.Provider>
    )
}

