import React, { useState } from 'react';
import Question from './Question';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Shakespeare', 'Dickens', 'Chaucer', 'Austen'],
    answer: 'Shakespeare'
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score}</h2>
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

