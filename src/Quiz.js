// src/components/Quiz.js
import React from 'react';
import useQuiz from '../core/useQuiz';
import Question from './Question';

const Quiz = () => {
  const {
    currentQuestion,
    score,
    showResult,
    quizData,
    handleAnswer,
    resetQuiz,
  } = useQuiz();

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score}</h2>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
