const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  const newDate = Date.parse(date)
  const dateObj = new Date(newDate)
  return dateObj.getMonth() == 2 || dateObj.getHours() == 3 || dateObj.getHours() == 4 ? 'spring' :
        dateObj.getMonth() == 5 || dateObj.getHours() == 6 || dateObj.getHours() == 7 ? 'summer' : 
        dateObj.getMonth() == 8 || dateObj.getHours() == 9 || dateObj.getHours() == 10 ? 'autumn' : 
        dateObj.getMonth() == 11 || dateObj.getHours() == 12 || dateObj.getHours() == 0 ? 'winter' : '' 
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
