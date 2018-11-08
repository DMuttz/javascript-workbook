"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

const movePiece = (startStack, endStack) => {
  //taking last piece off of start stack
  const startMove = stacks[startStack].pop();
  //moving last piece onto end stacks
  stacks[endStack].push(startMove);
};

const isLegal = (startStack, endStack) => {
  //variable to declare value of startStack
  const startingArray = stacks[startStack];
  //variable to declare value of endStack
  const endingArray = stacks[endStack];
  //if endingArray is empty, move is allowed
  console.log(startStack, endStack);
  if (endingArray.length === 0) {
    return true;
  } else if (
    //else if the value of the starting piece is less than the value of the ending piece, you can move it. Otherwise, you can't.
    startingArray[startingArray.length - 1] <
    endingArray[endingArray.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
};

const checkForWin = (startStack, endStack) => {
  //If the final stack has 4 pieces (the order will be correct no matter what because of islegal) player wins.
  if (stacks.c.length === 4) {
    console.log("You Won!");
    return true;
  } else {
    return false;
  }
};

const resetGame = () => {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
};

const towersOfHanoi = (startStack, endStack) => {
  // if move is legal, move piece and check for win, otherwise don't move piece.
  const lowerCaseStartStack = startStack.trim().toLowerCase();
  const lowerCaseEndStack = endStack.trim().toLowerCase();
  if (isLegal(lowerCaseStartStack, lowerCaseEndStack)) {
    movePiece(lowerCaseStartStack, lowerCaseEndStack);
    if (checkForWin()) {
      resetGame();
    }
  } else {
    console.log("invalid move");
  }
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe("#movePiece()", () => {
    it("should allow capital letters", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(
        towersOfHanoi("A", "B"),
        assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] })
      );
    });
    it("should not allow other letters", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      it("should not allow more than one letter", () => {
        stacks = {
          a: [4, 3, 2, 1],
          b: [],
          c: []
        };
        assert.equal(movePiece("aa", "bb", "cc"), false);
      });
    });
  });
} else {
  getPrompt();
}
