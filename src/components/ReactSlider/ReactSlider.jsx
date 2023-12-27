import { useState } from "react";
import "./reactSlider.scss";

export default function ReactSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      question:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },

    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Mobile Application",
      question:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },

    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Branding",
      question:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

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
                  <button className="submit">Submit</button>
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
