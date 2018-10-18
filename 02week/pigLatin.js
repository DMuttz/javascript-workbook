'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(str) {
// Define Vowels in a string
var vowels = ["a","e","i","o","u"];
// Split string into it's individual letters
var strArr = str.split("");
var index;
  
// Look for the vowel inside the string
  for(var c = 0; c < strArr.length; c++){
    for(var v = 0; v < vowels.length; v++){
      if(strArr[c] === vowels[v]){
        if(index === undefined){
          index = strArr.indexOf(strArr[c]);
          }
        }
      }
    }
  
// If vowel is not first letter, move consonants before vowel to the end of the word and and ay.
// If vowel is first letter, add way to end of word.
if(index !== 0){
  var sliced = str.slice(0, index);
    str = str.slice(index) + sliced + "ay";
} else {
  str = str + "way";
}

// Call function
return str;
  }y


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
