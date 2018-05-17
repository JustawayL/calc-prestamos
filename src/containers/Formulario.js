import React, { Component } from 'react';
class Formulario extends Component {
    static defaultProps = {
        opciones : ['Anual','Trimestral','Semestral','Mensual']
    }

    constructor(){
        super()
        this.state={
            formData:{}
        }
    }


    handleSubmit(e){
        this.setState({
            formData : {
                cantidad:this.refs.cantidad.value,
                interes:this.refs.interes.value,
                plazo:this.refs.plazo.value
            }
        },()=>console.log(this.state));
        e.preventDefault();
    }
  render() {
    let opcionesAmortizacion = this.props.opciones.map(op => <option key={op} value={op}>{op}</option> )
    return (
      <div className="Formulario">
        <form onSubmit ={this.handleSubmit.bind(this)}>
            <div className="campos">
                <label>Cantidad</label> 
                <input type="text" ref="cantidad"/><br/>
                <label>Interes</label>
                <input type="text" ref="interes"/><br/>
                <label>plazo</label>
                <input type="text" ref="plazo"/>
                <select ref="opcionA"> 
                    <option key="años" value="años">años</option>
                    <option key="meses" value="meses">meses</option>
                </select>
            </div>
            <div className="opciones">
                <select ref="opcionA"> 
                    {opcionesAmortizacion}
                </select>
            </div>
            <input type="submit" value="Calcular"/>
        </form>
      </div>
    );
  }
}

export default Formulario;
