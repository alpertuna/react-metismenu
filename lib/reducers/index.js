'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _emitters = require('./emitters');

var _emitters2 = _interopRequireDefault(_emitters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  content: _content2.default,
  emitters: _emitters2.default
}); /**
     * src/reducers/index.js
     * Author: H.Alper Tuna <halpertuna@gmail.com>
     * Date: 16.09.2016
     */

/* eslint-env browser */