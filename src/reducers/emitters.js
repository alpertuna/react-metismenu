/**
 * @file reducers/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

const emitters = (state = {}, action) => {
  switch (action.type) {
    case 'EMIT_SELECTED': {
      state.emitSelected(action.event);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default emitters;
