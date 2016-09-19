'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * src/actions/item-sub-menu.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var showSubMenu = exports.showSubMenu = function showSubMenu(id) {
  return {
    type: 'SHOW_SUBMENU',
    subMenuVisibility: true,
    id: id
  };
};

var hideSubMenu = exports.hideSubMenu = function hideSubMenu(id) {
  return {
    type: 'HIDE_SUBMENU',
    subMenuVisibility: false,
    trace: [],
    id: id
  };
};

var toggleSubMenu = exports.toggleSubMenu = function toggleSubMenu(id) {
  return {
    type: 'TOGGLE_SUBMENU',
    id: id
  };
};