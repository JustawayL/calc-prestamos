import React, { Component } from 'react';
import Parser from '../utils/Parser'
import Formulario from './Formulario';
import update from 'immutability-helper';
var endpoints = [
    'https://world.openfoodfacts.org/api/v0/product/737628064502.json'
                ];
class Amortizacion extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            formData:{
                cantidad:"",
                interes:"",
                plazo:"",
                uPlazo:"años",
                pago:"Anual"
            },
            tablaA:[],
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        let formData = Object.assign({}, this.state.formData);
        formData[e.target.id] = e.target.value;
        this.setState({formData});
    }

    handleClick(e){
        
        e.preventDefault();
        fetch(endpoints[this.props.id-1])
        .then((res)=> res.json())
        .then((data)=> {
            this.setState(update(this.state,{
            tablaA : {$set:<Parser formD = {data}/>}
        }),()=>console.log(this.state))
        }
        ).catch((error)=>console.log('No se realizo la operacion',error));
    }

  render() {    
      
    return (
      <div className="Amortizacion">
        <div className="Formulario">
            <Formulario onClick={this.handleClick} onChange = {this.handleInputChange}/>
        </div>
        <div className="tablaAmort">
            {this.state.tablaA}
        </div>      
      </div>
    );
  }
}

export default Amortizacion;
