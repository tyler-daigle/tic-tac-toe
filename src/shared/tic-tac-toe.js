class TicTacToe {
  constructor() {
    this.board = Array.fill({ player: TicTacToe.Player.Empty }, 9);
  }

  getBoard() {
    return { ...this.board };
  }
}

TicTacToe.Player = {
  X: "X",
  O: "O",
  Empty: "empty",
};
