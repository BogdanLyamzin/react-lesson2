import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToggleButton from "./shared/components/ToggleButton";

function App() {
  return (
    <div className="App">
      <ToggleButton>Toggle Button</ToggleButton>
      <ToggleButton active>Active Toggle Button</ToggleButton>
    </div>
  );
}

export default App;
