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
  var className = _ref.className,
      classNameActive = _ref.classNameActive,
      classNameHasActiveChild = _ref.classNameHasActiveChild,
      active = _ref.active,
      hasActiveChild = _ref.hasActiveChild,
      to = _ref.to,
      externalLink = _ref.externalLink,
      hasSubMenu = _ref.hasSubMenu,
      toggleSubMenu = _ref.toggleSubMenu,
      activateMe = _ref.activateMe,
      children = _ref.children;
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

DefaultLink.defaultProps = {
  externalLink: false,
  toggleSubMenu: null
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