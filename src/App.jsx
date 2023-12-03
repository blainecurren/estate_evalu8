import React, { useState } from "react";

// TODO: Change answerOptions to input based responses
export default function App() {
  const questions = [
    {
      questionText: "How many bedrooms?",
      response: "",
    },
    {
      questionText: "How many bathrooms?",
      response: "",
    },
    {
      questionText: "Square Footage?",
      response: "",
    },
    {
      questionText: "Rent per unit",
      response: "",
    },
    {
      questionText: "How many vacancies",
      response: "",
    },
    {
      questionText: "List any other income",
      response: "",
    },
    {
      questionText: "Estimated Repairs & Maintenance Cost",
      response: "",
    },
    {
      questionText: "Estimated Utilities",
      response: "",
    },
    {
      questionText: "Estimated Taxes",
      response: "",
    },
    {
      questionText: "Estimated Insurance",
      response: "",
    },
    {
      questionText: "Replacement Reserve",
      response: "",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handleInputChange = (event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].response = event.target.value;
  };

  const handleSubmit = () => {}

  return (
    <div className="app">
      <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer-section">
          <input
            type="text"
            value={questions[currentQuestion].response}
            onChange={handleInputChange}
          />
          <button>Previous</button>
          <button onClick={handleAnswerOptionClick}>Next</button>
          <button type="submit">Submit</button>
        </div>
      </>
    </div>
  );
}
