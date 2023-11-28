import React, { useState } from "react";
import "./modal.scss";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
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
