import React from 'react';

import WorldCup from './components/WorldCup'
import { useDarkMode } from './hooks/useDarkMode'
import { usePuppers } from './hooks/usePuppers'

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [pupperMode, setPupperMode] = usePuppers(false);

  const toggleDark = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  const togglePupper = e => {
    e.preventDefault();
    setPupperMode(!pupperMode);
  }

  return (
    <div id="App">
      <h2>Women's World Cup Player Interest Rank</h2>
      <button id="darkify" onClick={toggleDark}>Darkify</button>
      <WorldCup />
      <div id="doggo" onClick={togglePupper}>犬</div>
    </div>
  );
}

export default App;
