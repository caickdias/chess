import { useContext, useEffect } from 'react';

import './App.css';
import AppContext from './context/Context';

import Square from '../src/components/Square';

function App() {

  const { board, setBoard, 
    selectedSquare, setSelectedSquare, 
    highlightedSquares, setHighlightedSquares, 
    whitePieces, setWhitePieces,
    blackPieces, setBlackPieces } = useContext(AppContext);

  useEffect(() => {
    let currentBoard = [...board];
    whitePieces.forEach(piece => currentBoard[piece.y][piece.x].piece = piece);
    blackPieces.forEach(piece => currentBoard[piece.y][piece.x].piece = piece);
    setBoard(currentBoard);
  }, [whitePieces, blackPieces]);

  const handleOnClickSquare = (x, y, piece) => {    
    const coord = `${x}${y}`;            
    const isTryingToMove = 
      selectedSquare.piece && 
      Object.keys(selectedSquare.piece).length > 0 &&
      selectedSquare.piece !== piece;

    if(isTryingToMove){
      let tempBoard = [...board];      
      tempBoard[selectedSquare.piece.y][selectedSquare.piece.x].piece = null;      

      if(selectedSquare.piece.side === 'white'){        
        let tempWhitePieces = whitePieces.map(piece =>{
          if(piece.id === selectedSquare.piece.id){
            return {
              ...piece,
              x,
              y
            }
          }
          return piece;
        });        
        setWhitePieces(tempWhitePieces);
      } else {
        let tempBlackPieces = blackPieces.map(piece =>{
          if(piece.id === selectedSquare.piece.id){
            return {
              ...piece,
              x,
              y
            }
          }
          return piece;
        });        
        setBlackPieces(tempBlackPieces);
      }      
      setSelectedSquare({});
      setBoard(tempBoard);
    }

    if(selectedSquare.coord === coord){
      setSelectedSquare({});
      setHighlightedSquares([]);
    } 
    else {      
      const highlight = piece?.type?.moveset.map(move => `${move[0] + x}${move[1] + y}`);      
      setSelectedSquare({coord, piece});    
      setHighlightedSquares(highlight || []);
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
                  selected={`${x}${y}` === selectedSquare.coord}
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
