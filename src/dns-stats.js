const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let arr = [];
  let count = 0;
  let uniqDomain = '';

  domains.forEach(function(item) {
    arr.push(item.split('.').reverse());
  });

  let maxLengthDomain = [];

  arr.forEach(function(item) {
    if (item.length > maxLengthDomain.length) {
      maxLengthDomain = item;
    }
  });

  maxLengthDomain.forEach(function(item1, i1) {
    arr.forEach(function(item2) {
      if (item2.includes(item1)) {
        count += 1;
      }
    });

    for (let j = 0; j <= i1; j += 1) {
      uniqDomain += `.${maxLengthDomain[j]}`;
    }

    obj[uniqDomain] = count;

    count = 0;
    uniqDomain = '';
  });

  console.log(arr);
  console.log(maxLengthDomain);
  console.log(obj);
  return obj;
}

module.exports = {
  getDNSStats
};
