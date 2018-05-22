import React, { Component } from 'react';
import Parser from '../utils/Parser'
import Formulario from './Formulario';
import update from 'immutability-helper';
var endpoints = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts'
                ];
class Amortizacion extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            formData:{
                cantidad:"",
                interes:"",
                plazo:"",
                valorCuota:"",
                uPlazo:"años",
                pago:"Anual"
            },
            tablaA:[],
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    postData(url, data) {
        console.log('data:',data);
        // Default options are marked with *
        return fetch(url, {
          body: JSON.stringify(data), // must match 'Content-Type' header
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'omit', // include, same-origin, *omit
          headers: {
            'content-type': 'application/json',
            "Accept": "application/json"
          },
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          //mode: 'cors', //no-cors, cors, *same-origin
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // *client, no-referrer
        })
        .then(response => response.json()) // parses response to JSON
      }

    handleInputChange(e) {
        let formData = Object.assign({}, this.state.formData);
        formData[e.target.id] = e.target.value;
        this.setState({formData});
    }

    getPostData(i){
        let formData = Object.assign({}, this.state.formData);
        if(formData.uPlazo === 'años'){
            formData['plazo'] = formData.plazo*12;
        }
        switch (formData.pago){
            case 'Mensual':
                formData['interes'] = Math.pow((1+formData.interes),(30/360))-1;
                break;
            case 'Trimestral':
                formData['interes'] = Math.pow((1+formData.interes),(90/360))-1;
                break;
            case 'Semestral':
                formData['interes'] = Math.pow((1+formData.interes),(180/360))-1;
                break;
            default:
                break;
        }

        switch(i){
            case 1:
                return {"deuda": formData.cantidad, "cuotas":formData.plazo, "interes": formData.interes};
            case 2:
                return {"deuda": formData.cantidad, "valorcuota":formData.valorCuota, "interes": formData.interes};
            default:
                return {};
            }
    }

    handleClick(e){
        e.preventDefault();
        let testJson = {
            0:{numerocuotas:3},
            1:{
                Pago:1,
                Cuota:2,
                Intereses:3,
                Amortizacion:4,
                CapitalVivo:5
            },
            2:{
                Pago:1,
                Cuota:2,
                Intereses:3,
                Amortizacion:4,
                CapitalVivo:5
            },
            3:{
                Pago:1,
                Cuota:2,
                Intereses:3,
                Amortizacion:4,
                CapitalVivo:5
            }
        };        
        this.postData(endpoints[this.props.id - 1],this.getPostData(this.props.id))
        .then((data)=> {
            this.setState(update(this.state,{
            tablaA : {$set:<Parser json = {data}/>}
        }),()=>console.log(this.state))
        }
        ).catch((error)=>console.log('No se realizo la operacion',error));
    }

  render() {    
      
    return (
      <div className="Amortizacion">
        <div className="Formulario">
            <Formulario onClick={this.handleClick} onChange = {this.handleInputChange} id={this.props.id}/>
        </div>
        <div className="tablaAmort">
            {this.state.tablaA}
        </div>      
      </div>
    );
  }
}

export default Amortizacion;
