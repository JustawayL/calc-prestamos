import React, { Component } from 'react';
import './App.css';
import Formulario from './Formulario';
import Amortizacion from './Amortizacion'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calculadora</h1>
        <Formulario/>
        <Amortizacion/>
      </div>
    );
  }
}

export default App;
