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
  const arr = Array.from( String(n) );
  let maxValue = 0;
  let num;

  arr.forEach(function(item, i) {
    num = +String(n).replace(arr[i], '');

    if (num > maxValue) {
      maxValue = num;
    }
  });

  return maxValue;
}

module.exports = {
  deleteDigit
};
