import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import image1 from '../homepage/Bhagwanji.png'
import './Mantrapage.css';

function Mantrapage() {
 
  const [word, setWord] = useState('');
  const [lines, setLines] = useState(Array(55).fill(''));
  const [wordCount, setWordCount] = useState(0);
  const wordPattern = "Swaminarayan";
  const [autoEnter, setAutoEnter] = useState(false);

  const handleInputChange = (e) => {
    const input = e.target.value.slice(0, 12); // Limit input to 6 characters
    const newWord = input
      .split('')
      .filter((char, index) => index < 12 && char === wordPattern[index])
      .join('');
    setWord(newWord);
    if (autoEnter && newWord === wordPattern) {
      handleEnterPress();
    }

  };



  const handleEnterPress = () => {
    if (word === wordPattern) {
      const newLines = [...lines];
      const lineIndex = newLines.findIndex(line => line === '');
      if (lineIndex !== -1) {
        newLines[lineIndex] = word;
        setLines(newLines);
        setWord('');
        setWordCount(wordCount + 1);
        if (lineIndex === 54) {
          // Reset lines when all lines are filled
          setLines(Array(55).fill(''));
        }
      }
    }
    else {
      setWord('')
    }
  };
  return (
    <div >
      <div>
      <Navbar></Navbar>
      </div>
      <div className='main'>
        <img src={image1} alt='iMAGE' className='image' />
        <div className='sub_main'>
          <div className="box">
            <input
              type="text"
              value={word}
              onChange={handleInputChange}
              onKeyDown={(e) => { if (e.key === 'Enter') handleEnterPress(); }}
              placeholder="Swaminarayan"
            />
            
          </div>
          <div className='count'>Total Count {wordCount} and counting</div>

        </div>
      </div>
      <div className="lines">
        {lines.map((line, index) => (
          <div key={index} className="line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mantrapage;
