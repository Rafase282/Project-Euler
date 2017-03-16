'use strict';

const aux = require('./selector');

/**
 * Returns recommendations
 * Accessed at POST /problems/
 * @param {Object} req
 * @param {Object} res
 * @return {Object} problem
 */
exports.postData = (req, res) => {
  const input = req.body.input;
  let id = req.body.id;
  switch (true) {
    case(id === '' || input === ''):
      res.status(400).json({error: 'Make sure you provided a number ID and input for the problem.'});
      break;
    case(id < 1 || id > 1):
      res.status(404).json({error: 'Problem ID not found.'});
      break;
    case(isNaN(id)):
      res.status(400).json({error: 'Wrong ID type.'});
      break;
    default:
      {
        id = Number(req.body.id);
        const problem = aux.selector(id);
        problem.id = id;
        problem.input = input;
        problem.output = problem.solve(problem.input);
        res.status(200).json(problem);
      }
  }
};
