import { useContext, useEffect } from 'react';

import './App.css';
import AppContext from './context/Context';

import Square from '../src/components/Square';

function App() {

  const { board, setBoard, selectedSquare, setSelectedSquare, whitePieces, blackPieces } = useContext(AppContext);

  useEffect(() => {
    let currentBoard = [...board];
    whitePieces.forEach(piece => currentBoard[piece.x][piece.y].piece = piece);
    blackPieces.forEach(piece => currentBoard[piece.x][piece.y].piece = piece);
    setBoard(currentBoard);
  }, []);

  const handleOnClickSquare = (x, y) => {
    selectedSquare === `${x}${y}` ? setSelectedSquare('') : setSelectedSquare(`${x}${y}`);
  }

  return (
    <div className='container' style={styles.container}>      
      {
        board.map((row, x) => (
          <div style={styles.row} key={x}>
          {
            row.map((item, y) => {
              return <Square 
                  index={x + y} 
                  item={item} 
                  key={`${x}${y}`} 
                  onClickSquare={handleOnClickSquare} 
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
