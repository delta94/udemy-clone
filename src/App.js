import React from "react";

import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

// Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
