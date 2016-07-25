import * as express from 'express';
import {TodoRoutes} from '../api/todo/routes/todo-routes';
import {PersonRoutes} from '../api/person/routes/person-route';
import {carRoutes} from '../api/car/routes/car-route';

import {StaticDispatcher} from '../commons/static/index';


export class Routes {
   static init(app: express.Application, router: express.Router) {
     TodoRoutes.init(router);
     PersonRoutes.init(router);
     carRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     

     app.use('/', router);
   }
}
