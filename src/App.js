import React from 'react';
import logo from './logo.svg';
import './App.css';
import Problem from './Components/Problem'
import Solution from './Components/Solution';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> API SERVER Challenge </p>
        <a className="App-link " href="https://github.com/martinrebo/api-server-challenge" target="_blank" rel="noopener noreferrer"> Go to Git hub Repo</a>

      </header>
      <div className="row">
      <div className="column">
      <Problem/>
      </div>
      <div className= "column">
      <Solution/>
      </div>
      </div>
    </div>
  );
}

export default App;
