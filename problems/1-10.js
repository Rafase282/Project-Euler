'use strict';

/**
 * Sum of natural numbers
 * that are multiples of 3 & 5
 * bellow a specified limit
 * @param {Number} limit
 * @return {Number} total
 */
const mult3y5 = exports.mult3y5 = (limit) => {
  let total = 0;
  for (let i = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) total += i;
  }
  return total;
}
