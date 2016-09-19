'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * src/actions/item-active-link.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var changeActiveLinkId = exports.changeActiveLinkId = function changeActiveLinkId(value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    propName: 'id',
    value: value
  };
};
var changeActiveLinkTo = exports.changeActiveLinkTo = function changeActiveLinkTo(value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    propName: 'to',
    value: value
  };
};
var changeActiveLinkLabel = exports.changeActiveLinkLabel = function changeActiveLinkLabel(value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    propName: 'label',
    value: value
  };
};
var changeActiveLinkFromLocation = exports.changeActiveLinkFromLocation = function changeActiveLinkFromLocation() {
  return {
    type: 'CHANGE_ACTIVE_LINK_FROM_LOCATION'
  };
};