/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "expect, done" }]*/
/*global describe it */
'use strict';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = require('expect');
chai.should();
chai.use(chaiHttp);

// Set of problems
const set1 = require('../problems/1-10');

describe('Test for server response\n', () => {
  it('GET /: Responds with JSON Message', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.header('content-type', 'text/html; charset=UTF-8');
        if (err) throw err;
        done();
      });
  });
  it('POST /problem: It should return an object with info and results for the problem.', (done) => {
    const problem = {
      id: 1,
      input: 100
    }
    chai.request(server)
      .post('/problems')
      .send(problem)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.title.should.be.a('string');
        res.body.should.have.property('id');
        res.body.id.should.be.a('number');
        res.body.should.have.property('input');
        res.body.should.have.property('output');
        if (err) throw err;
        done();
      });
  });

});

describe('Test Project Euler problems\n', () => {
  describe('Problem 1 ~ 10', () => {
    it('1. Gives the total of the sum of multiples of 3 and 5', (done) => {
      const res = set1.mult3y5(1000);
      expect(res)
        .toBeA('number', 'The result should be a number.')
        .toEqual(233168, 'The result should be 23.');
      done();
    });
  });
});
