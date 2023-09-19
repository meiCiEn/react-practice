import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, onTypingComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else {
      // Typing is complete, notify the parent component
      timeout = setTimeout(() => { onTypingComplete(); }, 200);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, onTypingComplete]);

  return <span>{currentText}</span>;
};

export default Typewriter;

