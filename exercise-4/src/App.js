import React from 'react';
import logo from './logo.svg';
import './App.css';

import {PrimaryButton, SecondaryButton, SuccessButton} from "./shared/components/Buttons";

function App() {
  return (
    <div className="App">
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <SuccessButton>Success Button</SuccessButton>
    </div>
  );
}

export default App;
