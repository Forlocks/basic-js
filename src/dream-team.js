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
  console.log(members);

  if (Array.isArray(members)) {
    let arr = [];

    members.forEach(function(item) {
      if (typeof(item) === 'string' && item.length > 1) {
        arr.push( item.trim().slice(0, 1).toUpperCase() );
      }
    });

    console.log(arr.sort().join(''));
    return arr.sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
