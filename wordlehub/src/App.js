import './App.css';
import './Grid';
import GridBoard from './Grid';
import Difficulty from './Difficulty';
import Keyboard from './Keyboard';
import useKeyboard from './UseKeyboard';
import React, { useState } from 'react';

function App() {
  
  const [difficulty, setDifficulty] = useState(5);
  const {input, handleKeyPress} = useKeyboard();


  return (
    <div style={wrapper}>
      <Difficulty onDifficultyChange={setDifficulty} />
      <GridBoard difficulty={difficulty} />
      <input type="text" value={input} readOnly />
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif'
};

export default App;
