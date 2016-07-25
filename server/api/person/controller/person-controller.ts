import * as express from 'express';
import PersonDAO from '../dao/person-dao';

export class PersonController {
  static getAll(req:express.Request, res:express.Response):void {
    PersonDAO
      ['getAll']()
      .then(persons => res.status(200).json(persons))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:express.Request, res:express.Response):void {
    console.log(req.body);
    let _person = req.body;

    PersonDAO
      ['createNew'](_person)
      .then(person => res.status(201).json(person))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req:express.Request, res:express.Response):void {
    let _id = req.params.id;

    PersonDAO
      ['removeById'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
