'use strict';

const assert = require('assert');
const readline = require('readline');
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
  // if (stacks[endStack].length === 0) {
  
}
  //   }
    

    // get the value of start stack array
    // const startstack = stacks[startStack]
    // get the last item in the array
    // startstack => get last item
    // add the item to the end stack array
    // look up methods to add; maybe pop or push
//     console.log('move piece');
//   }


const isLegal = () => {
  // I need a function here that assigns value to 1,2,3,4. Then this function should be able to tell the computer whether or not a move can be made based on the value of the piece. A larger piece cannot go on top of a smaller piece.
return true;
}

const checkForWin = () => {
  // This function needs to check that all 4 items are in array C, and in order from largest to smallest.

}

const towersOfHanoi = (startStack, endStack) => {
  // This function needs to ensure that one array is the place for the start stack and one array is the place for the end stack.
if (isLegal()) {
  movePiece();
  checkForWin();

} else {
  return 'invalid move'
}

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
