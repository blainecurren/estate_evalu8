import "./style.css";
import { useState } from "react";
import usePasswordGenerator from "./hooks/use-password-generator";

export default function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    {
      title: "Include Uppercase Letters",
      state: false,
    },
    {
      title: "Include Lowercase Letters",
      state: false,
    },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include Symbols",
      state: false,
    },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedCheckboxData = [...checkboxData];
    checkboxData[index].state = !checkboxData[index].state;
    setCheckboxData(updatedCheckboxData);
  };

  const {} = usePasswordGenerator();

  return (
    <div className="container">
      {/* Password text and Copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={() => {}}>
            Copy
          </button>
        </div>
      )}
      {/* Character Length */}
      <div className="charLength">
        <span>
          <label>{length}</label>
          <label>4</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
      </div>
      {/* checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={checkbox.state}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      {/* strength */}

      {/*Generate Button */}
      <button className="generateBtn" onClick={() => {}}>
        Generate Password
      </button>
    </div>
  );
}
