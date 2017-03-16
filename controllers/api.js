'use strict';

const aux = require('./selector');
const set1 = require('../problems/1-10');

 /**
 * Returns recommendations
 * Accessed at POST /problems/
 * @param {Object} req
 * @param {Object} res
 * @return {Object} problem
 */
exports.postData = (req, res) => {
  const problem = aux.selector(req.body.id);
  problem.input = req.body.input;
  problem.output = set1.mult3y5(problem.input);
  res.status(200).json(problem);
};
