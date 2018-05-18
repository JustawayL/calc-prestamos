import React, { Component } from 'react';
import Parser from '../utils/Parser'
import Formulario from './Formulario';
class Amortizacion extends Component {
    constructor(){
        super();
        this.state = {
            formData:{},
            tablaA:[],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
        .then((res)=> res.json())
        .then((data)=> this.setState({
            formData:{},
            tablaA : <Parser formD = {data}/>
        },()=>console.log(this.state)))
        .catch((error)=>console.log('No se realizo la operacion',error));

    }

  render() {    
      
    return (
      <div className="Amortizacion">
        <div className="Formulario">
            <Formulario onClick={this.handleClick}/>
        </div>
        <div className="tablaAmort">
            {this.state.tablaA}
        </div>      
      </div>
    );
  }
}

export default Amortizacion;
