import React, { useState } from 'react';
import { FaDiscord, FaChessBishop } from 'react-icons/fa';
import { TbLetterW } from 'react-icons/tb';
import './CircleSelector.css';

const CircleSelector = (props) => {
  const handleClick = (value) => {
    props.setSelected(value);
  };

  const circleClass = (value) => {
    return props.selected === value ? 'circle selected' : 'circle';
  };

  const iconClass = (value) => {
    return props.selected === value ? 'discord-icon selected' : 'discord-icon';
  };

  return (
    <div className="circle-container">
      <div className="circle-wrapper">
        <div className={circleClass('Discord Bot')} onClick={() => handleClick('Discord Bot')}>
          <FaDiscord className={iconClass('Discord Bot')} />
        </div>
        <div className={circleClass('Wordle Bot')} onClick={() => handleClick('Wordle Bot')}>
          <TbLetterW className={iconClass('Wordle Bot')} />
        </div>
        <div className={circleClass('Chess Bot')} onClick={() => handleClick('Chess Bot')}>
          <FaChessBishop className={iconClass('Chess Bot')} />
        </div>
      </div>
      <div className="line">
        <div className={`line-section ${props.selected === 'Discord Bot' ? 'selected' : ''}`} />
        <div className={`line-section ${props.selected === 'Wordle Bot' ? 'selected' : ''}`} />
        <div className={`line-section ${props.selected === 'Chess Bot' ? 'selected' : ''}`} />
      </div>
      <div className="circle-labels">
          <span>Discord Bot</span>
          <span>Wordle Bot</span>
          <span>Chess Bot</span>
      </div>
    </div>
  );
};

export default CircleSelector;
