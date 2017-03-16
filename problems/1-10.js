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
    total = total + multOf(i, 3) + multOf(i, 5);
  }
  return total;
}

function multOf(num, mult) {
  if (num % mult === 0) return num;
  return 0;
}
