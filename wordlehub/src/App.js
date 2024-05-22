import './App.css';
import './Grid';
import GridBoard from './Grid';
import Difficulty from './Difficulty';
import React, { useState } from 'react';

function App() {
  const [difficulty, setDifficulty] = useState(5);

  return (
    <div style={wrapper}>
      <Difficulty onDifficultyChange={setDifficulty} />
      <GridBoard difficulty={difficulty} />
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
