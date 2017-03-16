'use strict';

 /**
 * Returns recommendations
 * Accessed at POST /problem/:problem_number
 * @param {Object} req
 * @param {Object} res
 * @return {Object} {}
 */
exports.postData = (req, res) => {
  let problem = selector(req.body.id);
  problem.input = req.body.input;
  problem.output = mult3y5(problem.input);
  res.status(200).json(problem);
};


/**
 * Sum of natural numbers
 * that are multiples of 3 & 5
 * bellow a specified limit
 * @param {Number} limit
 * @return {Number} total
 */
const mult3y5 = exports.mult3y5 = (limit) => {
  let total = 0;
  total = limit;
  return total;
}

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
