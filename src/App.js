import { useContext, useEffect } from 'react';

import './App.css';
import AppContext from './context/Context';

import Square from '../src/components/Square';

function App() {

  const { board, setBoard, 
    selectedSquare, setSelectedSquare, 
    highlightedSquares, setHighlightedSquares, 
    whitePieces, blackPieces } = useContext(AppContext);

  useEffect(() => {
    let currentBoard = [...board];
    whitePieces.forEach(piece => currentBoard[piece.y][piece.x].piece = piece);
    blackPieces.forEach(piece => currentBoard[piece.y][piece.x].piece = piece);
    setBoard(currentBoard);
  }, []);

  const handleOnClickSquare = (x, y, moveset) => {
    const squareIndex = `${x}${y}`;
    
    if(selectedSquare === squareIndex){
      setSelectedSquare('');
      setHighlightedSquares([]);
    } else {
      let highlight = moveset.map(move => `${move[0] + x}${move[1] + y}`);      
      setSelectedSquare(squareIndex);    
      setHighlightedSquares(highlight || [])
    }    
  }

  return (
    <div className='container' style={styles.container}>      
      {
        board.map((row, y) => (
          <div style={styles.row} key={y}>
          {
            row.map((item, x) => {
              return <Square 
                  key={`${x}${y}`} 
                  x={x}
                  y={y}
                  item={item} 
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
