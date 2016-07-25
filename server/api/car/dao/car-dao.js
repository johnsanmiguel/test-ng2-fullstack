"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var car_model_1 = require('../model/car-model');
var _ = require('lodash');
car_model_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Car
            .find(_query)
            .exec(function (err, todos) {
            err ? reject(err)
                : resolve(todos);
        });
    });
});
car_model_1.default.static('createNew', function (car) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(car)) {
            return reject(new TypeError('Todo is not a valid object.'));
        }
        var _something = new car(car);
        _something.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
car_model_1.default.static('removeById', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Car
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Car = mongoose.model('Car', car_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Car;
