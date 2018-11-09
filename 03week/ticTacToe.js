"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";
// let playerTwoTurn = "O";
//need function to mark the board
//need function to switch player
//checking for legal move (two players cant go in same space)
//if its a space it's avaialable
//use for each function check for current player turn (loops are best friends)

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

// *** CODE PLAN ***

//const boardLength = board.length;
//

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

function horizontalWin() {
  // Your code here
}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  // Your code here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => {
    rl.question("column: ", column => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}

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
    it("should check for vertical wins", () => {
      board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
      assert.equal(verticalWin(), true);
    });
    it("should check for horizontal wins", () => {
      board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
      assert.equal(horizontalWin(), true);
    });
    it("should check for diagonal wins", () => {
      board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(diagonalWin(), true);
    });
    it("should detect a win", () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
