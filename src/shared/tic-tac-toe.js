class TicTacToe {
  constructor() {
    this.board = [];
    // 9 squares on the board
    for (let i = 0; i < 9; i++) {
      this.board.push({ player: PlayerMarker.Empty });
    }
  }

  getBoard() {
    return { ...this.board };
  }
}

export const PlayerMarker = {
  Empty: 0,
  X: 1,
  Circle: 2,
};

export const gameBoard = new TicTacToe();
