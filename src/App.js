import './App.css';

import Square from '../src/components/Square';

function App() {

  const board = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
  ]

  return (
    <div className="App">
      {
        board.map(row => (
          <div style={styles.row}>
          {
            row.map(item => <Square index={item} />)
          }
          </div>
        ))
      }
    </div>
  );
}

const styles = {
  row: {
    display: 'flex',    
  }
}

export default App;
