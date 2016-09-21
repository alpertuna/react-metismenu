'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _Item = require('../components/Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleSubMenu: function toggleSubMenu(e) {
      if (!ownProps.hasSubMenu) return;
      e.preventDefault();
      dispatch((0, _actions.changeSubMenuVisibility)(ownProps.id, ownProps.trace, !ownProps.subMenuVisibility));
    },
    activateMe: function activateMe() {
      dispatch((0, _actions.changeActiveLinkId)(ownProps.id));
    }
  };
}; /**
    * src/containers/Item.js
    * Author: H.Alper Tuna <halpertuna@gmail.com>
    * Date: 16.09.2016
    */

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Item2.default);