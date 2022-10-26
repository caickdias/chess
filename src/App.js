import './App.css';

import Square from '../src/components/Square';
import King from './components/pieces/King';
import { ReactComponent as Pawn } from './assets/pieces/black/pawn.svg';

function App() {

  let board = [
    [{piece: <King />, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: <Pawn />, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
  ]

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
