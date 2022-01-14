class TicTacToe {
  constructor() {
    this.board = [];
    // 9 squares on the board
    for (let i = 0; i < 9; i++) {
      this.board.push({ player: PlayerMarker.Empty });
    }
  }

  reset() {
    this.board = [];
    for (let i = 0; i < 9; i++) {
      this.board.push({ player: PlayerMarker.Empty });
    }
  }

  getBoard() {
    return [...this.board];
  }

  setSquare(squareNum, marker) {
    if (squareNum < 0 || squareNum > 8) {
      return;
    }

    this.board[squareNum].player = marker;
  }

  getSquare(squareNum) {
    if (squareNum < 0 || squareNum > 8) {
      return undefined;
    }
    return this.board[squareNum].player;
  }

  checkForWinner() {
    // check rows
    if (checkEvery(this.board.slice(0, 3))) {
      return { win: true, player: this.board[0].player, squares: [0, 1, 2] };
    }

    if (checkEvery(this.board.slice(3, 6))) {
      return { win: true, player: this.board[3].player, squares: [3, 4, 5] };
    }

    if (checkEvery(this.board.slice(6))) {
      return { win: true, player: this.board[6].player, squares: [6, 7, 8] };
    }

    // check columns
    const col0 = [this.board[0], this.board[3], this.board[6]];
    const col1 = [this.board[1], this.board[4], this.board[7]];
    const col2 = [this.board[2], this.board[5], this.board[8]];

    if (checkEvery(col0)) {
      return { win: true, player: this.board[0].player, squares: [0, 3, 6] };
    }
    if (checkEvery(col1)) {
      return { win: true, player: this.board[1].player, squares: [1, 4, 7] };
    }
    if (checkEvery(col2)) {
      return { win: true, player: this.board[2].player, squares: [2, 5, 8] };
    }

    // check diagonals
    const diag0 = [this.board[0], this.board[4], this.board[8]];
    const diag1 = [this.board[2], this.board[4], this.board[6]];
    if (checkEvery(diag0)) {
      return { win: true, player: this.board[0].player, squares: [0, 4, 8] };
    }
    if (checkEvery(diag1)) {
      return { win: true, player: this.board[2].player, squares: [2, 4, 6] };
    }

    // if we get here and there was no winner, check for a tie - every
    // square is set but no one won
    for (let square = 0; square < this.board.length; square++) {
      // we can return as soon as we find an empty square because
      // if there is at least one empty square the game continues
      if (this.board[square].player === PlayerMarker.Empty) {
        return { win: false, player: PlayerMarker.Empty, squares: [] };
      }
    }

    // if we get here all the squares were set and there was no winner
    // so it is a tie.
    return { win: false, tie: true };
  }
}

function checkEvery(squares) {
  return squares.every(
    (square) =>
      square.player === squares[0].player &&
      square.player !== PlayerMarker.Empty
  );
}

export const PlayerMarker = {
  Empty: 0,
  X: 1,
  Circle: 2,
};

export const gameBoard = new TicTacToe();
