import "./style.css";
import { useState } from "react";

export default function App() {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
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

  return (
    <div className="container">
      {/* Password text and Copy */}
      <div className="header">
        <div className="title">;lakjsdfl;k</div>
        <button className="copyBtn" onClick={() => {}}>
          Copy
        </button>
      </div>
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
        {checkBoxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input type="checkbox" checked={checkbox.state} />
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
