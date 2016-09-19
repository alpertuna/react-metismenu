/**
 * src/reducers/item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

/* eslint-env browser */

import { showSubMenu } from '../actions/item-sub-menu';
import flattenContent from './flattenContent';

const item = (state, action) => {
  switch (action.type) {
    case 'HIDE_SUBMENU':
    case 'SHOW_SUBMENU':
    case 'TOGGLE_SUBMENU': {
      if (state.id === action.id) {
        return Object.assign({}, state, {
          subMenuVisibility: action.subMenuVisibility,
        });
      }

      return Object.assign({}, state, {
        subMenuVisibility: action.trace.indexOf(state.id) !== -1,
      });
    }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK': {
      return Object.assign({}, state, { active: state.id === action.id });
    }
    default: {
      return state;
    }
  }
};

const findItem = (content, value, prop = 'id') => content.find(i => i[prop] === value);

const content = (state = [], action) => {
  switch (action.type) {
    case 'HIDE_SUBMENU': {
      return state.map(i => item(i, action));
    }
    case 'SHOW_SUBMENU': {
      const trace = action.id
        ? findItem(state, action.id).trace
        : [];
      return state.map(i => item(i, Object.assign({ trace }, action)));
    }
    case 'TOGGLE_SUBMENU': {
      const { subMenuVisibility, trace } = findItem(state, action.id);
      return state.map(i => item(i, Object.assign({
        subMenuVisibility: !subMenuVisibility,
        trace,
      }, action)));
    }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK': {
      let activeItem;
      if (action.type === 'CHANGE_ACTIVE_LINK_FROM_LOCATION') {
        const locationSets = [
          window.location.pathname + window.location.search, // /path?search
          window.location.hash, // #hash
          window.location.pathname + window.location.search + window.location.hash, // /path?s#hash
        ];
        activeItem = state.find(i => locationSets.indexOf(i.to) !== -1);
      } else {
        activeItem = findItem(state, action.value, action.propName);
      }

      if (!activeItem) return state;

      const { id, parentId } = activeItem;
      const stage = state.map(i => item(i, Object.assign({ id }, action)));
      return content(stage, showSubMenu(parentId));
    }
    case 'UPDATE_CONTENT': {
      return flattenContent(action.content);
    }
    default: {
      return state;
    }
  }
};

export default content;
