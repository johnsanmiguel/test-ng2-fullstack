var mongoose = require('mongoose');
var personDAO = require(process.cwd() + '/server/api/person/dao/person-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('personDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    personDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
