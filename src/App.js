import React from "react";

import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

// Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
