import React, { useState } from 'react';
import './CircleSelector.css';

const CircleSelector = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value) => {
    setSelected(value);
  };

  const circleClass = (value) => {
    return selected === value ? 'circle selected' : 'circle';
  };

  return (
    <div className="container">
      <div className="circle-wrapper">
        <div className={circleClass('Discord Bot')} onClick={() => handleClick('Discord Bot')}>
          <span>Discord Bot</span>
        </div>
        <div className={circleClass('Wordle Bot')} onClick={() => handleClick('Wordle Bot')}>
          <span>Wordle Bot</span>
        </div>
        <div className={circleClass('Chess Bot')} onClick={() => handleClick('Chess Bot')}>
          <span>Chess Bot</span>
        </div>
      </div>
      <div className="line">
        <div className={`line-section ${selected === 'Discord Bot' ? 'selected' : ''}`} />
        <div className={`line-section ${selected === 'Wordle Bot' ? 'selected' : ''}`} />
        <div className={`line-section ${selected === 'Chess Bot' ? 'selected' : ''}`} />
      </div>
    </div>
  );
};

export default CircleSelector;
