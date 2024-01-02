import { useState } from "react";
import "./reactSlider.scss";

export default function ReactSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Bedrooms",
      question: "How many bedrooms?",
    },

    {
      id: "2",
      title: "Bathrooms",
      question: "How many bathrooms?",
    },

    {
      id: "3",
      title: "Sq. Ft.",
      question: "What is the square footage?",
    },
    {
      id: "4",
      title: "Rent",
      question: "What is the rent?",
    },
    {
      id: "5",
      title: "Vacancies",
      question: "How many vacancies if any?",
    },
    {
      id: "6",
      title: "Repairs",
      question: "What is the estimated cost of repairs?",
    },
    {
      id: "7",
      title: "Utilities",
      question: "Estimated cost of monthly utilities?",
    },
    {
      id: "8",
      title: "Taxes",
      question: "What are the estimated taxes?",
    },
    {
      id: "9",
      title: "Insurance",
      question: "What is the estimated insurance?",
    },
    {
      id: "10",
      title: "Replacement Reserve",
      question: "What is your replacement reserve?",
    },
  ];

  // const handleClick = (way) => {
  //   way === "left"
  //     ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
  //     : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const [answer, setAnswer] = useState("");

  return (
    <div className="works">
      <div
        className="slider"
        style={{ transform: `translate(-${currentSlide * 100}vw)` }}
      >
        {" "}
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                </div>
              </div>
              <div className="right">
                <div className="rightContainer">
                  <form>
                    <p>{d.question}</p>
                    <input
                      type="text"
                      className="input"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                    <button className="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      /> */}
    </div>
  );
}
