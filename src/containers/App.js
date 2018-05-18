import React, { Component } from 'react';
import './App.css';
import Amortizacion from './Amortizacion'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calculadora</h1>
        <div className="tabla">
          <Amortizacion/>
        </div>
      </div>
    );
  }
}

export default App;
