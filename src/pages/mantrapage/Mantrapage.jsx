import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
import './Mantrapage.css';

function Mantrapage() {
 
  const [occurrences, setOccurrences] = useState([]);
  const [skipEnter, setSkipEnter] = useState(false);
  const cellsPerRow = 9;
  const maxRows = 11; 

  const handleInputChange = (event) => {
    const text = event.target.value;
    if (text.endsWith('Swaminarayan')) {
      const newOccurrences = [...occurrences, 'Swaminarayan'];
      setOccurrences(newOccurrences);
    
      
      if (newOccurrences.length > cellsPerRow * maxRows) {
        setOccurrences(newOccurrences.slice(-cellsPerRow * maxRows));
      }

      event.target.value = ''; 
    }
  };

  const handleSkipEnterChange = () => {
    setSkipEnter(!skipEnter);
  };

  return (
    <div className="Mantrapage">
      
      <textarea
        rows={10}
        cols={50}
        onChange={handleInputChange}
        onKeyDown={(event) => skipEnter && event.key === 'Enter' && event.preventDefault()}
      />
      <div className="skip-enter-checkbox">
        <input type="checkbox" id="skipEnter" checked={skipEnter} onChange={handleSkipEnterChange} />
        <label htmlFor="skipEnter">Skip Enter</label>
      </div>
      <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
      <Table responsive>
      <thead>
        
      </thead>
      <tbody>
      {Array.from({ length: maxRows + 1 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: cellsPerRow }).map((_, cellIndex) => {
                const index = rowIndex * cellsPerRow + cellIndex;
                return (
                  <td key={index} className={`grid-cell ${index < occurrences.length ? 'filled' : ''}`}>
                    {occurrences[index]}
                  </td>
                );
              })}
            </tr>
          ))}
      </tbody>
    </Table>
    
    </div>
  );
}

export default Mantrapage;
