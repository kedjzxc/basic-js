const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringN = String(n)
  let arr = stringN.split('')
  let arrN = arr.map(item => {
    return item = +item
  })
  let min = Math.min(...arrN)
  arrN.splice(arrN.indexOf(min), 1)
  return Number(arrN.join(''))
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
