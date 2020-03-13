import React from 'react';

import WorldCup from './components/WorldCup'
import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleDark = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <div id="App">
      <h2>Women's World Cup Player Interest Rank</h2>
      <button id="darkify" onClick={toggleDark}>Darkify</button>
      <WorldCup />
    </div>
  );
}

export default App;
