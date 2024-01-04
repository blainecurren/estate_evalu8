// TODO: Change answerOptions to input based responses
import { useState } from "react";
// import "./index.css";
// import FormInput from "./components/FormInput/FormInput";
import ReactSlider from "./components/ReactSlider/ReactSlider";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import "./app.scss";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <ReactSlider />
      </div>
    </div>
  );
  
};

export default App;
