import React, { Component } from 'react';
import Parser from '../utils/Parser'
class Amortizacion extends Component {
    constructor(){
        super();
        this.state = {
            tablaA:[]
        };
    }

    getTable(){
        return fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
        .then((res)=> res.json());
    }
    componentWillMount(){
        this.getTable().then((data)=> this.setState({
            tablaA : data.product._keywords
        },()=>console.log(this.state)));
    }
  render() {
    return (
      <div className="Amortizacion">
            <Parser data={this.state.tablaA}/>
      </div>
    );
  }
}

export default Amortizacion;
