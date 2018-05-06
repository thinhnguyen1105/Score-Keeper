import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/home/Home';
import Games from './components/games/Games';




class App extends Component {

  state = {
    initializing : true,
    inputValue1 : "",
    inputValue2 : "",
    inputValue3 : "",
    inputValue4 : ""
  }

  _handleTextChange1 = event => { 
    this.setState({
      inputValue1: event.target.value
    });
   
  }
  _handleTextChange2 = event => { 
    this.setState({
      inputValue2: event.target.value
    });
   
  }
  _handleTextChange3 = event => { 
    this.setState({
      inputValue3: event.target.value
    });
   
  }
  _handleTextChange4 = event => { 
    this.setState({
      inputValue4: event.target.value
    });
   
  }
 
  render() {
   return(
    <div className="App container">
    <h1 className="header">Score Keeper</h1>
    <hr/>
     {this.state.initializing ? <Home onclick = {this.onclickButton} onchange1 = {this._handleTextChange1} onchange2 = {this._handleTextChange2} onchange3 = {this._handleTextChange3} onchange4 = {this._handleTextChange4} /> : <Games name1={this.state.inputValue1} name2={this.state.inputValue2} name3={this.state.inputValue3} name4={this.state.inputValue4}  />}
     </div>
   )
   
    
  }  
  onclickButton = e => this.setState({initializing: false}) 
}



export default App;
