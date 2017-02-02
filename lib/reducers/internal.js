'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file src/reducers/internal.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 03.02.2017
 */

/* eslint-env browser */

exports.default = (0, _redux.combineReducers)({
  metisMenuStore: _index2.default
});