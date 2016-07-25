"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var person_service_1 = require('../services/person-service');
var PersonComponent = (function () {
    function PersonComponent(fb, _personService) {
        this._personService = _personService;
        this.name = "yo, I'm your componsent :D";
        this.persons = [];
        this.personForm = fb.group({
            "somethingSomething": ["", forms_1.Validators.required]
        });
    }
    PersonComponent.prototype.ngOnInit = function () {
        this._getAll();
    };
    PersonComponent.prototype._getAll = function () {
        var _this = this;
        this._personService
            .getAll()
            .subscribe(function (persons) {
            _this.persons = persons;
        });
    };
    PersonComponent.prototype.add = function (message) {
        var _this = this;
        this._personService
            .add(message)
            .subscribe(function (m) {
            _this.persons.push(m);
            _this.personForm.controls['somethingSomething'].updateValue("");
        });
    };
    PersonComponent.prototype.remove = function (id) {
        var _this = this;
        this._personService
            .remove(id)
            .subscribe(function () {
            _this.persons.forEach(function (t, i) {
                if (t._id === id)
                    return _this.persons.splice(i, 1);
            });
        });
    };
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person-component',
            templateUrl: 'person/templates/person.html',
            styleUrls: ['person/styles/person.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, person_service_1.PersonService])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
