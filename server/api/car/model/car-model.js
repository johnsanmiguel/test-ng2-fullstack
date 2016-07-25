"use strict";
var mongoose = require('mongoose');
var _carSchema = new mongoose.Schema({
    somethingSomething: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (_carSchema);
