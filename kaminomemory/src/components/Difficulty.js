import React from "react";
import "./Difficulty.css";
import { options } from "../utils/GameConfig";


const Difficulty = ({ currentDifficulty, onDifficultyChange }) => (
  <div className="difficulty-selector" role="radiogroup" aria-label="Select difficulty level">
    <span className="difficulty-label">Difficulty:</span>
    {options.map((level) => (
      <button
        key={level.id}
        className={`difficulty-btn ${currentDifficulty.id === level.id ? 'active' : ''}`}
        onClick={() => onDifficultyChange(level)}
        role="radio"
        aria-checked={currentDifficulty.id === level.id}
        aria-label={`${level.name} difficulty: ${level.rows} by ${level.cols} grid`}
      >
        {level.name}
      </button>
    ))}
  </div>
);

export default Difficulty;
