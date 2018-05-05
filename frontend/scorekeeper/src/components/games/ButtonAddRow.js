import React, { Component } from 'react';

class ButtonAddRow extends Component {
  render() {
    return (
    <div>
        <hs/>
        <div id="btncenter">
            <button type="submit" className="btn btn-default" id="button" onClick={this.props.onclick}>ADD ROUND</button>
        </div>
    </div>
    );
  }
}

export default ButtonAddRow;