import { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

import AppContext from '../../context/Context';

import Square from '../../../src/components/Square';

const socket = io("http://localhost:8001", {
  transports: ["websocket", "polling"]
});

function Game() {

  const { board, setBoard, 
    selectedSquare, setSelectedSquare, 
    highlightedSquares, setHighlightedSquares, 
    whitePieces, setWhitePieces,
    blackPieces, setBlackPieces } = useContext(AppContext);

  const [players, setPlayers] = useState([]);
  const username = 'test';

  useEffect(() => {
    socket.on("connect", () => {
        socket.emit("username", username);      
    });

    socket.on("users", players => {      
      setPlayers(players);      
    });

    socket.on("boardInfo", info => {
      console.log(info);
    });

    socket.on("connected", player => {
      setPlayers(players => [...players, player]);
    });

    socket.on("disconnected", id => {
      setPlayers(players => players.filter(player => player.id !== id));
    })
  }, []);

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
        let pieceIndex = whitePieces.findIndex(piece => piece.id === selectedSquare.piece.id);
        let tempWhitePieces = [...whitePieces];
        tempWhitePieces[pieceIndex].x = x;        
        tempWhitePieces[pieceIndex].y = y;        
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
      setHighlightedSquares([]);
      setBoard(tempBoard);
      return ;
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
      <div>
        {
          players.map(player => <p>{player.id}</p>)
        }
      </div>
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

export default Game;
