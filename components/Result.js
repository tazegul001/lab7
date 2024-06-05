import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h2>Your Score: {score} / {totalQuestions}</h2>
    </div>
  );
};

export default Result;
