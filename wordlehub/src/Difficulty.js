import React, { useState } from 'react';

const Difficulty = ({ onDifficultyChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue === '' || /^\d+$/.test(newValue)) {
      setValue(newValue);
      if (onDifficultyChange) {
        onDifficultyChange(Number(newValue));
      }
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Välj antal försök"
      style = {inputStyle}
    />
  );
};

const inputStyle = {
    width: '200px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
};

export default Difficulty;
