'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Container = require('../containers/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref, _ref2) {
  var id = _ref.id;
  var icon = _ref.icon;
  var label = _ref.label;
  var to = _ref.to;
  var externalLink = _ref.externalLink;
  var hasSubMenu = _ref.hasSubMenu;
  var active = _ref.active;
  var hasActiveChild = _ref.hasActiveChild;
  var subMenuVisibility = _ref.subMenuVisibility;
  var toggleSubMenu = _ref.toggleSubMenu;
  var activateMe = _ref.activateMe;
  var classStore = _ref2.classStore;
  var LinkComponent = _ref2.LinkComponent;
  return _react2.default.createElement(
    'li',
    { className: (0, _classnames2.default)(classStore.classItem, active && classStore.classItemActive, hasActiveChild && classStore.classItemHasActiveChild) },
    _react2.default.createElement(
      LinkComponent,
      {
        className: classStore.classLink,
        classNameActive: classStore.classLinkActive,
        classNameHasActiveChild: classStore.classLinkHasActiveChild,
        active: active,
        hasActiveChild: hasActiveChild,
        to: to,
        externalLink: externalLink,
        hasSubMenu: hasSubMenu,
        toggleSubMenu: toggleSubMenu,
        activateMe: activateMe
      },
      _react2.default.createElement('i', { className: (0, _classnames2.default)(classStore.classIcon, classStore.iconNamePrefix + icon) }),
      label,
      hasSubMenu && _react2.default.createElement('i', {
        className: (0, _classnames2.default)(classStore.classStateIcon, classStore.iconNamePrefix + (subMenuVisibility ? classStore.iconNameStateVisible : classStore.iconNameStateHidden))
      })
    ),
    hasSubMenu && _react2.default.createElement(_Container2.default, {
      itemId: id,
      visible: subMenuVisibility
    })
  );
}; /**
    * src/components/Container.jsx
    * Author: H.Alper Tuna <halpertuna@gmail.com>
    * Date: 16.09.2016
    */

Item.propTypes = {
  id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
  icon: _react.PropTypes.string,
  label: _react.PropTypes.string,
  to: _react.PropTypes.string,
  externalLink: _react.PropTypes.bool,
  hasSubMenu: _react.PropTypes.bool.isRequired,
  active: _react.PropTypes.bool.isRequired,
  hasActiveChild: _react.PropTypes.bool.isRequired,
  subMenuVisibility: _react.PropTypes.bool.isRequired,
  toggleSubMenu: _react.PropTypes.func,
  activateMe: _react.PropTypes.func.isRequired
};

Item.contextTypes = {
  classStore: _react.PropTypes.object.isRequired,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]).isRequired
};

exports.default = Item;