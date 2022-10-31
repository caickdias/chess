import { useContext, useEffect } from 'react';

import './App.css';
import AppContext from './context/Context';

import Square from '../src/components/Square';

function App() {

  const { board, setBoard, selectedSquare, setSelectedSquare, highlightedSquares, setHighlightedSquares, whitePieces, blackPieces } = useContext(AppContext);

  useEffect(() => {
    let currentBoard = [...board];
    whitePieces.forEach(piece => currentBoard[piece.y][piece.x].piece = piece);
    blackPieces.forEach(piece => currentBoard[piece.y][piece.x].piece = piece);
    setBoard(currentBoard);
  }, []);

  const handleOnClickSquare = (x, y, moveset) => {
    selectedSquare === `${x}${y}` ? setSelectedSquare('') : setSelectedSquare(`${x}${y}`);
    let highlight = moveset.map(move => `${move[0] + x}${move[1] + y}`);
    console.log(moveset)
    setHighlightedSquares(highlight || [])
  }

  useEffect(() => {
    console.log(highlightedSquares);
  }, [ highlightedSquares])

  return (
    <div className='container' style={styles.container}>      
      {
        board.map((row, y) => (
          <div style={styles.row} key={y}>
          {
            row.map((item, x) => {
              return <Square 
                  index={x + y} 
                  item={item} 
                  key={`${x}${y}`} 
                  onClickSquare={handleOnClickSquare} 
                  highlight={highlightedSquares.includes(`${x}${y}`)}
                  selected={`${x}${y}` === selectedSquare}
                />
            })
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
