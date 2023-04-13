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
    return 'Unable to determine the time of year!';
  }
  const newDate = Date.parse(date);
  const dateObj = new Date(newDate);
  if (!(dateObj instanceof Date && !isNaN(dateObj.getTime()))) {
    throw new Error('Invalid date!');
  }

  if (dateObj.getMonth() == 2 || dateObj.getMonth() == 3 || dateObj.getMonth() == 4) {
    return 'spring';
  } else if (dateObj.getMonth() == 5 || dateObj.getMonth() == 6 || dateObj.getMonth() == 7) {
    return 'summer';
  } else if (dateObj.getMonth() == 8 || dateObj.getMonth() == 9 || dateObj.getMonth() == 10) {
    return 'autumn';
  } else if (dateObj.getMonth() == 11 || dateObj.getMonth() == 0 || dateObj.getMonth() == 1) {
    return 'winter';
  }
  // remove line with error and write your code here
}

module.exports = {
  getSeason,
};
