"use strict";

import * as express from 'express';
import {PersonController} from '../controller/person-controller';

export class PersonRoutes {
  static init(router:express.Router) {
    router
      .route('/api/person')
      .get(PersonController.getAll)
      .post(PersonController.createNew);

    router
      .route('/api/person/:id')
      .delete(PersonController.removeById);
  }
}
