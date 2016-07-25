"use strict";
var car_dao_1 = require('../dao/car-dao');
var carController = (function () {
    function carController() {
    }
    carController.getAll = function (req, res) {
        car_dao_1.default['getAll']()
            .then(function (cars) { return res.status(200).json(cars); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    carController.createNew = function (req, res) {
        var _car = req.body;
        car_dao_1.default['createNew'](_car)
            .then(function (car) { return res.status(201).json(car); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    carController.removeById = function (req, res) {
        var _id = req.params.id;
        car_dao_1.default['removeById'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return carController;
}());
exports.carController = carController;
