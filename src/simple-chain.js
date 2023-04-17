const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let str = ''
const chainMaker = {
  getLength() {
    return str.length
    // remove line with error and write your code here
  },
  addLink(value) {
    str += `( ${value} )~~`
    // remove line with error and write your code here
  },
  removeLink(position) {
    let arr = str.split('')
    return arr.filter((item, index, arr) => {
      if (position !== index) {
        return true
      }
    }).join('')

    // remove line with error and write your code here
  },
  reverseChain() {
    let arr = str.split('')
    return arr.reverse().join('')
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
