'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @file src/actions/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

/* eslint import/prefer-default-export: 0 */

var updateContent = exports.updateContent = function updateContent(content) {
  return {
    type: 'UPDATE_CONTENT',
    content: content
  };
};