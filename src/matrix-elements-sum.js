const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [];
  let rows = matrix[0].length;
  let columns = matrix.length;
  let result = 0;

  for (let i = 0; i < rows; i += 1) {
    arr.push([]);

    for (let j = 0; j < columns; j += 1) {
      arr[i].push(matrix[j][i]);
    }
  }

  arr.forEach(function(item) {
    let i = 0;

    while (item[i] !== 0 && i < item.length) {
      result += item[i];

      i += 1;
    }
  });

  return result;
}

module.exports = {
  getMatrixElementsSum
};
