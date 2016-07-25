"use strict";
var person_controller_1 = require('../controller/person-controller');
var PersonRoutes = (function () {
    function PersonRoutes() {
    }
    PersonRoutes.init = function (router) {
        router
            .route('/api/person')
            .get(person_controller_1.PersonController.getAll)
            .post(person_controller_1.PersonController.createNew);
        router
            .route('/api/person/:id')
            .delete(person_controller_1.PersonController.removeById);
    };
    return PersonRoutes;
}());
exports.PersonRoutes = PersonRoutes;
