'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file actions/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var emitSelected = exports.emitSelected = function emitSelected(e) {
  return {
    type: 'EMIT_SELECTED',
    event: e
  };
};

exports.default = true;