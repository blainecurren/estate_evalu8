import React from "react";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Contact />
      </div>
    </div>
  );
}

export default App;
