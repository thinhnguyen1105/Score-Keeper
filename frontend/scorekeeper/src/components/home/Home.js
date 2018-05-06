import React, { Component } from 'react';
import InputBox from "./inputBox";
import ButtonCenter from "./ButtonCenter";


class Home extends Component {


  render() {
    return (
        
          <form className="navbar-form navbar-left" method="POST" action="/">
            <InputBox id={"over"} name={"namePlayer1"} placeholder={"Player1..."} onchange1={this.props.onchange}/>
            <InputBox id={"over1"} name={"namePlayer2"} placeholder={"Player2..."} onchange2={this.props.onchange}/>
            <InputBox id={"over1"} name={"namePlayer3"} placeholder={"Player3..."} onchange3={this.props.onchange}/>
            <InputBox id={"over1"} name={"namePlayer4"} placeholder={"Player4..."} onchange4={this.props.onchange}/>
            <ButtonCenter onclickbutton = {this.props.onclick}/>
           </form>
     
    );
  }
}

export default Home;