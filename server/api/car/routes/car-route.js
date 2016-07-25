"use strict";
var car_controller_1 = require('../controller/car-controller');
var carRoutes = (function () {
    function carRoutes() {
    }
    carRoutes.init = function (router) {
        router
            .route('/api/car')
            .get(car_controller_1.carController.getAll)
            .post(car_controller_1.carController.createNew);
        router
            .route('/api/car/:id')
            .delete(car_controller_1.carController.removeById);
    };
    return carRoutes;
}());
exports.carRoutes = carRoutes;
