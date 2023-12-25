const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let trueArr = [];
  let indexArr = [];

  arr.forEach(function(item, i) {
    if (item !== -1) {
      trueArr.push(item);
      indexArr.push(i);
    }
  });

  trueArr.sort((a, b) => a - b);

  trueArr.forEach(function(item, i) {
    arr[indexArr[i]] = item;
  });
  console.log(trueArr);
  console.log(arr);
  return arr;
}

module.exports = {
  sortByHeight
};
