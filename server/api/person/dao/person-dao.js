"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var person_model_1 = require('../model/person-model');
person_model_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Person
            .find(_query)
            .exec(function (err, todos) {
            err ? reject(err)
                : resolve(todos);
        });
    });
});
person_model_1.default.static('createNew', function (person) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(person)) {
            return reject(new TypeError('Todo is not a valid object.'));
        }
        var _something = new Person(person);
        _something.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
person_model_1.default.static('removeById', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Person
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Person = mongoose.model('Person', person_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Person;
