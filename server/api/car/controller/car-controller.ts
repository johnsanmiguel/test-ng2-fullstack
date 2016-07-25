"use strict";

import * as express from 'express';
import carDAO from '../dao/car-dao';

export class carController {
  static getAll(req:express.Request, res:express.Response) {
    carDAO
      ['getAll']()
      .then(cars => res.status(200).json(cars))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:express.Request, res:express.Response) {
    let _car = req.body;

    carDAO
      ['createNew'](_car)
      .then(car => res.status(201).json(car))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    carDAO
      ['removeById'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
