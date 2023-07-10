import "./style.css";

export default function App() {
  const checkBoxData = [
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
  ];

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
          <label>Character Length</label>
          <label>4</label>
        </span>
        <input type="range" min="4" max="20" onClick={() => {}}></input>
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
