// *** CODE PLAN ***

//need function to mark the board
//need function to switch player
//checking for legal move (two players cant go in same space)
//if its a space it's avaialable
//use for each function check for current player turn (loops are best friends)

// horizontalWin:
// If X or Y are at:
// (0,0), (0,1), (0,2), OR
// (1,0), (1,1,), (1,2), OR
// (2,0), (2,1), (2,2),
// X or Y wins

// verticalWin:
// If X or Y are at:
// (0,0), (1,0), (2,0), OR
// (0,1), (1,1), (2,1), OR
// (0,2), (1,2), (2,2),
// X or Y wins

// diagonalWin:
// If X or Y are at:
//(0,0), (1,1), (2,2), OR
//(0,2), (1,1), (2,0),
//X or Y wins

// checkForWin:
// If X (horizontal or vertical or diagonal win,) return "Player X won!"
// If Y (horizontal or vertical or diagonal win,) return "Players Y won!"

// ticTacToe:
//  If diagonalWin (x or y)
//(check for win),

//  If horizontalWin (x or y)
//(check for win),

//  If verticallWin (x or y)
//(check for win),

// else reset

"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

const printBoard = () => {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
};

const isLegalMove = (row, column) => {
  if (board[row][column] === " ") {
    return true;
  } else {
    console.log("Please pick empty space");
  }
};

const playerMove = (row, column) => {
  if (playerTurn === "X") {
    board[row][column] = "X";
  } else {
    board[row][column] = "O";
  }
};

const switchPlayer = () => {
  if (playerTurn == "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
};

const horizontalWinX = () => {
  if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
    return true;
  } else if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
    return true;
  } else if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
    return true;
  } else {
    return false;
  }
};

const horizontalWinO = () => {
  if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") {
    return true;
  } else if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") {
    return true;
  } else if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
    return true;
  } else {
    return false;
  }
};

const verticalWinX = () => {
  if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
    return true;
  } else if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
    return true;
  } else if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
    return true;
  } else {
    return false;
  }
};

const verticalWinO = () => {
  if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
    return true;
  } else if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
    return true;
  } else if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
    return true;
  } else {
    return false;
  }
};

const diagonalWinX = () => {
  if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
    return true;
  } else if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
    return true;
  } else {
    return false;
  }
};

const diagonalWinO = () => {
  if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
    return true;
  } else if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
    return true;
  } else {
    return false;
  }
};

const checkForWin = () => {
  if (horizontalWinX() || verticalWinX() || diagonalWinX()) {
    console.log("Player X Wins!");
    return true;
  } else if (horizontalWinO() || verticalWinO() || diagonalWinO()) {
    console.log("Player O Wins!");
    return true;
  } else {
    return false;
  }
};

const resetGame = () => {
  board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
  playerTurn = "X";
};

const ticTacToe = (row, column) => {
  if (isLegalMove) {
    playerMove(row, column);

    if (checkForWin()) {
      resetGame();
    } else {
      switchPlayer();
    }
  }
};

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => {
    rl.question("column: ", column => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#ticTacToe()", () => {
    it("should place mark on the board", () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should alternate between players", () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ["O", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should check for vertical X wins", () => {
      board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
      assert.equal(verticalWinX(), true);
    });
    it("should check for horizontal X wins", () => {
      board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
      assert.equal(horizontalWinX(), true);
    });
    it("should check for diagonal X wins", () => {
      board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(diagonalWinX(), true);
    });
    it("should check for vertical O wins", () => {
      board = [[" ", "O", " "], [" ", "O", " "], [" ", "O", " "]];
      assert.equal(verticalWinO(), true);
    });
    it("should check for horizontal O wins", () => {
      board = [["O", "O", "O"], [" ", " ", " "], [" ", " ", " "]];
      assert.equal(horizontalWinO(), true);
    });
    it("should check for diagonal O wins", () => {
      board = [["O", " ", " "], [" ", "O", " "], [" ", " ", "O"]];
      assert.equal(diagonalWinO(), true);
    });
    it("should detect a win", () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
