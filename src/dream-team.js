const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = '';
  members.forEach(item => {
    if (typeof item == "string") {
      teamName += item.slice(0,1)
    }
  })
  return teamName.split('').sort().join('').trim()
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
