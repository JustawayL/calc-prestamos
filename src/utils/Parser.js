import React, { Component } from 'react';


class Parser extends Component {
  parseRow(){
    /*let elements =[];
    this.props.data.forEach(element => {
      elements.push(<td key={element}>{element}</td>);
    });*/
    return <td>Holi</td>
  
  }
  parseTable(){
    let data =[];
    for (let index = 0; index < 5; index++) {
      data.push(this.parseRow());
      
    }
    return <tr>{data}</tr>;
  
  }
  render() {
    console.log(this.props.formD);
    let data = [];
    for (let index = 0; index < 10; index++) {
      data.push(this.parseTable());
    }
    
    
    return (
        <table className="pure-table">
          <tr>
            <th>Pago</th>
            <th>Cuota</th>
            <th>Interes</th>
            <th>Amortizacion</th>
            <th>Capital vivo</th>            
          </tr>
         {data}
        </table>
    );
  }
}

export default Parser;
