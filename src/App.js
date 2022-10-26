import './App.css';

import Square from '../src/components/Square';

function App() {

  let board = [
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
    [{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'},{piece: null, highlight: 'none'}],
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
          <div style={styles.row}>
          {
            row.map((item, y) => <Square index={x + y} />)
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
