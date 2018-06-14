// step 6 code
/*
import React, { Component } from 'react';
import './GameInfo.css';

class GameInfo extends Component {
  render() {
    return (
      <div className="game-info">
      </div>
    );
  }
}

export default GameInfo;
*/

// step 7 code

import React, { Component } from 'react';
import './GameInfo.css';

class GameInfo extends Component {
  render() {
    let title;
    switch (this.props.result.winner) {
      case 'X':
        title = 'Player X win!';
        break;
      case 'O':
        title = 'Player O win!';
        break;
      case 'Draw':
        title = 'Draw';
        break;
      default:
        title = `Player ${this.props.nextPlayer}'s turn`;
    }

    let historyInfo = this.props.history.map((v, i) => {
      return (
        <div>
          {`${i % 2 === 0 ? 'X': 'O'}: (${parseInt(i / 3)}, ${i % 3})`}
        </div>
      );
    });

    return (
      <div className="game-info">
        <h2>{title}</h2>
        {historyInfo}
      </div>
    );
  }
}

export default GameInfo;
