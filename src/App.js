import { useState, useEffect } from 'react';

import './App.css';

import Square from '../src/components/Square';

import King from './components/pieces/King';
import Queen from './components/pieces/Queen';
import Bishop from './components/pieces/Bishop';
import Knight from './components/pieces/Knight';
import Rook from './components/pieces/Rook';
import Pawn from './components/pieces/Pawn';


function App() {

  const [board, setBoard] = useState([]);

  let initialBoard = [
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
  ];

  let whitePieces = [
    { type: <Pawn />, x: 6, y: 0, side: 'white'},
    { type: <Pawn />, x: 6, y: 1, side: 'white'},
    { type: <Pawn />, x: 6, y: 2, side: 'white'},
    { type: <Pawn />, x: 6, y: 3, side: 'white'},
    { type: <Pawn />, x: 6, y: 4, side: 'white'},
    { type: <Pawn />, x: 6, y: 5, side: 'white'},
    { type: <Pawn />, x: 6, y: 6, side: 'white'},    
    { type: <Pawn />, x: 6, y: 7, side: 'white'},
    { type: <Rook />, x: 7, y: 0, side: 'white'},
    { type: <Knight />, x: 7, y: 1, side: 'white'},
    { type: <Bishop />, x: 7, y: 2, side: 'white'},
    { type: <Queen />, x: 7, y: 3, side: 'white'},
    { type: <King />, x: 7, y: 4, side: 'white'},
    { type: <Bishop />, x: 7, y: 5, side: 'white'},
    { type: <Knight />, x: 7, y: 6, side: 'white'},
    { type: <Rook />, x: 7, y: 7, side: 'white'},
  ];

  let blackPieces = [
    { type: <Pawn />, x: 1, y: 0, side: 'black'},
    { type: <Pawn />, x: 1, y: 1, side: 'black'},
    { type: <Pawn />, x: 1, y: 2, side: 'black'},
    { type: <Pawn />, x: 1, y: 3, side: 'black'},
    { type: <Pawn />, x: 1, y: 4, side: 'black'},
    { type: <Pawn />, x: 1, y: 5, side: 'black'},
    { type: <Pawn />, x: 1, y: 6, side: 'black'},    
    { type: <Pawn />, x: 1, y: 7, side: 'black'},
    { type: <Rook />, x: 0, y: 0, side: 'black'},
    { type: <Knight />, x: 0, y: 1, side: 'black'},
    { type: <Bishop />, x: 0, y: 2, side: 'black'},
    { type: <Queen />, x: 0, y: 3, side: 'black'},
    { type: <King />, x: 0, y: 4, side: 'black'},
    { type: <Bishop />, x: 0, y: 5, side: 'black'},
    { type: <Knight />, x: 0, y: 6, side: 'black'},
    { type: <Rook />, x: 0, y: 7, side: 'black'},
  ];

  useEffect(() => {
    whitePieces.forEach(piece => initialBoard[piece.x][piece.y].piece = piece);
    blackPieces.forEach(piece => initialBoard[piece.x][piece.y].piece = piece);
    setBoard(initialBoard);
  }, []);


  return (
    <div className='container' style={styles.container}>
      {
        board.map((row, x) => (
          <div style={styles.row} key={x}>
          {
            row.map((item, y) => <Square index={x + y} item={item} key={`${x, y}`} />)
          }
          </div>
        ))
      }
    </div>
  );
}

const styles = {
  container: {        
    display: 'flex',
    backgroundColor: 'lightGray',        
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  row: {
    display: 'flex',       
  }
}

export default App;
