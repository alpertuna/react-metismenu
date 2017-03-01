'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file reducers/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var emitters = function emitters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'EMIT_SELECTED':
      {
        if (state.emitSelected) {
          state.emitSelected(action.event);
        }
        return state;
      }
    case 'UPDATE_LISTENER':
      {
        return Object.assign({}, state, {
          emitSelected: action.listener
        });
      }
    default:
      {
        return state;
      }
  }
};

exports.default = emitters;