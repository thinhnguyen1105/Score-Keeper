import React, { Component } from 'react';
import NameRow from './NameRow';
import Row from './Row';
import ButtonAddRow from './ButtonAddRow';


class Games extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows : [],
      counter : 1,
      randomNumber1 : Math.floor((Math.random() * 10) + 1),
      randomNumber2 : Math.floor((Math.random() * 10) + 1),
      randomNumber3 : Math.floor((Math.random() * 10) + 1),
      randomNumber4 : Math.floor((Math.random() * 10) + 1),
      sum1 : 0,
      sum2 : 0,
      sum3 : 0,
      sum4 : 0
    };
  }

  _addRow = ()=>{
    var rows = this.state.rows
    var randomNumber1 = Math.floor((Math.random() * 10) + 1)
    var randomNumber2 = Math.floor((Math.random() * 10) + 1)
    var randomNumber3 = Math.floor((Math.random() * 10) + 1)
    var randomNumber4 = Math.floor((Math.random() * 10) + 1)
    rows.push(<Row roundNumber={this.state.counter} score1={this.state.randomNumber1} score2={this.state.randomNumber2} score3={this.state.randomNumber3} score4={this.state.randomNumber4} />)
    this.setState({rows: rows})
    this.setState({randomNumber1 : randomNumber1,randomNumber2: randomNumber2,randomNumber3:randomNumber3,randomNumber4:randomNumber4})
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
    //update sum 
    this.setState({sum1 : this.state.sum1+this.state.randomNumber1,sum2 : this.state.sum2+this.state.randomNumber2,sum3 : this.state.sum3+this.state.randomNumber3,sum4 : this.state.sum4+ this.state.randomNumber4})
  }


  render() {
    return (
      <div>
        <NameRow sum1={this.state.sum1} sum2={this.state.sum2} sum3={this.state.sum3} sum4={this.state.sum4} />
        {this.state.rows.map((r) => (
          <div >{r}</div>))}
        <ButtonAddRow onclick = {this._addRow}/>
      </div>
    );
  }

}

export default Games;