import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
        <div className="namerow">
        <div className="r1"><div>Round {this.props.roundNumber}</div></div>
        <div className="r1"><div className="form-control">{this.props.score1}</div></div>
        <div className="r1"><div className="form-control">{this.props.score2}</div></div>
        <div className="r1"><div className="form-control">{this.props.score3}</div></div>
        <div className="r1"><div className="form-control">{this.props.score4}</div></div>
    </div>
    );
  }
}

export default Row;