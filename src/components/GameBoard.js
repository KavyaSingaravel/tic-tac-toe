// step 2 code
/*
import React, { Component } from 'react';
import './GameBoard.css';


class GameBoard extends Component {
  render() {
    return (
      <div className="game-board">
      </div>
    );
  }
}

export default GameBoard;
*/

// step 3 code
/*
import React, { Component } from 'react';
import './GameBoard.css';
import Square from "./Cell";

let PlayerX = 'X';
let PlayerO = 'O';

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      nextPlayer: PlayerX,
      cells: new Array(9).fill(null),
    }
  }

  render() {
    let cells = this.state.cells.map((value, index) => {
      return (
        <Square
          index={index}
          value={value}
        />
      );
    });

    return (
      <div className="game-board">
        {cells}
      </div>
    );
  }
}

export default GameBoard;
*/

// step 4 code
/*
import React, { Component } from 'react';
import './GameBoard.css';
import Square from "./Cell";

let PlayerX = 'X';
let PlayerO = 'O';


class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      nextPlayer: PlayerX,
      cells: new Array(9).fill(null),
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(index) {
    // Please don't change the state directly! Otherwise, the page will not be rendered.
    // this.state.cells[index] = this.state.nextPlayer;
    // this.state.nextPlayer = some one who is next;

    let new_cells = this.state.cells;
    new_cells[index] = this.state.nextPlayer;
    let next = PlayerO;
    if (this.state.nextPlayer === PlayerO) {
      next = PlayerX;
    }


    // Always use setState to trigger the change.
    this.setState({
      nextPlayer: next,
      cells: new_cells,
    });
  }

  render() {
    let cells = this.state.cells.map((value, index) => {
      return (
        <Square
          index={index}
          value={value}
          handleSquareClick={this.handleSquareClick}
        />
      );
    });

    return (
      <div className="game-board">
        {cells}
      </div>
    );
  }
}

export default GameBoard;
*/

// step 5 code
/*
import React, { Component } from 'react';
import './GameBoard.css';
import Square from "./Cell";

let PlayerX = 'X';
let PlayerO = 'O';


class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      nextPlayer: PlayerX,
      cells: new Array(9).fill(null),
      result: {
        winner: null,
        winning_trace: [],
      }
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  checkBoard(board) {
    let result = {
      winner: null,
      winning_trace: [],
    };

    let traces = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
      [0, 4, 8], [2, 4, 6], // diagonal
    ];

    for (let i in traces) {
      let trace = traces[i];
      if (board[trace[0]] && board[trace[0]] === board[trace[1]] && board[trace[1]] === board[trace[2]]) {
        result.winner = trace[0];
        result.winning_trace = trace;
        break;
      }
    }

    return result;
  }

  handleSquareClick(index) {
    if (this.state.result.winner !== null) {
      return;
    }

    // Please don't change the state directly! Otherwise, the page will not be rendered.
    // this.state.cells[index] = this.state.nextPlayer;
    // this.state.nextPlayer = some one who is next;

    let new_cells = this.state.cells;
    new_cells[index] = this.state.nextPlayer;
    let next = PlayerO;
    if (this.state.nextPlayer === PlayerO) {
      next = PlayerX;
    }

    let result = this.checkBoard(this.state.cells);

    // Always use setState to trigger the change.
    this.setState({
      nextPlayer: next,
      cells: new_cells,
      result: result,
    });
  }

  render() {
    let cells = this.state.cells.map((value, index) => {
      return (
        <Square
          index={index}
          value={value}
          win={this.state.result.winning_trace.includes(index)}
          handleSquareClick={this.handleSquareClick}
        />
      );
    });

    return (
      <div className="game-board">
        {cells}
      </div>
    );
  }
}

export default GameBoard;
*/

// step 6 code
/*
import React, { Component } from 'react';
import './GameBoard.css';
import Square from "./Cell";
import GameInfo from "./GameInfo";

let PlayerX = 'X';
let PlayerO = 'O';


class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      nextPlayer: PlayerX,
      cells: new Array(9).fill(null),
      result: {
        winner: null,
        winning_trace: [],
      }
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  checkBoard(board) {
    let result = {
      winner: null,
      winning_trace: [],
    };

    let traces = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
      [0, 4, 8], [2, 4, 6], // diagonal
    ];

    for (let i in traces) {
      let trace = traces[i];
      if (board[trace[0]] && board[trace[0]] === board[trace[1]] && board[trace[1]] === board[trace[2]]) {
        result.winner = trace[0];
        result.winning_trace = trace;
        break;
      }
    }

    return result;
  }

  handleSquareClick(index) {
    if (this.state.result.winner !== null) {
      return;
    }

    // Please don't change the state directly! Otherwise, the page will not be rendered.
    // this.state.cells[index] = this.state.nextPlayer;
    // this.state.nextPlayer = some one who is next;

    let new_cells = this.state.cells;
    new_cells[index] = this.state.nextPlayer;
    let next = PlayerO;
    if (this.state.nextPlayer === PlayerO) {
      next = PlayerX;
    }

    let result = this.checkBoard(this.state.cells);

    // Always use setState to trigger the change.
    this.setState({
      nextPlayer: next,
      cells: new_cells,
      result: result,
    });
  }

  render() {
    let cells = this.state.cells.map((value, index) => {
      return (
        <Square
          index={index}
          value={value}
          win={this.state.result.winning_trace.includes(index)}
          handleSquareClick={this.handleSquareClick}
        />
      );
    });

    return (
      <div className="game-board">
        <div className="cells-container">
          {cells}
        </div>
        <GameInfo/>
      </div>
    );
  }
}

export default GameBoard;
*/

// step 7 code
import React, { Component } from 'react';
import './GameBoard.css';
import Square from "./Cell";
import GameInfo from "./GameInfo";

let PlayerX = 'X';
let PlayerO = 'O';


class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      nextPlayer: PlayerX,
      cells: new Array(9).fill(null),
      result: {
        winner: null,
        winning_trace: [],
      },
      history: [],
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  checkBoard(board) {
    let result = {
      winner: null,
      winning_trace: [],
    };

    let traces = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
      [0, 4, 8], [2, 4, 6], // diagonal
    ];

    if (this.state.cells.filter((n) => n).length === 9) {
      result.winner = 'Draw';
    }

    for (let i in traces) {
      let trace = traces[i];
      if (board[trace[0]] && board[trace[0]] === board[trace[1]] && board[trace[1]] === board[trace[2]]) {
        result.winner = board[trace[0]];
        result.winning_trace = trace;
        break;
      }
    }

    return result;
  }

  handleSquareClick(index) {
    if (this.state.result.winner !== null) {
      return;
    }

    // Please don't change the state directly! Otherwise, the page will not be rendered.
    // this.state.cells[index] = this.state.nextPlayer;
    // this.state.nextPlayer = some one who is next;

    let new_cells = this.state.cells;
    new_cells[index] = this.state.nextPlayer;
    let next = PlayerO;
    if (this.state.nextPlayer === PlayerO) {
      next = PlayerX;
    }

    let new_history = this.state.history;
    new_history.push(index);

    let result = this.checkBoard(this.state.cells);

    // Always use setState to trigger the change.
    this.setState({
      nextPlayer: next,
      cells: new_cells,
      result: result,
      history: new_history,
    });
  }

  render() {
    let cells = this.state.cells.map((value, index) => {
      return (
        <Square
          index={index}
          value={value}
          win={this.state.result.winning_trace.includes(index)}
          handleSquareClick={this.handleSquareClick}
        />
      );
    });

    return (
      <div className="game-board">
        <div className="cells-container">
          {cells}
        </div>
        <GameInfo
          result={this.state.result}
          nextPlayer={this.state.nextPlayer}
          history={this.state.history}
        />
      </div>
    );
  }
}

export default GameBoard;
