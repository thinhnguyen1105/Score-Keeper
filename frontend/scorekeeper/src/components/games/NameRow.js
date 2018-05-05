import React, { Component } from 'react';

class NameRow extends Component {
  render() {
    return (
        <div>
        <div className="namerow" id="nameRow">
            <div className="name">Shounen A</div>
            <div className="name">Shounen B</div>
            <div className="name">Shounen C</div>
            <div className="name">Shounen D</div>
        </div>
    
        <div className="namerow">
            <div className="sum">Sum of Score({this.props.sum1+this.props.sum2+this.props.sum3+this.props.sum4})</div>
            <div className="sum">{this.props.sum1}</div>
            <div className="sum">{this.props.sum2}</div>
            <div className="sum">{this.props.sum3}</div>
            <div className="sum">{this.props.sum4}</div>
        </div>
        </div>
    );
  }
}

export default NameRow;