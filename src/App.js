  
import './App.css';
import { Context } from './helpers/context';

import { useState } from 'react';
import Landing from './components/Landing';

function App() {

  const[dataLoaded, isDataLoaded] = useState(false)
  const[gameLaunched, isGameLaunched] = useState(false);
  const[gameEnd, isGameEnd] = useState(false);
  const [potions, setPotions] = useState([]);
  
  const [player1, setPlayer1] = useState({
    'dice': 0,
    'potion':{}
  });

  const [player2, setPlayer2] = useState({
    'dice': 0,
    'potion':{}
  });

  return (
    <Context.Provider value={{player1, setPlayer1, player2, setPlayer2, potions, setPotions, isGameLaunched, isDataLoaded}}>
     
          <Landing/>
          
    </Context.Provider>
  );
}

export default App;
