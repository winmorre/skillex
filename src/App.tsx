import React from 'react';
import './App.css';
import {RightPage} from "./components/RightPage";
import {LeftPage} from "./components/LeftPage";

function App() {
  return (
    <div className="App">
      <LeftPage />
      <RightPage />
    </div>
  );
}

export default App;
