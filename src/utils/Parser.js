import React, { Component } from 'react';

class Parser extends Component {
  parseTable(){
    return<table id="tabla-amortizacion">
        <tbody>
          <tr id="row0">
            <td id="cell0-0">{this.props.data[0]}</td>
            <td id="cell0-1">{this.props.data[1]}</td>
            <td id="cell0-2">{this.props.data[2]}</td>
          </tr>
        </tbody>
      </table>
  
  }
  render() {
    let table = this.parseTable();
    return (
      <div className="Parser">
        {table}
      </div>
    );
  }
}

export default Parser;
