import React, { useState } from 'react';
import './Difficulty.css';

const options = [
  { label: 'Easy (2x2)', value: 'easy' },
  { label: 'Medium (4x4)', value: 'medium' },
  { label: 'Hard (6x6)', value: 'hard' },
];

export default function DifficultyDropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[1]); // Default: Medium

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option.value);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selected.label}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={`dropdown-item ${selected.value === option.value ? 'selected' : ''}`}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
