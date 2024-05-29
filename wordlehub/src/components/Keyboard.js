import React from 'react';

const keyLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  const Keyboard = ({ onKeyPress }) => {
    return (
      <div className="keyboard" style={keyboardStyle}>
        {keyLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <button
                key={key}
                className="keyboard-key"
                onClick={() => onKeyPress(key)}
                style={keyboardKeyStyle}
              >
                {key === 'Space' ? ' ' : key}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const keyboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '30%',
  };
  const keyboardKeyStyle = {
    height: '35px'
  };

export default Keyboard;