'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _itemSubMenu = require('../actions/item-sub-menu');

var _itemActiveLink = require('../actions/item-active-link');

var _Item = require('../components/Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/containers/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleSubMenu: ownProps.hasSubMenu ? function (e) {
      e.preventDefault();
      dispatch((0, _itemSubMenu.toggleSubMenu)(ownProps.id));
    } : undefined,
    activateMe: function activateMe() {
      dispatch((0, _itemActiveLink.changeActiveLinkId)(ownProps.id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Item2.default);