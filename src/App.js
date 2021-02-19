import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from './components/form';
import Button from 'react-bootstrap/Button';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    });
  }, []);

  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name: value };
    console.log('submit');
    console.log(value);
    fetch('http://127.0.0.1:5000/test/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res["name"])
      });
      // .then(res => console.log(res));
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <br/><br/><br/><br/><br/>
      <h1>t4sg starter project</h1>
      <p>the current time: {currentTime}.</p>
      <br/>
      {/* <Form/> */}
      <br/>
      <h2>the api:</h2>
      
      <Button>Get random fact</Button>

      <br/>
      <br/>
      <h2>communication w backend:</h2>
      <br/>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleValue} />
        <button> submit </button>
      </form>
      <p>the word is: {value}</p>
    </div>
  );
}

export default App;