/**
 * src/reducers/index.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

/* eslint-env browser */

import { combineReducers } from 'redux';
import content from './content';
import emitters from './emitters';

export default combineReducers({
  content,
  emitters,
});
