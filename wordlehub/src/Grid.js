import React, { useState, useEffect } from 'react';

function mapLettersInWord(word) {
  let array = [];

  for (let i = 0; i < word.length; i++) {
    array.push(word[i]);
  }

  return array;
}

function createGrid(cols, rows, word, input) {
  let wordLetters = mapLettersInWord(word);
  let grid = [];
  let chars = input.split('');
  let index = 0;

  console.log(input);
  console.log(word);
  console.log(chars);
  console.log(wordLetters);

  for (let i = 0; i < rows; i++) {
    let row = [];

    for (let j = 0; j < cols; j++) {
      let style = { ...boxStyle };

      if (index < chars.length) {
        if (wordLetters[index] === chars[index]) {
          style.backgroundColor = 'green';
        } else if (wordLetters.includes(chars[index])) {
          style.backgroundColor = 'yellow';
        } else {
          style.backgroundColor = 'red';
        }
        row.push(
          <div key={`${i}-${j}`} className="box" style={style}>
            {chars[index++]} {}
          </div>
        );
      } else {
        row.push(
          <div key={`${i}-${j}`} className="box" style={style}>
            {}
          </div>
        );
      }
    }
    grid.push(<div key={i} className="row" style={rowStyle}>{row}</div>);
  }

  return grid;
}

const GridBoard = ({ word, input}) => {
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const wordLength = word.word.length;
    setCols(wordLength);
    setRows(wordLength);
  }, [word.word.length]);

  return (
    <div id="grid-wrapper" style={wrapperStyle}>
      <div>
        {createGrid(cols, rows, word, input)}
      </div>
    </div>
  );
};

const wrapperStyle = {
  display: 'grid',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center'
};

const rowStyle = {
  display: 'flex',
  gap: '10px'
};

const boxStyle = {
  width: '50px',
  height: '50px',
  border: '2px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  backgroundColor: '#fff'
};

export default GridBoard;
