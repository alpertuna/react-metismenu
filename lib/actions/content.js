'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file actions/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var updateContent = exports.updateContent = function updateContent(content) {
  return {
    type: 'UPDATE_CONTENT',
    content: content
  };
};

var changeSubMenuVisibility = exports.changeSubMenuVisibility = function changeSubMenuVisibility(id, trace, subMenuVisibility) {
  return {
    type: 'CHANGE_SUBMENU_VISIBILITY',
    id: id,
    trace: trace,
    subMenuVisibility: subMenuVisibility
  };
};

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