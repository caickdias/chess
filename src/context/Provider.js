import { useState } from 'react';

import AppContext from './Context';

import { king, bishop, rook, queen, knight, pawn } from '../data/pieces';

const initialBoard = [
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
];

const initialWhitePieces = [
    { type: { ...pawn }, x: 6, y: 0, side: 'white'},
    { type: { ...pawn }, x: 6, y: 1, side: 'white'},
    { type: { ...pawn }, x: 6, y: 2, side: 'white'},
    { type: { ...pawn }, x: 6, y: 3, side: 'white'},
    { type: { ...pawn }, x: 6, y: 4, side: 'white'},
    { type: { ...pawn }, x: 6, y: 5, side: 'white'},
    { type: { ...pawn }, x: 6, y: 6, side: 'white'},    
    { type: { ...pawn }, x: 6, y: 7, side: 'white'},
    { type: { ...rook }, x: 7, y: 0, side: 'white'},
    { type: { ...knight }, x: 7, y: 1, side: 'white'},
    { type: { ...bishop }, x: 7, y: 2, side: 'white'},
    { type: { ...queen }, x: 7, y: 3, side: 'white'},
    { type: { ...king }, x: 7, y: 4, side: 'white'},
    { type: { ...bishop }, x: 7, y: 5, side: 'white'},
    { type: { ...knight }, x: 7, y: 6, side: 'white'},
    { type: { ...rook }, x: 7, y: 7, side: 'white'},
];

const initialBlackPieces = [
    { type: { ...pawn }, x: 1, y: 0, side: 'black'},
    { type: { ...pawn }, x: 1, y: 1, side: 'black'},
    { type: { ...pawn }, x: 1, y: 2, side: 'black'},
    { type: { ...pawn }, x: 1, y: 3, side: 'black'},
    { type: { ...pawn }, x: 1, y: 4, side: 'black'},
    { type: { ...pawn }, x: 1, y: 5, side: 'black'},
    { type: { ...pawn }, x: 1, y: 6, side: 'black'},    
    { type: { ...pawn }, x: 1, y: 7, side: 'black'},
    { type: { ...rook }, x: 0, y: 0, side: 'black'},
    { type: { ...knight }, x: 0, y: 1, side: 'black'},
    { type: { ...bishop }, x: 0, y: 2, side: 'black'},
    { type: { ...queen }, x: 0, y: 3, side: 'black'},
    { type: { ...king }, x: 0, y: 4, side: 'black'},
    { type: { ...bishop }, x: 0, y: 5, side: 'black'},
    { type: { ...knight }, x: 0, y: 6, side: 'black'},
    { type: { ...rook }, x: 0, y: 7, side: 'black'},
];

export const AppProvider = ({ children }) => {

    const [board, setBoard] = useState(initialBoard);
    const [selectedSquare, setSelectedSquare] = useState('');
    const [highlightedSquares, setHighlightedSquares] = useState([])
    const [whitePieces, setWhitePieces] = useState(initialWhitePieces);
    const [blackPieces, setBlackPieces] = useState(initialBlackPieces);

    return(
        <AppContext.Provider value={{ board, setBoard, selectedSquare, setSelectedSquare, whitePieces, setWhitePieces, blackPieces, setBlackPieces }}>
            {children}
        </AppContext.Provider>
    )
}

