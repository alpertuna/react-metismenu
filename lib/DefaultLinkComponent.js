"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default Item Link Class
 *
 * @constructor
 * @extends React.Component
 *
 * Props come from Item component
 * @prop {boolean} [props.target] - Specifies external or not
 * @prop {string} [props.to] - Href address to link
 * @prop {function} [props.toggleSubMenu] - For collapable items, toggle callback
 * @prop {React.Component} props.children - Contents of link (label, icons..)
 */
var DefaultLinkComponent = function DefaultLinkComponent(props) {
  return _react2.default.createElement(
    "a",
    { className: "metismenu-link", target: props.target, href: props.to, onClick: props.toggleSubMenu },
    props.children
  );
}; /**
    * src/Link.jsx
    * Author: H.Alper Tuna <halpertuna@gmail.com>
    * Date: 07.09.2016
    */

DefaultLinkComponent.propTypes = {
  target: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.boolean]),
  to: _react.PropTypes.string,
  toggleSubMenu: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.boolean]),
  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.element]).isRequired
};

exports.default = DefaultLinkComponent;