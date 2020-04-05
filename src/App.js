import React from "react";

import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

// Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <CoursePage />
      </div>
      {/* <Rightbar /> */}
    </div>
  );
}

export default App;
