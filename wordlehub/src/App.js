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
    const response = await axios.get('https://randommer.io/api/Misc/Cultures', {
      headers: {
        'X-API-KEY': 'e275740d50ea4f7688fe1636edda32a2'
      }
    });
    return {'word': response.data[Math.floor(Math.random() * 43)].name.split(" (")[0]};
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
      <input type="text" value={input} placeholder={word.word} readOnly />
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