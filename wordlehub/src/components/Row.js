import React from 'react'

export default function Row({ solutionLength, guess, currentGuess }) {

  // Generates a specified number of empty boxes
  const generateBoxes = (solutionLength) => {
    const boxes = [];
    for (let i = 0; i < solutionLength; i++) {
      boxes.push(<div key={i}></div>);
    }
    return boxes;
  };

  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split('');

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">{letter}</div>
        ))}
        {[...Array(solutionLength - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }
  // Default empty row based on solution length
  return (
    <div className="row">
      {generateBoxes(solutionLength)}
    </div>
  );
}
