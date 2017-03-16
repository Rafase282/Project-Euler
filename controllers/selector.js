'use strict';

const set1 = require('../problems/1-10');
/**
 * Provides the problem description based on ID
 * @param {Number} limit
 * @return {Number} total
 */
const selector = exports.selector = (id) => {
  let info = {};
  switch (id) {
    case 1:
      info = {
        title: 'Multiples of 3 and 5',
        solve: set1.mult3y5
      }
      break;
    default:
      info = {
        title: 'Wrong ID',
        id: 0
      }
  }
  return info;
}
