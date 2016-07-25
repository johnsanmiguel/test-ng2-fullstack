"use strict";

import * as express from 'express';
import {carController} from '../controller/car-controller';

export class carRoutes {
  static init(router:express.Router) {
    router
      .route('/api/car')
      .get(carController.getAll)
      .post(carController.createNew);

    router
      .route('/api/car/:id')
      .delete(carController.removeById);
  }
}
