const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];
  let rows = matrix.length;
  let columns = matrix[0].length;
  let countBombs = 0;

  for (let i = 0; i < rows; i += 1) {
    arr.push([]);

    for (let j = 0; j < columns; j += 1) {
      if (i - 1 >= 0 && j - 1 >= 0 && i - 1 < rows && j - 1 < columns && matrix[i - 1][j - 1] === true) {
        countBombs += 1;
      }
      if (i - 1 >= 0 && j >= 0 && i - 1 < rows && j < columns && matrix[i - 1][j] === true) {
        countBombs += 1;
      }
      if (i - 1 >= 0 && j + 1 >= 0 && i - 1 < rows && j + 1 < columns && matrix[i - 1][j + 1] === true) {
        countBombs += 1;
      }
      if (i >= 0 && j - 1 >= 0 && i < rows && j - 1 < columns && matrix[i][j - 1] === true) {
        countBombs += 1;
      }
      if (i >= 0 && j + 1 >= 0 && i < rows && j + 1 < columns && matrix[i][j + 1] === true) {
        countBombs += 1;
      }
      if (i + 1 >= 0 && j - 1 >= 0 && i + 1 < rows && j - 1 < columns && matrix[i + 1][j - 1] === true) {
        countBombs += 1;
      }
      if (i + 1 >= 0 && j >= 0 && i + 1 < rows && j < columns && matrix[i + 1][j] === true) {
        countBombs += 1;
      }
      if (i + 1 >= 0 && j + 1 >= 0 && i + 1 < rows && j + 1 < columns && matrix[i + 1][j + 1] === true) {
        countBombs += 1;
      }

      arr[i].push(countBombs);
      countBombs = 0;
    }
  }

  return arr;
}

module.exports = {
  minesweeper
};
