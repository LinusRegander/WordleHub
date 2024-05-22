import React from 'react';

const keyLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['Backspace', 'Enter']
  ];

  const Keyboard = ({ onKeyPress }) => {
    return (
      <div className="keyboard">
        {keyLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <button
                key={key}
                className="keyboard-key"
                onClick={() => onKeyPress(key)}
              >
                {key === 'Space' ? ' ' : key}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  };

export default Keyboard;