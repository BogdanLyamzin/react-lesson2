import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";

import Navbar from "./client/Navbar/components/Navbar";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    </Router>
  );
}

export default App;
