import './App.css';
import './components/Grid';
import GridBoard from './components/Grid';
import Keyboard from './components/Keyboard';
import useKeyboard from './components/UseKeyboard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PointSystem from './components/Points';
import { getCookie } from './utils/Cookies';

async function getWord() {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/randomword', {
      headers: {
        'X-Api-Key': 'fOpHDXk7MdgK3u/q82NbjA==OPXXm8wmm8a6E66M'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Request failed:', error);
    return null;
  }
}

function App() {
  const [word, setWord] = useState('');
  const [score, setScore] = useState(0);
  const { input, handleKeyPress } = useKeyboard();

  useEffect(() => {
    const points = getCookie('Points');
    if (points !== null) {
      setScore(parseInt(points));
    }
  }, []);

  useEffect(() => {
      async function fetchWord() {
        const value = await getWord();
        setWord(value);
      }
      fetchWord();
    }, []);

  return (
    <div style={wrapper}>
      {word && <GridBoard word={word} input={input} />}
      <PointSystem score={score} />
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