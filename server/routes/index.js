"use strict";
var todo_routes_1 = require('../api/todo/routes/todo-routes');
var person_route_1 = require('../api/person/routes/person-route');
var car_route_1 = require('../api/car/routes/car-route');
var index_1 = require('../commons/static/index');
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_routes_1.TodoRoutes.init(router);
        person_route_1.PersonRoutes.init(router);
        car_route_1.carRoutes.init(router);
        router
            .route('*')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
