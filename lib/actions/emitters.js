'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file actions/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var emitSelected = exports.emitSelected = function emitSelected(reduxUid, e) {
  return {
    type: 'EMIT_SELECTED',
    reduxUid: reduxUid,
    event: e
  };
};

var updateListener = exports.updateListener = function updateListener(reduxUid, listener) {
  return {
    type: 'UPDATE_LISTENER',
    reduxUid: reduxUid,
    listener: listener
  };
};

exports.default = true;