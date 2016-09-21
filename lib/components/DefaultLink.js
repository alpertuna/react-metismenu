'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/components/DefaultLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

var DefaultLink = function DefaultLink(_ref) {
  var className = _ref.className;
  var classNameActive = _ref.classNameActive;
  var classNameHasActiveChild = _ref.classNameHasActiveChild;
  var active = _ref.active;
  var hasActiveChild = _ref.hasActiveChild;
  var to = _ref.to;
  var externalLink = _ref.externalLink;
  var hasSubMenu = _ref.hasSubMenu;
  var toggleSubMenu = _ref.toggleSubMenu;
  var activateMe = _ref.activateMe;
  var children = _ref.children;
  return _react2.default.createElement(
    'a',
    {
      className: (0, _classnames2.default)(className, active && classNameActive, hasActiveChild && classNameHasActiveChild),
      href: to,
      onClick: hasSubMenu ? toggleSubMenu : activateMe,
      target: externalLink ? '_blank' : undefined
    },
    children
  );
};

DefaultLink.propTypes = {
  className: _react.PropTypes.string.isRequired,
  classNameActive: _react.PropTypes.string.isRequired,
  classNameHasActiveChild: _react.PropTypes.string.isRequired,
  active: _react.PropTypes.bool.isRequired,
  hasActiveChild: _react.PropTypes.bool.isRequired,
  to: _react.PropTypes.string.isRequired,
  externalLink: _react.PropTypes.bool,
  hasSubMenu: _react.PropTypes.bool.isRequired,
  toggleSubMenu: _react.PropTypes.func,
  activateMe: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.array]).isRequired
};

exports.default = DefaultLink;