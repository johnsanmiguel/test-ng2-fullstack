var mongoose = require('mongoose');
var carDAO = require(process.cwd() + '/server/api/car/dao/car-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('carDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    carDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
