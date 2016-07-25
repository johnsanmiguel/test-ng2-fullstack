"use strict";

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import carSchema from '../model/car-model';
import * as _ from 'lodash';

carSchema.static('getAll', () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    Car
    .find(_query)
    .exec((err, todos) => {
      err ? reject(err)
      : resolve(todos);
    });
  });
});

carSchema.static('createNew', (car) => {
  return new Promise((resolve, reject) => {
      if (!_.isObject(car)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      let _something = new car(car);

      _something.save((err, saved) => {
        err ? reject(err)
        : resolve(saved);
      });
  });
});

carSchema.static('removeById', (id) => {
  return new Promise((resolve, reject) => {
      if (!_.isString(id)) {
        return reject(new TypeError('Id is not a valid string.'));
      }

      Car
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let Car = mongoose.model('Car', carSchema);

export default Car;
