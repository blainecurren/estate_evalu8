import { useState } from "react";
import "./formInput.css";

const [currentSlide, setCurrentSlide] = useState(0);

const data = [
  {
    id: "1",
    title: "Question 1",
    text: "",
  },
  {
    id: "2",
    title: "Question 2",
    text: "",
  },
  {
    id: "3",
    title: "Question 3",
    text: "",
  },
  {
    id: "4",
    title: "Question 4",
    text: "",
  },
  {
    id: "5",
    title: "Question 5",
    text: "",
  },
  {
    id: "6",
    title: "Question 6",
    text: "",
  },
  {
    id: "7",
    title: "Question 7",
    text: "",
  },
  {
    id: "8",
    title: "Question 8",
    text: "",
  },
  {
    id: "9",
    title: "Question 9",
    text: "",
  },
];

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
