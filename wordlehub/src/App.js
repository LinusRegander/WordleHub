import './App.css';
import './Grid';
import GridBoard from './Grid';
import Keyboard from './Keyboard';
import useKeyboard from './UseKeyboard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const { input, handleKeyPress } = useKeyboard();

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