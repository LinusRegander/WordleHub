import React, { useState, useEffect } from 'react';

function getPhraseLength(length) {
  return length;
}

function createGrid(cols, rows) {
  let grid = [];
  
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(<div key={`${i}-${j}`} className="box" style={boxStyle}></div>);
    }
    grid.push(<div key={i} className="row" style={rowStyle}>{row}</div>);
  }

  return grid;
}

const GridBoard = ({ difficulty }) => {
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const length = getPhraseLength(6);
    setCols(length);
    setRows(difficulty);
  }, [difficulty]);

  return (
    <div id="grid-wrapper" style={wrapperStyle}>
      <div>
        {createGrid(cols, rows)}
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
