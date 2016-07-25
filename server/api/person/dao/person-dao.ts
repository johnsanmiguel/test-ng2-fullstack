import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import personSchema from '../model/person-model';

personSchema.static('getAll', () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    Person
    .find(_query)
    .exec((err, todos) => {
      err ? reject(err)
      : resolve(todos);
    });
  });
});

personSchema.static('createNew', (person:Object):Promise<any> => {
  return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(person)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      let _something = new Person(person);

      _something.save((err, saved) => {
        err ? reject(err)
        : resolve(saved);
      });
  });
});

personSchema.static('removeById', (id:string):Promise<any> => {
  return new Promise((resolve:Function, reject:Function) => {
      if (!_.isString(id)) {
        return reject(new TypeError('Id is not a valid string.'));
      }

      Person
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let Person = mongoose.model('Person', personSchema);

export default Person;
