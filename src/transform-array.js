const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!arr instanceof Array) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let newArr = arr.slice()
  for (let i = 0; i < newArr.length; i++ ) {
    if (newArr[i] == '--double-next') {
     newArr.splice(newArr.indexOf('--double-next') + 1, 0, newArr.indexOf('--double-next') + 1)
    } 
    if (newArr[i] == '--double-prev') {
      newArr.splice(newArr.indexOf('--double-prev') - 1, newArr.indexOf('--double-prev') - 1, newArr.indexOf('--double-prev') - 1, '--double-prev')
    } 
    if (newArr[i] == '--discard-next') {
      newArr.splice(newArr.indexOf('--discard-next') + 1, 1)
    }
    if (newArr[i] == '--discard-prev') {
      newArr.splice(newArr.indexOf('--discard-prev') - 1, 1)
    }
  }
  return newArr
  // remove line with error and write your code here
}

module.exports = {
  transform
};
