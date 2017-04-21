'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file actions/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var updateContent = exports.updateContent = function updateContent(reduxUid, content) {
  return {
    type: 'UPDATE_CONTENT',
    reduxUid: reduxUid,
    content: content
  };
};

var changeSubMenuVisibility = exports.changeSubMenuVisibility = function changeSubMenuVisibility(reduxUid, id, trace, subMenuVisibility) {
  return {
    type: 'CHANGE_SUBMENU_VISIBILITY',
    reduxUid: reduxUid,
    id: id,
    trace: trace,
    subMenuVisibility: subMenuVisibility
  };
};

var changeActiveLinkId = exports.changeActiveLinkId = function changeActiveLinkId(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'id',
    value: value
  };
};
var changeActiveLinkTo = exports.changeActiveLinkTo = function changeActiveLinkTo(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'to',
    value: value
  };
};
var changeActiveLinkLabel = exports.changeActiveLinkLabel = function changeActiveLinkLabel(reduxUid, value) {
  return {
    type: 'CHANGE_ACTIVE_LINK',
    reduxUid: reduxUid,
    propName: 'label',
    value: value
  };
};
var changeActiveLinkFromLocation = exports.changeActiveLinkFromLocation = function changeActiveLinkFromLocation(reduxUid) {
  return {
    type: 'CHANGE_ACTIVE_LINK_FROM_LOCATION',
    reduxUid: reduxUid
  };
};