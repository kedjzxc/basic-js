const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let count = 0
  let firstSet = Array.from(new Set(s1))
  let secondSet = Array.from(new Set(s2))
  for (let i = 0; i < firstSet.length; i++) {
    for (let j = 0; j < secondSet.length; j++) {
      if (s1[i] == s2[j]) {
        count++
      } 
    }
  }
  return count
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
