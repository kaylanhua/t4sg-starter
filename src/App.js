import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    });
  }, []);

  const [placeholder, setPlaceholder] = useState('Hi');

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setPlaceholder(data.result)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button>Submit</button>
        <p> the current time is {currentTime}.</p>
        <p>Flask says {placeholder}</p>
      </header>
    </div>
  );
}

export default App;
