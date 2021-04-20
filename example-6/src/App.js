import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from "./shared/components/Input";

import LoginForm from "./client/LoginForm/components/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Input />
    </div>
  );
}

export default App;
