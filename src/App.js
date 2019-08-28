import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Components/Cart'
import Solution from './Components/Solution';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="row">
      <div className="column">
      <Cart/>
      </div>
      <div className= "column">
      <Solution/>
      </div>
      </div>
    </div>
  );
}

export default App;
