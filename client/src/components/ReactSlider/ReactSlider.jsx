import { useState } from "react";
import "./reactSlider.scss";

export default function ReactSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Bedrooms",
      question: "How many bedrooms?",
    },

    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Bathrooms",
      question: "How many bathrooms?",
    },

    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Sq. Ft.",
      question: "What is the square footage?",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Rent",
      question: "What is the rent?",
    },
    {
      id: "5",
      icon: "./assets/globe.png",
      title: "Vacancies",
      question: "How many vacancies if any?",
    },
    {
      id: "6",
      icon: "./assets/globe.png",
      title: "Repairs",
      question: "What is the estimated cost of repairs?",
    },
    {
      id: "7",
      icon: "./assets/globe.png",
      title: "Utilities",
      question: "Estimated cost of monthly utilities?",
    },
    {
      id: "8",
      icon: "./assets/globe.png",
      title: "Taxes",
      question: "What are the estimated taxes?",
    },
    {
      id: "9",
      icon: "./assets/globe.png",
      title: "Insurance",
      question: "What is the estimated insurance?",
    },
    {
      id: "10",
      icon: "./assets/globe.png",
      title: "Replacement Reserve",
      question: "What is your replacement reserve?",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(answer);
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
                  <p>{d.question}</p>
                  <form>
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
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
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
      />
    </div>
  );
}
