import React, { Component } from 'react';


class Parser extends Component {
  parseRow(i){
    let elements =[
      <td key={"pago"+i}>{this.props.json[i].Pago}</td>,
      <td key={"cuota"+i}>{this.props.json[i].Cuota}</td>,
      <td key={"intereses"+i}>{this.props.json[i].Intereses}</td>,
      <td key={"amortizacion"+i}>{this.props.json[i].Amortizacion}</td>,
      <td key={"capitalvivo"+i}>{this.props.json[i].CapitalVivo}</td>,
    ];
    return elements
  }


  parseTable(){
    let data =[];
    for (let index = 0; index <= this.props.json[0].numerocuotas; index++) {
      data.push(<tr key={"fila"+index}>{this.parseRow(index)}</tr>);
      
    }
    return data;
  
  }
  render() {
    console.log(this.props.json);
    let data = this.parseTable();
    return (
        <table className="pure-table pure-table-bordered" >
          <tbody>
          <tr>
            <th>Pago</th>
            <th>Cuota</th>
            <th>Interes</th>
            <th>Amortizacion</th>
            <th>Capital vivo</th>            
          </tr>
            {data}
         </tbody>
        </table>
    );
  }
}

export default Parser;
