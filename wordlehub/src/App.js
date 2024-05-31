import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import axios from 'axios';

async function getWord() {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/randomword', {
      headers: {
        'X-Api-Key': 'fOpHDXk7MdgK3u/q82NbjA==OPXXm8wmm8a6E66M' // <-- Enter your own api:key here
      }
    });
    return response.data.word
  } catch (error) {
    console.error('Request failed:', error);
    return null;
  }
}

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    async function fetchWord() {
      let value = await getWord();
      setSolution(value.toLowerCase());
    }
    fetchWord();
  }, []);

  return (
    <div className="App">
      <h1>WordleHub</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App

