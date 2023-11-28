import React, { useState } from "react";
import "./modal.scss";

export default function Modal() {
  const [modal, setModal, isOpen, onClose, sections] = useState(false);

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
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              numquam velit ipsam eaque, molestiae veniam molestias facere ipsum
              corporis aperiam illo obcaecati sapiente autem, repellat vero eos
              officia dolore. Temporibus.
            </p>
            <button onClick={toggleModal} className="close-modal">
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
