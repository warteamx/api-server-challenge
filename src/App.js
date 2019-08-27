import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Components/Cart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Cart/>
    </div>
  );
}

export default App;
