'use strict';

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
        title: 'Multiples of 3 & 5',
        id: 1
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
