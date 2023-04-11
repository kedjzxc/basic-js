const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let newArr = arr.flat(Infinity)
  let catsNum = 0
  newArr.forEach(cat => {
    if (cat == '^^') {
      catsNum += 1
    }
  }) 
  return catsNum
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
