/*
Exercise
For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word.
The function must:

Check to find the word horizontally and vertically
Return true if the word is found, and return false if the word is not found (DONE)
NOTE: You do not need to check to see if a word is written backwards or diagonally.

This challenge comes with some initial (buggy!) code. We suggest approaching this problem with a TDD mindset, meaning "write tests, make the tests pass, repeat!".

There are already some tests in ./test/test_wordsearch.js, and you can run the tests with npm test.
You'll find that one of the tests doesn't pass yet, so you'll want to start by editing the code in wordsearch.js to allow the tests to pass.

When the present tests are successful, ask yourself,
"Do the current tests cover all the possible cases?"
What if the word is written vertically, not horizontally?
What about the case where the word matrix is an empty array?
You'll have to write tests for these cases (and any others that you think of), and you might also have to modify the wordSearch function to make those new tests pass.

Instruction
Complete the function named wordSearch and ensure that all tests pass. Add any tests that you find necessary.
*/

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const letters =
  [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
  ];

// Define transpose function
const transpose = function(matrix) {
  // Initialize a variable, called result, to store the new transposed array
  let result = [];
  // Iterate through columns
  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = [];
    // Iterate through rows
    for (let j = 0; j < matrix.length; j++) {
      // Push the elements into the new Row
      newRow.push(matrix[j][i]);
    }
    // Push the newRow into the result array
    result.push(newRow);
  }
  return result;
};

// Define wordSearchComplete function that takes in letters and word as its arguments
const wordSearchComplete = function(letters, word) {
  // If it is empty, return false
  if (word.length === 0) {
    return false;
  }
  let check = wordSearch(letters, word);
  
  let result = (transpose(letters));
  check = check || wordSearch(result, word);
  return check;
};

// Call the wordSearchComplete function with an empty array, should return false
console.log(wordSearchComplete(letters, []));

module.exports = wordSearch;