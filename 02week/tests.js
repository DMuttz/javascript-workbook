if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('Rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('rOck', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('roCk', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('rocK', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should detect empty entry', () => {
      assert.equal(rockPaperScissors('', ''), "Invalid Entry");
      });
    it('should allow one letter entry', () => {
      assert.equal(rockPaperScissors('r', 's'), "Hand one wins!");
      assert.equal(rockPaperScissors('p', 'r'), "Hand one wins!");
      assert.equal(rockPaperScissors('s', 'p'), "Hand one wins!");
      assert.equal(rockPaperScissors('s', 'r'), "Hand two wins!");
      assert.equal(rockPaperScissors('r', 'p'), "Hand two wins!");
      assert.equal(rockPaperScissors('p', 's'), "Hand two wins!");
      });
  });
} else {

  getPrompt();

}