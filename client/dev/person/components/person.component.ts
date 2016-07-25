import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {
  Validators,
  FormBuilder,
  REACTIVE_FORM_DIRECTIVES,
  FormGroup,
  FormControl
} from '@angular/forms';

import {
  PersonService
} from '../services/person-service';

type Person = {
  somethingSomething: string,
  _id: string
}

@Component({
  selector: 'person-component',
  templateUrl: 'person/templates/person.html',
  styleUrls: ['person/styles/person.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {
  name: string = `yo, I'm your componsent :D`;
  persons: Person[] = [];
  personForm: FormGroup;

  constructor(fb:FormBuilder, private _personService: PersonService) {
    this.personForm = fb.group({
      "somethingSomething": ["", Validators.required]
    });
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll():void {
    this._personService
        .getAll()
        .subscribe((persons) => {
          this.persons = persons;
        });
  }

  add(message:string):void {
    this._personService
        .add(message)
        .subscribe((m) => {
          this.persons.push(m);
          (<FormControl>this.personForm.controls['somethingSomething']).updateValue("");
        });
  }

  remove(id:string):void {
    this._personService
      .remove(id)
      .subscribe(() => {
        this.persons.forEach((t, i) => {
          if (t._id === id)
            return this.persons.splice(i, 1);
        });
      })
  }
}
