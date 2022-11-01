import './App.css';

import Game from './components/pages/Game';
import RoomCard from './components/RoomCard';

function App() {

  return(
    <div className='container' style={styles.container}>
      <div style={styles.navbar}>
        <h2>ROOMS</h2>
      </div>

      <div style={styles.roomsContainer}>
        <RoomCard />
      </div>
    </div>
  )
  
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',    
    flex: 1,
    width: '100%',    
    backgroundColor: '#bc8f8f',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    color: 'white',
    backgroundColor: '#631616',    
  },
  roomsContainer: {
    display: 'flex',
    flex: 1,    
    paddingLeft: 20,
    paddingRight: 20,
  }
}

export default App;
