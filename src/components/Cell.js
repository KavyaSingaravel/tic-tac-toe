// step 3 code
/*
import React, { Component } from 'react';
import './Cell.css';

class Square extends Component {
  render() {
    return (
      <div className="cell">
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Square;
*/

// step 4 code
/*
import React, { Component } from 'react';
import './Cell.css';

class Square extends Component {
  render() {
    function handleClick() {
      if (!this.props.value) {
        this.props.handleSquareClick(this.props.index);
      }
    }

    return (
      <div className="cell" onClick={handleClick.bind(this)}>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Square;
*/

// step 5 code
import React, { Component } from 'react';
import './Cell.css';

class Square extends Component {
  render() {
    function handleClick() {
      if (!this.props.value) {
        this.props.handleSquareClick(this.props.index);
      }
    }

    return (
      <div className="cell" onClick={handleClick.bind(this)}>
        <span className={this.props.win? 'win': ''}>{this.props.value}</span>
      </div>
    );
  }
}

export default Square;
