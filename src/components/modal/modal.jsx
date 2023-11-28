import React, { useState } from "react";
import "./modal.scss";

export default function Modal() {
  const [modal, setModal, isOpen, onClose, sections] = useState(false);

  // TODO: Add sections so were not getting error 'Cannot read properties of undefined'

  const [currentSection, setCurrentSection] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prevSection) => prevSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection((prevSection) => prevSection - 1);
    }
  };

  const handleInputChange = (sectionIndex, questionIndex, value) => {
    console.log(
      `Section ${sectionIndex + 1}, Question ${questionIndex + 1}: ${value} `
    );
  };



  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        open
      </button>
      {modal && (
        <div className={`modal ${isOpen ? "open" : "closed"}`}>
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>{sections[currentSection].title}</h2> // error
            {
              sections[
                currentSection.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="question">
                    <label>
                      {question.text}
                      <input
                        type={question.type || "text"}
                        value={question.response || ""}
                        onChange={(e) =>
                          handleInputChange(
                            currentSection,
                            questionIndex,
                            e.target.value
                          )
                        }
                      />
                    </label>
                  </div>
                ))
              ]
            }
            <button onClick={toggleModal} className="close-modal">
              close
            </button>
            <button onClick={handlePrev} disabled={currentSection === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentSection === sections.length - 1}
            >
              Next
            </button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
