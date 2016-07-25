"use strict";
var person_dao_1 = require('../dao/person-dao');
var PersonController = (function () {
    function PersonController() {
    }
    PersonController.getAll = function (req, res) {
        person_dao_1.default['getAll']()
            .then(function (persons) { return res.status(200).json(persons); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    PersonController.createNew = function (req, res) {
        console.log(req.body);
        var _person = req.body;
        person_dao_1.default['createNew'](_person)
            .then(function (person) { return res.status(201).json(person); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    PersonController.removeById = function (req, res) {
        var _id = req.params.id;
        person_dao_1.default['removeById'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return PersonController;
}());
exports.PersonController = PersonController;
