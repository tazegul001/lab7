import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the color of the sky?",
    options: ["Blue", "Green", "Red", "Yellow"],
    answer: "Blue"
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      setSelectedOption('');

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsQuizCompleted(true);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz Application</h1>
        {isQuizCompleted ? (
          <div className="score-section">
            <h2>Your score: {score}/{questions.length}</h2>
          </div>
        ) : (
          <div className="question-section">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button className="next-button" onClick={handleNextQuestion}>
              Next Question
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
