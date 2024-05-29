import { useState, useEffect } from 'react';

const useKeyboard = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;
      setInput((prevInput) => {
        if (key === 'Backspace') {
          return prevInput.slice(0, -1);
        } else if (key === 'Enter') {
          return ""; // Run test to see if it matches the word, and move to next row
        } else if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
          // Only allow letters
          return prevInput + key.toUpperCase();
        }
        return prevInput; // Return the previous input if no valid key is pressed
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyPress = (key) => {
    setInput((prevInput) => {
      if (/^[a-zA-Z]$/.test(key)) {
        return prevInput + key;
      }
      return prevInput; // Return the previous input if no valid key is pressed
    });
  };

  return { input, handleKeyPress };
};

export default useKeyboard;