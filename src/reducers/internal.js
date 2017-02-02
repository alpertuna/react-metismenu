/**
 * @file src/reducers/internal.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 03.02.2017
 */

/* eslint-env browser */

import { combineReducers } from 'redux';
import reducers from './index';

export default combineReducers({
  metisMenuStore: reducers,
});
