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
  // members.forEach(item => {
  //   if (typeof item == "string") {
      
  //   }
  // })
  // return teamName.split('').sort().join('')

  for (let i = 0; i < members.length; i++) {
    if(typeof members[i] == 'string') {
      teamName += members[i].trim().slice(0,1).toUpperCase()
    }
  }
  return teamName.split('').sort().join('')
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
