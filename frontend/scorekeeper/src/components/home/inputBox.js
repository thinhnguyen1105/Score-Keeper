import React, { Component } from 'react';
class InputBox extends Component {
  render() {
    return (
        
            <input className="inputbox form-control" id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} name={this.props.name}/>
        
    );
  }
}

export default InputBox;