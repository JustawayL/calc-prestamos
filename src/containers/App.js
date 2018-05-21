import React, { Component } from 'react';
import './App.css';
import Amortizacion from './Amortizacion'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <div className="App">
        <h1>Calculadora</h1>
        <Router>
    <div className="nav">
        <div className="icons">
          <Link to="/calc1">
            <img src={require('../images/calc1_ico.png')} alt="calc1" height='100' width='100'/> 
          </Link>
          <Link to="/calc2">
            <img src={require('../images/calc2_ico.png')} alt="calc2" height='100' width='100'/> 
          </Link>
        </div>

      <Route exact path="/" component={Home} />
      <Route path="/calc1" component={Calc1} />
      <Route path="/calc2" component={Calc2} />
    </div>
  </Router>
      </div>
    );
  }
}

const Home = () => (
  <div className="tabla">
      <Amortizacion id={1}/>
  </div>
);

const Calc1 = () => (
  <div className="tabla">
      <Amortizacion id={1}/>
  </div>
);

const Calc2 = () => (
  <div className="tabla">
      <Amortizacion id={2}/>
  </div>
);

export default App;
