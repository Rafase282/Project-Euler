'use strict';

 /**
 * Returns recommendations
 * Accessed at POST /problem/:problem_number
 * @param {Object} req
 * @param {Object} res
 * @return {Object} {}
 */
exports.postData = (req, res) => {
  const problem = {
    title: 'Multiples of 3 & 5',
    id: 1,
    input: 100
  }
  res.status(200).json({
    title: problem.title,
    id: problem.id,
    input: problem.input,
    output: 23
  });
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
