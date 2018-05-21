import React, { Component } from 'react';


class Formulario extends Component {
    static defaultProps = {
        opciones : ['Anual','Trimestral','Semestral','Mensual']
    }

  render() {
    let opcionesAmortizacion = this.props.opciones.map(op => <option key={op} value={op}>{op}</option> )
    return (
        <form className="pure-form pure-form-aligned">
            <fieldset>
                <div className="pure-control-group">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input id="cantidad" onChange={this.props.onChange} type="text"/>
                    <span className="pure-form-message-inline">This is a required field.</span>
                </div>

                <div className="pure-control-group">
                    <label htmlFor="interes">Interes</label>
                    <input id="interes" type="text" onChange={this.props.onChange}/>
                </div>

                <div className="pure-control-group">
                    <label htmlFor="plazo">Plazo</label>
                    <input id="plazo" type="text" onChange={this.props.onChange}/>
                    <select id="uPlazo" onChange={this.props.onChange}> 
                        <option key="años" value="años">años</option>
                        <option key="meses" value="meses">meses</option>
                    </select>   
                </div>
                <div className="pure-control-group">
                    <label htmlFor="forma de pago">Forma de pago</label>
                    <select id="pago" onChange={this.props.onChange}> 
                        {opcionesAmortizacion}
                    </select>
                </div>
                <div className="pure-controls">
                    <button className="pure-button pure-button-primary" type="submit" onClick={this.props.onClick} >Submit</button>
                </div>
            </fieldset>
        </form>
    );
  }
}

export default Formulario;
