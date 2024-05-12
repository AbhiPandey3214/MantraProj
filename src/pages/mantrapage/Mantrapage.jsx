import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import image1 from '../../assets/Bhagwanji.png';
import './Mantrapage.css';
import Bottom from '../../components/bottom/Bottom';
function Mantrapage() {
  const [word, setWord] = useState('');
  const [lines, setLines] = useState(Array(55).fill(''));
  const [wordCount, setWordCount] = useState(0);
  const wordPattern = "Swaminarayan";
  const [autoEnter, setAutoEnter] = useState(false);

  const handleInputChange = (e) => {
    const input = e.target.value.slice(0, 12); // Limit input to 12 characters
    const newWord = input
      .split('')
      .filter((char, index) => index < 12 && char === wordPattern[index])
      .join('');
    setWord(newWord);
    if (autoEnter && newWord === wordPattern) {
      addWordToLines();
    }
  };

  const handleEnterPress = () => {
    if (!autoEnter && word === wordPattern) {
      addWordToLines();
    }
  };

  const addWordToLines = () => {
    const newLines = [...lines];
    const lineIndex = newLines.findIndex(line => line === '');
    if (lineIndex !== -1) {
      newLines[lineIndex] = wordPattern;
      setLines(newLines);
      setWord('');
      setWordCount(wordCount + 1);
      if (lineIndex === 54) {
        setLines(Array(55).fill(''));
      }
    } else {
      setWord('');
    }
  };

  return (
    <div>
      <div>
        <Navbar />
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
              className='mantrainput'
            />
           
          </div>
          <div className='count'>Total Count {wordCount} and counting</div>
        </div>
        <label>
              <input
                type="checkbox"
                checked={autoEnter}
                onChange={() => setAutoEnter(!autoEnter)}
                className='enterCheckBox'
              />
              Skip Enter Key
            </label>
      </div>
      <div className="lines">
        {lines.map((line, index) => (
          <div key={index} className="line">
            {line}
          </div>
        ))}
      </div>
      <div>
        <Bottom></Bottom>
      </div>
    </div>
  );
}

export default Mantrapage;
